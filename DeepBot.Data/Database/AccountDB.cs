using DeepBot.Data.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using DeepBot.Data.Model;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations.Schema;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace DeepBot.Data.Database
{
    public class AccountDB : Document<int>
    {

        public Guid AccountId { get; set; } = new Guid();
        public int MaxCharacter { get; set; } = 5;
        public DateTime EndAnakamaSubscribe { get; set; }
        public string AnkamaPseudo { get; set; }
        [BsonIgnore]
        public List<CharacterDB> Characters { get; set; }
        public bool isBan { get; set; }
        public DateTime ExpirationDateBan { get; set; }
        public AutoCreateCharacterConfig AutoCreateCharacterConfig { get; set; }
        public string NickName { get; set; }
        public string Username { get; set; }
        public TimeSpan ConnectedHour { get; set; } /* total temps de connection sur site */




        public string PrincipalCharacterName { get; set; } = string.Empty;
        public int ServerId { get; set; }


        [BsonIgnore] /* a verif <= serializable mais non stocké */
        public string WelcomeKey { get; set; }
        [BsonIgnore]
        public string AnkamaNickName { get; set; }
        [BsonIgnore]
        public string Password { get; set; } = string.Empty;
        [BsonIgnore]
        public string GameTicket { get; set; }


        //public TcpClient Connexion { get; set; } <= @Dyshay ? 
        [BsonConstructor]
        public AccountDB()
        {

        }


    }


}
