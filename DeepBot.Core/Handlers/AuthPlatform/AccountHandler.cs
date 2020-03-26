using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.GameServer;
using DeepBot.Data.Utilities;
using Microsoft.AspNetCore.SignalR;
using MongoDB.Driver;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Core.Handlers.AuthPlatform
{
    public class AccountHandler : IHandler
    {
        [Receiver("HC")]
        public void GetWelcomeKeyAsync(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var account = user.Accounts.FirstOrDefault(c => c.TcpId == tcpId);
            if (account.CurrentCharacter != null)
                account.CurrentCharacter.State = CharacterStateEnum.CONNECTING;
            account.WelcomeKey = package.Substring(2);
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);

            hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "Connexion au serveur d'auth", tcpId), tcpId).Wait();

            hub.SendPackage("1.31.3", tcpId);

            hub.SendPackage($"{account.AccountName}\n{Hash.EncryptPassword(account.Password, account.WelcomeKey)}", tcpId);
            hub.SendPackage($"Af", tcpId);
        }

        [Receiver("Ad")]
        public void GetAccountUserName(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager) => Console.WriteLine("NEED CALL TO HUB TO FRONT");

        [Receiver("Af")]
        public void GetLoginQueue(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] queueData = package.Substring(2).Split('|');
            hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "[File d'attente] Position " + queueData[0] + "/" + queueData[1], tcpId), tcpId).Wait();
            if (int.Parse(queueData[0]) > 100)
                hub.SendPackage("Af", tcpId);

        }

        [Receiver("AH")]
        public void GetServerState(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] serverList = package.Substring(2).Split('|');
            Server server = user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).Server;
            bool firstTime = true;

            foreach (string sv in serverList)
            {
                string[] separator = sv.Split(';');

                int id = int.Parse(separator[0]);
                ServerState serverState = (ServerState)byte.Parse(separator[1]);

                if (id == server.Id)
                {
                    server.State = serverState;
                    manager.ReplaceOneAsync(c => c.Id == user.Id, user);
                    hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, $"Le serveur {server.Name} est {server.State}", tcpId), tcpId).Wait();

                    if (serverState != ServerState.ONLINE)
                        firstTime = false;
                }
            }

            if (!firstTime && server.State == ServerState.ONLINE)
                hub.SendPackage("Ax", tcpId);
        }

        [Receiver("AQ")]
        public void GetSecretQuestion(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            if (user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).Server.State == ServerState.ONLINE)
                hub.SendPackage("Ax", tcpId, true);
        }

        [Receiver("AxK")]
        public async void GetServerList(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            //AM.Account account = prmClient.Account;
            string[] loc5 = package.Substring(3).Split('|');
            int counter = 1;
            bool picked = false;

            while (counter < loc5.Length && !picked)
            {
                string[] _loc10_ = loc5[counter].Split(',');
                int serverId = int.Parse(_loc10_[0]);
                var userSelected = user.Accounts.FirstOrDefault(c => c.TcpId == tcpId);
                if (serverId == userSelected.Server.Id)
                {
                    if (user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).Server.State == ServerState.ONLINE)
                    {
                        picked = true;
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
                hub.SendPackage($"AX{user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).Server.Id}", tcpId, true);
        }


        [Receiver("AXEf")]
        public void NotSubscribe(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "Vous n'êtes pas abonnée", tcpId), tcpId).Wait();
        }

        [Receiver("AXK")]
        public void GetServerWorld(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).GameTicket = package.Substring(14);
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            hub.Clients.Caller.SendAsync("NewConnection", Hash.DecryptIp(package.Substring(3, 8)), Hash.DecryptPort(package.Substring(11, 3).ToCharArray()), true, tcpId, user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).isScan);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Redirection vers le world {Hash.DecryptIp(package.Substring(3, 8))} {Hash.DecryptPort(package.Substring(11, 3).ToCharArray())}", tcpId), tcpId).Wait();
        }

        [Receiver("AYK")]
        public void GetServerWorldRemastered(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).GameTicket = package.Split(';')[1];
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            hub.Clients.Caller.SendAsync("NewConnection", package.Split(';')[0].Substring(3), 443, true, tcpId, user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).isScan);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Redirection vers le world ", tcpId), tcpId).Wait();
        }
    }
}
