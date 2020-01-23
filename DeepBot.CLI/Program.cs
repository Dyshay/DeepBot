using DeepBot.CLI.Network.Packages;
using DeepBot.CLI.Network.Tcp;
using System;
using System.Collections.Generic;

namespace DeepBot.CLI
{
    class Program
    {
        private List<TcpClient> Clients = new List<TcpClient>();

        static void Main(string[] args)
        {
            Console.ReadLine();
            TcpClient tcp = new TcpClient("500", "test", "test");
            Console.ReadLine();
        }
    }
}
