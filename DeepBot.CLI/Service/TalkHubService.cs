using Microsoft.AspNetCore.SignalR.Client;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DeepBot.CLI.Service
{
    public class TalkHubService
    {
        private HubConnection Connection;

        public event Action<string, bool> PackageBuild;

        public TalkHubService()
        {
            string url = "https://localhost:44319/deeptalk";
            Connection = new HubConnectionBuilder()
                .WithUrl(url)
                .Build();

            Connection.Closed += async (error) =>
            {
                await Task.Delay(new Random().Next(0, 5) * 1000);
                await Connection.StartAsync();
            };

            Connection.StartAsync();

            GetPackage();
        }

        public async Task SendHandlePackageToServer(string package, string apiKey)
        {
            await Connection.InvokeAsync("ReceivedHandler", package, apiKey);
        }

        public async Task JoinRoom(string apiKey)
        {
            await Connection.InvokeAsync("JoinRoomCLI", apiKey);
        }

        public void GetPackage()
        {
            Connection.On<string, bool>("SendPackage", (c, o) => PackageBuild?.Invoke(c, o));
        }
    }
}
