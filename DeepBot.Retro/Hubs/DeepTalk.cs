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
            Receiver.Receive(this, User.FirstOrDefault(c => c.CliConnectionId == Context.ConnectionId), package, Context.ConnectionId, tcpId);
        }

        public async Task SendPackage(string package)
        {
            await Clients.Group(GetApiKey()).SendAsync("SendPackage", "test", true);
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

        private string GetApiKey()
        {
            return Context.User.Claims.FirstOrDefault(c => c.Type == "ApiKey").Value;
        }
    }
}
