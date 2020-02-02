using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.GameServer;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DeepBot.Core.Handlers.AuthPlatform
{
    public class AccountHandler : IHandler
    {
        [Receiver("HC")]
        public void GetWelcomeKeyAsync(DeepTalk hub, string package, Account account, string tcpId)
        {
            //account dispatch value (connecting)
            account.State = AccountState.CONNECTING;
            account.WelcomeKey = package.Substring(2);

            hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "Connexion au serveur d'auth", tcpId), tcpId).Wait();

            hub.SendPackage("1.30.14", tcpId);

            // USE THE ACCOUNT AND PASSWORD FROM account
            hub.SendPackage($"{account.AccountName}\n{Hash.EncryptPassword(account.Password, account.WelcomeKey)}", tcpId);
            hub.SendPackage($"Af", tcpId);
        }

        [Receiver("Ad")]
        public void GetAccountUserName(DeepTalk hub, string package, Account account, string tcpId) => Console.WriteLine("NEED CALL TO HUB TO FRONT");

        [Receiver("Af")]
        public void GetLoginQueue(DeepTalk hub, string package, Account account, string tcpId) => hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "[File d'attente] Position " + package[2] + "/" + package[4], tcpId), tcpId).Wait();

        [Receiver("AH")]
        public void GetServerState(DeepTalk hub, string package, Account account, string tcpId)
        {
            string[] serverList = package.Substring(2).Split('|');
            Server server = account.Server;
            bool firstTime = true;

            foreach (string sv in serverList)
            {
                string[] separator = sv.Split(';');

                int id = int.Parse(separator[0]);
                ServerState serverState = (ServerState)byte.Parse(separator[1]);

                //if (id == (int)account.Config.Server)
                /// A REVOIR EN DESSOUS
                if (id == 609)
                {
                    server.Id = 609;
                    server.Name = "Bilby"; // NEED TO USE CFG
                    server.State = serverState;
                    hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, $"Le serveur Bilby est {account.Server.State}", tcpId), tcpId).Wait();

                    if (serverState != ServerState.ONLINE)
                        firstTime = false;
                }
            }

            if (!firstTime && server.State == ServerState.ONLINE)
                hub.SendPackage("Ax", tcpId);
        }

        [Receiver("AQ")]
        public void GetSecretQuestion(DeepTalk hub, string package, Account account, string tcpId)
        {
            if (account.Server.State == ServerState.ONLINE)
                hub.SendPackage("Ax", tcpId, true);
        }

        [Receiver("AxK")]
        public async void GetServerList(DeepTalk hub, string package, Account account, string tcpId)
        {
            //AM.Account account = prmClient.Account;
            string[] loc5 = package.Substring(3).Split('|');
            int counter = 1;
            bool picked = false;

            while (counter < loc5.Length && !picked)
            {
                string[] _loc10_ = loc5[counter].Split(',');
                int serverId = int.Parse(_loc10_[0]);

                if (serverId == 609)
                {
                    if (account.Server.State == ServerState.ONLINE)
                    {
                        picked = true;
                        //account.Game.Character.evento_Servidor_Seleccionado();
                    }
                    else
                    {
                        var wait = new Random().Next(100, 1000);
                        hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Serveur non accessible pour le moment, je réessaye dans {wait}ms", tcpId), tcpId).Wait();
                        await Task.Delay(wait);
                    }
                }
                else
                    counter++;
            }

            if (picked)
                hub.SendPackage($"AX{account.Server.Id}", tcpId, true);
        }


        [Receiver("AXEf")]
        public void NotSubscribe(DeepTalk hub, string package, Account account, string tcpId)
        {
            hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "Vous n'êtes pas abonnée", tcpId), tcpId).Wait();
        }

        [Receiver("AXK")]
        public void GetServerWorld(DeepTalk hub, string package, Account account, string tcpId)
        {
            account.GameTicket = package.Substring(14);
            hub.Clients.Caller.SendAsync("NewConnection", Hash.DecryptIp(package.Substring(3, 8)), Hash.DecryptPort(package.Substring(11, 3).ToCharArray()), true, tcpId);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Redirection vers le world {Hash.DecryptIp(package.Substring(3, 8))} {Hash.DecryptPort(package.Substring(11, 3).ToCharArray())}", tcpId), tcpId).Wait();
        }
    }
}
