﻿using Microsoft.AspNet.SignalR.Client;
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

        public event Action<string> PackageBuild;

        public TalkHubService()
        {
            //TO SPECIFY
            string url = "";
            Connection = new HubConnection(url);
            Hub = Connection.CreateHubProxy("DeepTalk");
            Connection.Start().Wait();
        }

        public async Task<string> SendHandlePackageToServer(string package, string apiKey)
        {
            return await Hub.Invoke<string>("HandlePackage", package, apiKey);
        } 

        public void SendPackage()
        {
            Hub.On<string>("SendPackage", (c) => PackageBuild?.Invoke(c));
        }
    }
}
