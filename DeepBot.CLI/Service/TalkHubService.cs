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
        public event Action<string, short> ConnexionHandler;
        public event Action<short> CreateTcpHandler;

        public TalkHubService(string token)
        {
            string url = "https://localhost:44319/deeptalk";
            Connection = new HubConnectionBuilder()
                .WithUrl(url, options => {
                    options.AccessTokenProvider = async () => {
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
            HandleCreateTcp();
        }

        public async Task SendHandlePackageToServer(string package, string apiKey)
        {
            await Connection.InvokeAsync("ReceivedHandler", package, apiKey);
        }

        public async Task JoinRoom()
        {
            await Connection.InvokeAsync("JoinRoomCLI");
        }

        public void HandleCreateTcp()
        {
            Connection.On<short>("CreateTcp", (o) => CreateTcpHandler?.Invoke(o));
        }

        public void InitConnectionTcp()
        {
            Connection.On<string, short>("NewConnection", (ip, port) => ConnexionHandler?.Invoke(ip, port));
        }

        public void GetPackage()
        {
            Connection.On<string, bool>("SendPackage", (c, o) => PackageBuild?.Invoke(c, o));
        }
    }
}
