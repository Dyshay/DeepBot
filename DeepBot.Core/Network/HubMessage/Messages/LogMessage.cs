using DeepBot.Data.Enums;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class LogMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.LOG;
        public LogType LogType { get; set; }
        public string Message { get; set; }

        public LogMessage(LogType type, string message, string tcpId)
        {
            Message = message;
            LogType = type;
            TcpId = tcpId;
        }
    }
}
