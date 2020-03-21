﻿using DeepBot.Data.Driver;
using DeepBot.Data.Model.GameServer;
using DeepBot.Data.Utilities;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Model
{

    public class Account : Document<Guid>
    {
        public List<Character> Characters { get; set; }
        public Character CurrentCharacter { get; set; }
        public Proxy Proxy { get; set; }
        public Nullable<DateTime> EndAnakamaSubscribe { get; set; }
        public bool IsConnected { get; set; }
        public DateTime? CreationDate { get; set; }
        public string AnkamaPseudo { get; set; }
        public bool IsBan { get; set; }
        public Nullable<DateTime> ExpirationDateBan { get; set; }
        public string NickName { get; set; }
        public string AccountName { get; set; }
        public string Password { get; set; }
        public string WelcomeKey { get; set; }
        public string AnkamaNickName { get; set; }
        public string GameTicket { get; set; }
        public Server Server { get; set; }
        public bool IsScan { get; set; }

        /// <summary>
        /// CLI Informations attached to account
        /// </summary>
        public string TcpId { get; set; }


        //public TcpClient Connexion { get; set; } <= @Dyshay ? 
        [BsonConstructor]
        public Account()
        {
        }


    }


}
