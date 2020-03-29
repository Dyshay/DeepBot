using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Services
{
    public class HubClientAction : IHubClientAction
    {
        public NetworkMessage Network { get; set; }
        public HubClientAction(NetworkMessage network)
        {
            Network = network;
        }
    }
}
