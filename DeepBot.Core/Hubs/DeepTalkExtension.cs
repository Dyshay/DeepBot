using DeepBot.Core.Network.HubMessage;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace DeepBot.Core.Hubs
{
    public static class DeepTalkExtension
    {
        public static async Task SendPackage(this DeepTalk hub, string package, string tcpId, bool needResponse = false)
        {
            await hub.Clients.Caller.SendAsync("SendPackage", package, needResponse, tcpId);
        }

        public static async Task SendPackage(this DeepTalk hub,string cliId, string package, string tcpId, bool needResponse = false)
        {
            await hub.Clients.Client(cliId).SendAsync("SendPackage", package, needResponse, tcpId);
        }

        public static void SendPackage(this IHubContext<DeepTalk> hub, string package, string tcpId, bool needResponse = false)
        {
            hub.Clients.All.SendAsync("SendPackage", package, needResponse, tcpId);
        }

        public static void DispatchToClient(this IHubContext<DeepTalk> hub, NetworkMessage network, string tcpId)
        {
            hub.Clients.All.SendAsync("DispatchClient", network, tcpId);
        }
    }
}
