using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Hub.Model.Actions
{
    public class HubPackageAction : IHubAction
    {
        public string Package { get; set; }

        public HubPackageAction(string package)
        {
            Package = package;
        }
    }
}
