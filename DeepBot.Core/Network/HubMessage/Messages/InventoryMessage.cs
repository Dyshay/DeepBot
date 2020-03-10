using DeepBot.Data.Enums;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class InventoryMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.INVENTORY;

        public InventoryMessage(string tcpId)
        {
            TcpId = tcpId;
        }
    }
}
