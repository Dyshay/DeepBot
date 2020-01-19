using DeepBot.CLI.Service;
using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;

namespace DeepBot.CLI.Model
{
    public class Account
    {
        public TalkHubService TalkingService;

        public string ApiKey;
        public string AccountName;
        public string Password;

        public Account(string apiKey, string accountName, string password)
        {
            TalkingService = new TalkHubService();
            ApiKey = apiKey;
            accountName = AccountName;
            Password = password;
        }
    }
}
