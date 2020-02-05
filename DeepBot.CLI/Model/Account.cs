using DeepBot.CLI.Service;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using DeepBot.CLI.Network.Tcp;
using System.IO;
using System.Reflection;

namespace DeepBot.CLI.Model
{
    public class Account
    {
        private HttpClient Client;
        private Dictionary<string, TcpHandler> Clients;
        public TalkHubService TalkingService;
        public string access_token;
        public string ApiKey;
        private Login Identification;
        private bool IsScan;

        public Account()
        {
            Clients = new Dictionary<string, TcpHandler>();
            Identification = new Login();
        }

        public void RequestFileAccount()
        {
            string appLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string accFileLoc = Path.Combine(appLocation, "account.json");

            if (!File.Exists(accFileLoc))
            {
                Console.WriteLine("Don't have account file");
                Console.WriteLine("Insert your web account");
                Identification.UserName = Console.ReadLine();
                Console.WriteLine("Insert your password account");
                Identification.Password = Console.ReadLine();
                using (var tw = File.CreateText(accFileLoc))
                {
                    tw.WriteLine(JsonSerializer.Serialize(Identification));
                }
                Console.WriteLine("Account file created");
                Console.WriteLine(accFileLoc);
            }
            else
            {
                using (StreamReader sr = File.OpenText(accFileLoc))
                {
                    string s = "";
                    while ((s = sr.ReadLine()) != null)
                    {
                        Identification = JsonSerializer.Deserialize<Login>(s);
                        Console.WriteLine("Account file is loaded");
                    }
                }
            }

        }

        private void Initialize()
        {
            TalkingService.JoinRoom().Wait();
            TalkingService.PackageBuild += SendPackage;
            TalkingService.ConnexionHandler += DispatchConnect;
            TalkingService.DisconnectHandler += Disconnect;
        }

        private void DispatchConnect(string ip, int port, bool isSwitch, string tcpId,bool _isScan=false)
        {
            if (isSwitch)
            {
                var TcpClient = Clients[tcpId];
                TcpClient.Disconnect();
                TcpClient.Connect(ip, port);
            }
            else
            {
                if (_isScan)
                {
                    IsScan = _isScan;
                }

                Clients.TryAdd(tcpId, new TcpHandler(this, tcpId));
                var TcpClient = Clients[tcpId];
                TcpClient.Connect(ip, port);
            }
        }

        private void Disconnect(string tcpId)
        {
            Clients.Remove(tcpId);
        }

        private void SendPackage(string package, bool needResponse, string tcpId)
        {
            var TcpClient = Clients[tcpId];
            Console.WriteLine($"[Bot] {package}");
            TcpClient.SendPackage(package, needResponse);
        }

        public async Task<bool> Login()
        {
            Client = new HttpClient();

            var JsonString = JsonSerializer.Serialize(Identification);
            var response = await Client.PostAsync("https://localhost:44319/api/User/Login", new StringContent(JsonString, Encoding.UTF8, "application/json"));

            if (response.IsSuccessStatusCode)
            {
                var token = await response.Content.ReadAsStringAsync();
                WebToken objectToken = JsonSerializer.Deserialize<WebToken>(token);
                access_token = objectToken.token;
                TalkingService = new TalkHubService(access_token);
                Initialize();
                return true;
            }

            return false;
        }
    }
}
