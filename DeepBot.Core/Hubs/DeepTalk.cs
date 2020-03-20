using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage;
using DeepBot.Data;
using DeepBot.Data.Database;
using DeepBot.Data.Extensions;
using DeepBot.Data.Model;
using DeepBot.Data.Model.GameServer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Core.Hubs
{
    [Authorize]
    public class DeepTalk : Hub
    {
        private readonly UserManager<UserDB> Manager;
        private string userId => Context.User.Claims.First(c => c.Type == "UserID").Value;
        private Task<UserDB> UserDB => Manager.FindByIdAsync(userId);
        private string CliID => Manager.FindByIdAsync(userId).Result.CliConnectionId;
        public static Dictionary<string, bool> IsScans = new Dictionary<string, bool>();
        public readonly IMongoCollection<UserDB> _userCollection;

        public async Task ReceivedHandler(string package, string tcpId)
        {
            var CurrentUser = await UserDB;

            Receiver.Receive(this, package, CurrentUser, tcpId, _userCollection);
        }

        public async Task JoinRoomCLI()
        {
            var CurrentUser = await UserDB;

            if (CurrentUser.Accounts.Count == 0)
                CurrentUser.Accounts = new List<Account>();

            CurrentUser.CliConnectionId = Context.ConnectionId;
            await _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser);
        }

        public async Task JoinRoomClient()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, GetApiKey());
        }

        public async Task SendLog(string log)
        {
            var ClientsWeb = Clients.OthersInGroup(GetApiKey());
            await ClientsWeb.SendAsync("ConsoleSend", log);
        }

        public async Task InitTcpCli()
        {
            await Clients.Client(CliID).SendAsync("CreateTcp");
        }

        public async Task CreateConnexion(string userName, string password, short serverId, bool isScan = false)
        {
            string tcpId = GetTcpId();

            var CurrentUser = await UserDB;

            if (isScan)
                CurrentUser
                    .Accounts.Add(new Account { TcpId = tcpId, AccountName = userName, Password = password, IsScan = isScan, Server = new Server() { Id = serverId } });

            else if (!isScan)
                CurrentUser.Accounts.FirstOrDefault(c => c.AccountName == userName).TcpId = tcpId;

            await _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser);

            await Clients.Client(CliID).SendAsync("NewConnection", "dofus-co-retro-f9e1b368375d4153.elb.eu-west-1.amazonaws.com", 443, false, tcpId, isScan);

            if (isScan)
                IsScans.Add(tcpId, isScan);
        }

        private string GetTcpId()
        {
            Guid tcpId = Guid.NewGuid();
            return tcpId.EncodeBase64String();
        }


        public async Task DisconnectCli(string tcpId)
        {
            await Clients.Client(CliID).SendAsync("Disconnect", tcpId);
        }

        public async Task DispatchToClient(NetworkMessage network, string tcpId)
        {
            await Clients.GroupExcept(GetApiKey(), CliID).SendAsync("DispatchClient", network, tcpId);
        }

        #region CheckScan
        public void ScanCallBack(bool isScan, string tcpId)
        {
            //IsScans.Add(tcpId, isScan);
        }

        public async Task CallCheck(string tcpId)
        {
            await Clients.Client(CliID).SendAsync("CheckCliScan", tcpId);
        }

        #endregion

        private string GetApiKey()
        {
            return Context.User.Claims.FirstOrDefault(c => c.Type == "ApiKey").Value;
        }

        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, GetApiKey());
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var CurrentUser = await UserDB;
            if (CurrentUser.CliConnectionId == Context.ConnectionId)
            {
                CurrentUser.CliConnectionId = "";
                await _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser);
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, GetApiKey());
                CurrentUser.Accounts.ForEach(a =>
                {
                    Debug.WriteLine("Remove character " + a.CurrentCharacter.Key + " from memory");
                    Storage.Instance.Characters.TryRemove(a.CurrentCharacter.Key, out Character c);
                });
            }
        }

        public DeepTalk(UserManager<UserDB> manager, IMongoCollection<UserDB> userCollection)
        {
            Manager = manager;
            _userCollection = userCollection;
        }
    }
}
