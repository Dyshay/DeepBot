using DeepBot.Data.Enums;

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
