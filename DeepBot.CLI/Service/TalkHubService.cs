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

            //TO SPECIFY
            string url = "https://localhost:44319/";
            Connection = new HubConnection(url);
            Hub = Connection.CreateHubProxy("DeepTalk");
            Connection.Start().Wait();
        }

        public async Task<string> SendHandlePackageToServer(string package, string apiKey)
        {
            return await Hub.Invoke<string>("ReceivedHandler", package, apiKey);
        } 

        public void SendPackage()
        {
            Hub.On<string,bool>("SendPackage", (c, o) => PackageBuild?.Invoke(c,o));
        }
    }
}
