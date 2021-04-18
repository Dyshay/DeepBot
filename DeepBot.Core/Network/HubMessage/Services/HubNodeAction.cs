using DeepBot.Data.Utilities.Pathfinding;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Services
{
    public class HubNodeAction : IHubClientAction
    {
        public List<Node> NodePath { get; set; }
        public Action<int> Method { get; set; }
        public HubClientAction ActionClient { get; set; }

        public HubNodeAction(List<Node> nodePath, Action<int> method, HubClientAction action)
        {
            NodePath = nodePath;
            Method = method;
            ActionClient = action;
        }
    }
}
