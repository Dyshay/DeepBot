using DeepBot.CLI.Service;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using DeepBot.CLI.Network.Tcp;

namespace DeepBot.CLI.Model
{
    public class Account
    {
        private HttpClient Client;
        private Dictionary<short,TcpHandler> Clients;
        public TalkHubService TalkingService;
        public string access_token;
        public string ApiKey;
        public string AccountName;
        public string Password;

        public Account()
        {
            Clients = new Dictionary<short, TcpHandler>();
        }

        public Account(string accountName, string password)
        {
            AccountName = accountName;
            Password = password;
            Clients = new Dictionary<short, TcpHandler>();
        }

        public void CreateTcpHandler(short id)
        {
            TcpHandler tcp = new TcpHandler(this);
            Clients.TryAdd(id, tcp);
        }

        public async Task<bool> Login()
        {
            Client = new HttpClient();
            Login log = new Login
            {
                Password = Password,
                UserName = AccountName,
            };

            var JsonString = JsonSerializer.Serialize(log);
            var response = await Client.PostAsync("https://localhost:44319/api/User/Login", new StringContent(JsonString, Encoding.UTF8,"application/json"));

            if (response.IsSuccessStatusCode)
            {
                var token = await response.Content.ReadAsStringAsync();
                WebToken objectToken = JsonSerializer.Deserialize<WebToken>(token);
                access_token = objectToken.token;
                TalkingService = new TalkHubService(access_token);
                return true;
            }

            return false;
        }
    }
}
