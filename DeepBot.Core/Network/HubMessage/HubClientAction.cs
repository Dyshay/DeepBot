using DeepBot.Data.Model.Hub.Model.Actions;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage
{
    public class HubClientAction : IHubAction
    {
        public NetworkMessage Network { get; set; }
        public HubClientAction(NetworkMessage network)
        {
            Network = network;
        }
    }
}
