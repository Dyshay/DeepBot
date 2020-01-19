using Microsoft.AspNet.SignalR.Client;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DeepBot.CLI.Service
{
    public class TalkHubService
    {
        private IHubProxy Hub;
        private HubConnection Connection;

        public event Action<string,bool> PackageBuild;

        public TalkHubService()
        {
            string url = "https://localhost:44319/";
            Connection = new HubConnection(url);
            Hub = Connection.CreateHubProxy("DeepTalk");
            Connection.Start().Wait();
        }

        public async Task SendHandlePackageToServer(string package, string apiKey)
        {
            await Hub.Invoke("ReceivedHandler", package, apiKey);
        } 

        public async Task JoinRoom(string apiKey)
        {
            await Hub.Invoke("JoinRoom", apiKey);
        }

        public void SendPackage()
        {
            Hub.On<string,bool>("SendPackage", (c, o) => PackageBuild?.Invoke(c,o));
        }
    }
}
