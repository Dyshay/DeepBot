using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Text;

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
