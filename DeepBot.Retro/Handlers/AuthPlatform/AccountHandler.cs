﻿using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
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
        public void GetWelcomeKeyAsync(DeepTalk hub, string package, AccountDB account, short tcpId)
        {
            //account dispatch value (connecting)
            account.State = AccountState.CONNECTING;
            account.WelcomeKey = package.Substring(2);
            hub.Clients.Caller.SendAsync("SendPackage", "1.30", false, tcpId);

            // USE THE ACCOUNT AND PASSWORD FROM account
            hub.Clients.Caller.SendAsync("SendPackage", $"${account.Username}\n{Hash.EncryptPassword(account.Password, account.WelcomeKey)}", false, tcpId);
            hub.Clients.Caller.SendAsync("SendPackage", "Af", false, tcpId);
        }

        [Receiver("Ad")]
        public void GetAccountUserName(DeepTalk hub, string package, AccountDB account, short tcpId) => Console.WriteLine("NEED CALL TO HUB TO FRONT");

        [Receiver("Af")]
        public void GetLoginQueue(DeepTalk hub, string package, AccountDB account, short tcpId) => Console.WriteLine("NEED CALL TO HUB TO FRONT");

        [Receiver("AXK")]
        public void GetServerWorld(DeepTalk hub, string package, AccountDB account, short tcpId)
        {
            string gameTicket = package.Substring(14);
            hub.Clients.Caller.SendAsync("NewConnection", Hash.DecryptIp(package.Substring(3, 8)), Hash.DecryptPort(package.Substring(11, 3).ToCharArray()));
        }
    }
}
