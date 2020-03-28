using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Hub.Model.Actions
{
    public class HubMethodAction : IHubAction
    {
        public Action Method { get; set; }
        public HubMethodAction(Action method)
        {
            Method = method;
        }
    }
}
