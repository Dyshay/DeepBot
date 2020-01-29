using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Data.Database;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Handlers.AuthPlatform
{
    public class AccountHandler
    {
        [Receiver("HC")]
        public void GetWelcomeKeyAsync(DeepTalk hub, string package, UserDB account, short tcpId)
        {
            //account dispatch value (connecting)

            string welcomeKey = package.Substring(2);
            hub.Clients.Caller.SendAsync("SendPackage", "1.30", false, tcpId);

            // USE THE ACCOUNT AND PASSWORD FROM account
            hub.Clients.Caller.SendAsync("SendPackage", $"account\n{Hash.EncryptPassword("password", welcomeKey)}");
            hub.Clients.Caller.SendAsync("SendPackage", "Af");
        }
    }
}
