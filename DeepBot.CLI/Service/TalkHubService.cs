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
        public event Action<string, int, bool, string,bool> ConnexionHandler;
        public event Action<string> DisconnectHandler;
        public event Action<string> CheckScan;

        public TalkHubService(string token)
        {
            string url = "https://localhost:443/deeptalk";
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
            InitDisconnect();
            IsCheckScan();
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
            Connection.On<string, int, bool, string,bool>("NewConnection", (ip, port, @switch, tcpId,iscan) => ConnexionHandler?.Invoke(ip, port, @switch, tcpId,iscan));
        }

        public void IsCheckScan()
        {
            Connection.On<string>("CheckCliScan",(c) => CheckScan?.Invoke(c));
        }

        public void CallCallBackCheck(string tcpId, bool isScan)
        {
            Connection.InvokeAsync("ScanCallBack", isScan, tcpId);
        }

        public void InitDisconnect()
        {
            Connection.On<string>("Disconnect", (tcpId) => DisconnectHandler?.Invoke(tcpId));
        }

        public void GetPackage()
        {
            Connection.On<string, bool, string>("SendPackage", (c, o, tcpId) => PackageBuild?.Invoke(c, o, tcpId));
        }
    }
}
