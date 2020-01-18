using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Hubs
{
    public class DeepHub : Hub
    {
        public async Task ReceveidHandler(string handler)
        {
            await Clients.All.SendAsync("MessageReceived", handler);
        }
    }
}
