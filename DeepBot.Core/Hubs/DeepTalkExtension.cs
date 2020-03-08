using Microsoft.AspNetCore.SignalR;

namespace DeepBot.Core.Hubs
{
    public static class DeepTalkExtension
    {
        public static void SendPackage(this DeepTalk hub, string package, string tcpId, bool needResponse = false)
        {
            hub.Clients.Caller.SendAsync("SendPackage", package, needResponse, tcpId);
        }
    }
}
