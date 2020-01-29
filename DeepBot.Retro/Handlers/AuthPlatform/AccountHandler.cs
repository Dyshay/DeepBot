using DeepBot.Core.Hubs;
using DeepBot.Data.Database;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Handlers.AuthPlatform
{
    public class AccountHandler
    {
        public void GetWelcomeKeyAsync(DeepTalk hub, string package, UserDB account, short tcpId)
        {
            //account dispatch value (connecting)
            hub.Clients.User(account.CliConnectionId).SendAsync("SendPackage", "1.30", false, tcpId);
            //hub.Clients.User(cliId).SendAsync("Send")
        }
    }
}
