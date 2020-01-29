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
        private static List<UserDB> User = new List<UserDB>();

        public void ReceivedHandler(string package, short tcpId)
        {
            Receiver.Receive(this,package, User.FirstOrDefault(c => c.CliConnectionId == Context.ConnectionId), tcpId);
        }

        public async Task JoinRoomCLI()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, GetApiKey());
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
            var clientCli = Clients.OthersInGroup(GetApiKey());
            await clientCli.SendAsync("CreateTcp");
        }

        public async Task CreateConnexion()
        {
            var clientCli = Clients.OthersInGroup(GetApiKey());
            await clientCli.SendAsync("NewConnection", "34.251.172.139", 443,1);
        }

        private string GetApiKey()
        {
            return Context.User.Claims.FirstOrDefault(c => c.Type == "ApiKey").Value;
        }

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
    }
}
