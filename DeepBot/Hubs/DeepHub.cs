﻿using DeepBot.Data.Database;
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
