using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Services
{
    public class HubTask
    {
        /// <summary>
        /// Connexion ID of Socket user
        /// </summary>
        public string TcpId { get; set; }
        /// <summary>
        /// Connexion ID of the CLI
        /// </summary>
        public string CliID { get; set; }
        /// <summary>
        /// Connexion Client Web
        /// </summary>
        public string ApiKey { get; set; }
        /// <summary>
        /// Action to do after delay
        /// </summary>
        public List<IHubClientAction> Packages { get; set; }
        /// <summary>
        /// DateTime for send to client
        /// </summary>
        public DateTime RequestEnd { get; set; }

        public bool isProgress { get; set; }

        public HubTask(string tcpId, string cliId, string apiKey, List<IHubClientAction> package,DateTime requestEnd)
        {
            TcpId = tcpId;
            CliID = cliId;
            ApiKey = apiKey;
            Packages = package;
            RequestEnd = requestEnd;
        }
    }
}
