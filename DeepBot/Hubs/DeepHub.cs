﻿using DeepBot.Data.Database;
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
            // GOING TO HANDLE FRAME AND BOT LOGIC
        }

        public async Task SendPackage(string package, string apiKey)
        {
           await Clients.Group(apiKey).SendAsync("SendPackage", "test", true);
        }

        public async Task JoinRoomCLI(string apiKey)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, apiKey);
            // UPDATE DATABASE WITH CLI COUNT
            // ConnectionId update on account where Api Key
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