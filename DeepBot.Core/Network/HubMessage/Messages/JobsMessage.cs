using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class JobsMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.JOBS;

        public JobsMessage(string tcpId)
        {
            TcpId = tcpId;
        }
    }
}
