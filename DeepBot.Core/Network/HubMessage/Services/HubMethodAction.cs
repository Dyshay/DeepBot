using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Services
{
    public class HubMethodAction : IHubClientAction
    {
        public Action Method { get; set; }
        public HubMethodAction(Action method)
        {
            Method = method;
        }
    }
}
