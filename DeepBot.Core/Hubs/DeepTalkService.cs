using DeepBot.Core.Network.HubMessage;
using DeepBot.Core.Network.HubMessage.Services;
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

        /// <summary>
        /// Add new task in the queue
        /// </summary>
        /// <param name="tcpId">Connexion ID of Socket</param>
        /// <param name="cliId">Connexion ID of console</param>
        /// <param name="apiKey">Connexion ID of clients</param>
        /// <param name="packages">List of package to send</param>
        /// <param name="delayTime">Delay in ms</param>
        public void AddTask(string tcpId, string cliId, string apiKey, List<IHubClientAction> packages, int delayTime)
        {
            Tasks.Add(new HubTask(tcpId, cliId, apiKey, packages, DateTime.Now.AddMilliseconds(delayTime)));
        }

        private async Task<bool> WaitingTask()
        {
            if (Tasks.Count == 0)
            {
                await Task.Delay(GetDelayWaiting());
                return false;
            }
            else
                return true;
        }

        private int GetDelayWaiting()
        {
            if (StartedServiceTime.AddMinutes(3) >= DateTime.Now)
                return 30000;

            return 1000;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            while (true)
            {
                bool wait = await WaitingTask();

                if (wait)
                {
                    var task = Tasks.Find(c => c.RequestEnd <= DateTime.Now && !c.isProgress);

                    if (task != null)
                    {
                        Task.Factory.StartNew(() =>
                        {
                            task.isProgress = true;
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
                                case HubNodeAction e:
                                    for (int node = 1; node < e.NodePath.Count; node++)
                                    {
                                        await Task.Delay(40);
                                        e.Method?.Invoke(e.NodePath[node].Id);
                                        await _hubContext.Clients.GroupExcept(task.ApiKey, task.CliID).SendAsync("DispatchClient", e.ActionClient.Network, task.TcpId);
                                    }
                                    break;
                                default:
                                    break;
                            }
                        });
                            Tasks.Remove(task);
                        }).Wait();

                    }
                }
            }
        }
    }
}
