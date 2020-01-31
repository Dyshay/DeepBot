using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DeepBot.Core.Hubs
{
    public static class DeepTalkExtension
    {
        public static void SendPackage(this DeepTalk hub, string package, short tcpId, bool needResponse = false)
        {
            hub.Clients.Caller.SendAsync("SendPackage", package, needResponse, tcpId);
        }
    }
}
