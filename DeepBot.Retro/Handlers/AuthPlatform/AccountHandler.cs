using DeepBot.Core.Hubs;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Handlers.AuthPlatform
{
    public class AccountHandler
    {
        public void GetWelcomeKeyAsync(DeepTalk hub, string packageRawData, string cliId, short tcpId)
        {
            //account dispatch value (connecting)

            hub.Clients.User(cliId).SendAsync("SendPackage", "1.30", false, tcpId);

        }
    }
}
