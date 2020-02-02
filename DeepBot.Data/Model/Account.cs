using DeepBot.Data.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using DeepBot.Data.Model;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations.Schema;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using DeepBot.Data.Enums;
using DeepBot.Data.Model.GameServer;
using DeepBot.Data.Model.CharacterInfo;

namespace DeepBot.Data.Model
{

    public class Account
    {

        [BsonId(IdGenerator = typeof(CombGuidGenerator))]
        public Guid Id { get; set; }
        //public List<Character> Characters { get; set; }
        public Character CurrentCharacter { get; set; }
        public Proxy Proxy { get; set; }
        public ConfigAccount Config { get; set; }
        public DateTime EndAnakamaSubscribe { get; set; }
        public string AnkamaPseudo { get; set; }
        public bool isBan { get; set; }
        public DateTime ExpirationDateBan { get; set; }
        public string NickName { get; set; }
        public string AccountName { get; set; }
        public string Password { get; set; }
        public int ServerId { get; set; }
        [BsonIgnore]
        public string WelcomeKey { get; set; }
        [BsonIgnore]
        public string AnkamaNickName { get; set; }
        [BsonIgnore]
        public string GameTicket { get; set; }
        [BsonIgnore]
        public AccountState State { get; set; } = AccountState.DISCONNECTED;
        [BsonIgnore]
        public Server Server { get; set; }

        /// <summary>
        /// CLI Informations attached to account
        /// </summary>
        [BsonIgnore]
        public string TcpId { get; set; }


        //public TcpClient Connexion { get; set; } <= @Dyshay ? 
        [BsonConstructor]
        public Account()
        {

        }


    }


}
