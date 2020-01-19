using DeepBot.Data.Database;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Hubs
{
    public class DeepHub : Hub
    {
        public async Task ReceivedHandler(string package, string apiKey)
        {

        }

        public async Task SendPackage(string package, string apiKey)
        {

        }

        public async Task JoinRoom(string apiKey)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, apiKey);
        }
    }
}
