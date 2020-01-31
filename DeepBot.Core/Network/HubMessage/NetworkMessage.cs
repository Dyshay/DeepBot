using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage
{
    public abstract class NetworkMessage
    {
        public abstract NetworkType Type { get; }
        public short TcpId { get; set; }

    }
}
