using DeepBot.Data.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class AccountMongoDB : Document<int>
    {
        public string Username { get; set; }
        public string ApiKey { get; set; }
    }
}
