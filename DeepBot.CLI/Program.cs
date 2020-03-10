using DeepBot.CLI.Model;
using System;

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
