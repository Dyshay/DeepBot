using Microsoft.AspNet.SignalR.Client;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.CLI.Service
{
    public class TalkHubService
    {
        private IHubProxy Hub;
        private HubConnection Connection;

        public TalkHubService()
        {
            //TO SPECIFY
            string url = "";
            Connection = new HubConnection(url);
            Hub = Connection.CreateHubProxy("DeepTalk");
            Connection.Start().Wait();
        }
    }
}
