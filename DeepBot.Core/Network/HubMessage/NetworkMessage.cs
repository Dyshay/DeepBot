using DeepBot.Data.Enums;

namespace DeepBot.Core.Network.HubMessage
{
    public abstract class NetworkMessage
    {
        public abstract NetworkType Type { get; }
        public string TcpId { get; set; }

    }
}
