using System;
using System.Collections.Generic;
using System.Text;
using DeepBot.Data.Enums;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class LogMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.LOG;
        public LogType LogType { get; set; }
        public string Message { get; set; }

        public LogMessage(LogType type, string message)
        {
            Message = message;
            LogType = type;
        }
    }
}
