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

        public event Action<string, bool, string> PackageBuild;
        public event Action<string, int, bool, string> ConnexionHandler;

        public TalkHubService(string token)
        {
            string url = "https://localhost:44319/deeptalk";
            Connection = new HubConnectionBuilder()
                .WithUrl(url, options =>
                {
                    options.AccessTokenProvider = async () =>
                    {
                        return token;
                    };
                })
                .Build();


            Connection.Closed += async (error) =>
            {
                await Task.Delay(new Random().Next(0, 5) * 1000);
                await Connection.StartAsync();
            };

            Connection.StartAsync();

            InitHandler();
        }

        private void InitHandler()
        {
            GetPackage();
            InitConnectionTcp();
        }

        public async Task SendHandlePackageToServer(string package, string tcpId)
        {
            await Connection.InvokeAsync("ReceivedHandler", package, tcpId);
        }

        public async Task JoinRoom()
        {
            await Connection.InvokeAsync("JoinRoomCLI");
        }

        public void InitConnectionTcp()
        {
            Connection.On<string, int, bool, string>("NewConnection", (ip, port, @switch, tcpId) => ConnexionHandler?.Invoke(ip, port, @switch, tcpId));
        }

        public void GetPackage()
        {
            Connection.On<string, bool, string>("SendPackage", (c, o, tcpId) => PackageBuild?.Invoke(c, o, tcpId));
        }
    }
}
