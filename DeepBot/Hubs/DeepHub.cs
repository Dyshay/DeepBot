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
            // package receveid from CLI
        }
    }
}
