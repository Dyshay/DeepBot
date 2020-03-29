using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Services
{
    public class HubPackageAction : IHubClientAction
    {
        public string Package { get; set; }

        public HubPackageAction(string package)
        {
            Package = package;
        }
    }
}
