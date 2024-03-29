﻿using AspNetCore.Identity.Mongo.Model;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class UserDB : MongoUser
    {
        public UserDB()
        {
            Roles = new List<string>();
            Claims = new List<IdentityUserClaim<string>>();
            Logins = new List<IdentityUserLogin<string>>();
            Tokens = new List<IdentityUserToken<string>>();
            RecoveryCodes = new List<TwoFactorRecoveryCode>();
            Accounts = new List<Account>();
        }
        public List<Account> Accounts { get; set; }
        public ApiKey ApiKey { get; set; }
        public ConfigUser Config { get; set; }
        public string Langue { get; set; }
        public string AddressIP { get; set; }
        public short AppCliOnline { get; set; }
        public string CliConnectionId { get; set; }
        public bool isActive { get; set; }

    }

}
