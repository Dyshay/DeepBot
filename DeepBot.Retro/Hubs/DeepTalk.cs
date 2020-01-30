using DeepBot.Core.Network;
using DeepBot.Data.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
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
        private static List<UserDB> Users = new List<UserDB>();
        private UserManager<UserDB> Manager;
        private string userId => Context.User.Claims.First(c => c.Type == "UserID").Value;
        private string CliID => Users.FirstOrDefault(c => c.Id == userId).CliConnectionId;

        public void ReceivedHandler(string package, short tcpId)
        {
            Receiver.Receive(this, package, Users.FirstOrDefault(c => c.Id == userId), tcpId);
        }

        public void JoinRoomCLI()
        {
            Users.FirstOrDefault(c => c.Id == userId).CliConnectionId = Context.ConnectionId;
            Users.FirstOrDefault(c => c.Id == userId).Accounts = new List<AccountDB>();
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
            short tcpId = (short)(Users.FirstOrDefault(c => c.Id == userId).Accounts.Count + 1);

            Users.FirstOrDefault(c => c.Id == userId)
                .Accounts.Add(new AccountDB { TcpId = tcpId, Username = userName, Password = password });

            await Clients.Client(CliID).SendAsync("NewConnection", "34.251.172.139", 443, false, tcpId);
        }

        public async Task DispatchToClient(string type, object value)
        {
            await Clients.GroupExcept(GetApiKey(), CliID).SendAsync("DispatchClient", type, value);
        }

        private string GetApiKey()
        {
            return Context.User.Claims.FirstOrDefault(c => c.Type == "ApiKey").Value;
        }

        public override async Task OnConnectedAsync()
        {
            if (Users.Any(c => c.Id != userId))
                Users.Add(await Manager.FindByIdAsync(userId));

            await Groups.AddToGroupAsync(Context.ConnectionId, GetApiKey());
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            if (Users.Any(c => c.Id == userId))
                Users.Add(await Manager.FindByIdAsync(userId));

            else if (Users.Any(c => c.CliConnectionId == Context.ConnectionId))
            {
                Users.FirstOrDefault(c => c.CliConnectionId == Context.ConnectionId).CliConnectionId = "";
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, GetApiKey());
            }
        }

        public DeepTalk(UserManager<UserDB> manager)
        {
            Manager = manager;
        }
    }
}
