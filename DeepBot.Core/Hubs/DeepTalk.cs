using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage;
using DeepBot.Data.Database;
using DeepBot.Data.Extensions;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeepBot.Core.Hubs
{
    [Authorize]
    public class DeepTalk : Hub
    {
        private UserManager<UserDB> Manager;
        private string userId => Context.User.Claims.First(c => c.Type == "UserID").Value;
        private Task<UserDB> UserDB => Manager.FindByIdAsync(userId);
        private string CliID => Manager.FindByIdAsync(userId).Result.CliConnectionId;

        readonly IMongoCollection<UserDB> _userCollection;

        public async void ReceivedHandler(string package, string tcpId)
        {
            var CurrentUser = await UserDB;
            Receiver.Receive(this, package, CurrentUser, tcpId, _userCollection);
        }

        public async Task JoinRoomCLI()
        {
            var CurrentUser = await UserDB;
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

        public async Task CreateConnexion(string userName, string password)
        {
            string tcpId = GetTcpId();

            var CurrentUser = await UserDB;
            CurrentUser
                .Accounts.Add(new Account { TcpId = tcpId, AccountName = userName, Password = password });

            await _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser);

            await Clients.Client(CliID).SendAsync("NewConnection", "34.251.172.139", 443, false, tcpId);
        }

        private string GetTcpId()
        {
            Guid tcpId = Guid.NewGuid();
            return tcpId.EncodeBase64String();
        }

        public async Task DispatchToClient(NetworkMessage network, string tcpId)
        {
            await Clients.GroupExcept(GetApiKey(), CliID).SendAsync("DispatchClient", network, tcpId);
        }

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
            }
        }

        public DeepTalk(UserManager<UserDB> manager, IMongoCollection<UserDB> userCollection)
        {
            Manager = manager;
            _userCollection = userCollection;
        }
    }
}
