using DeepBot.Data.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Hubs
{
    [Authorize]
    public class DeepHub : Hub
    {
        public async Task ReceivedHandler(string package, string apiKey)
        {
            // GOING TO HANDLE FRAME AND BOT LOGIC
        }

        public async Task SendPackage(string package, string apiKey)
        {
           await Clients.Group(apiKey).SendAsync("SendPackage", "test", true);
        }

        public async Task JoinRoomCLI()
        {
            string apiKey = Context.User.Claims.FirstOrDefault(c => c.Type == "ApiKey").Value;
            await Groups.AddToGroupAsync(Context.ConnectionId, apiKey);
        }

        public async Task JoinRoomClient(string apiKey)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, apiKey);
        }

        public async Task SendLog(string log, string apiKey)
        {
            string cliContextId = Context.ConnectionId;
            var ClientsWeb = Clients.GroupExcept(apiKey, cliContextId);

            await ClientsWeb.SendAsync("ConsoleSend", log);
        }
    }
}
