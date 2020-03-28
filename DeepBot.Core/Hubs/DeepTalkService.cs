using DeepBot.Core.Network.HubMessage;
using DeepBot.Data.Model.Hub.Model;
using DeepBot.Data.Model.Hub.Model.Actions;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DeepBot.Core.Hubs
{
    public class DeepTalkService : BackgroundService
    {
        private readonly IHubContext<DeepTalk> _hubContext;
        private DateTime StartedServiceTime;
        public static List<HubTask> Tasks;

        public DeepTalkService(IHubContext<DeepTalk> hubContext)
        {
            _hubContext = hubContext;
            Tasks = new List<HubTask>();
            StartedServiceTime = DateTime.Now;
        }

        public void AddTask(string tcpId, string cliId, string apiKey, List<IHubAction> packages, DateTime requestEnd)
        {
            Tasks.Add(new HubTask(tcpId, cliId, apiKey, packages, requestEnd));
        }

        private async Task<bool> WaitingTask()
        {
            if (Tasks.Count == 0)
            {
                await Task.Delay(GetDelayWaiting());
                await WaitingTask();
            }

            return true;
        }

        private int GetDelayWaiting()
        {
            if (StartedServiceTime.AddMinutes(6) >= DateTime.Now)
                return 30000;

            return 600;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            while (!stoppingToken.IsCancellationRequested)
            {
                if (await WaitingTask())
                {
                    var task = Tasks.Find(c => c.RequestEnd <= DateTime.Now);

                    if (Tasks.Find(c => c.RequestEnd <= DateTime.Now) != null)
                    {
                        task.Packages.ForEach(async package =>
                        {
                            switch (package)
                            {
                                case HubClientAction e:
                                    await _hubContext.Clients.GroupExcept(task.ApiKey, task.CliID).SendAsync("DispatchClient", e.Network, task.TcpId);
                                    break;
                                case HubMethodAction e:
                                    e.Method?.Invoke();
                                    break;
                                case HubPackageAction e:
                                    await _hubContext.Clients.Client(task.CliID).SendAsync("SendPackage", e.Package, false, task.TcpId);
                                    break;
                                default:
                                    break;
                            }
                        });

                        Tasks.Remove(task);
                    }
                }
            }
        }
    }
}
