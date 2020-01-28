using DeepBot.CLI.Model;
using DeepBot.CLI.Network.Packages;
using DeepBot.CLI.Network.Tcp;
using System;
using System.Collections.Generic;

namespace DeepBot.CLI
{
    class Program
    {
        static void Main(string[] args)
        {
            Account Account = new Account();
            Account.RequestFileAccount();

            Console.ReadLine();

            if (Account.Login().Result)
            {

            }

            Console.ReadLine();
        }
    }
}
