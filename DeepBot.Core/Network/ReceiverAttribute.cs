using System;

namespace DeepBot.Core.Network
{
    public class ReceiverAttribute : Attribute
    {
        public string Handler;

        public ReceiverAttribute(string handler) => Handler = handler;
    }
}
