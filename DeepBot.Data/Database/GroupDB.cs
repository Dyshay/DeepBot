using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using DeepBot.Data.Model.CharacterInfo;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class GroupDB : Document<int>
    {
        [BsonId]
        public Guid Id { get; set; }
        public int Fk_Leader { get; set; } 
        public List<int> Fk_Followers { get; set; } 
        public Guid Fk_Configuration { get; set; } 
        public Guid Fk_Trajet { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        [BsonIgnore]
        public Character Leader { get; set; } 
        [BsonIgnore]
        public List<Character> Followers { get; set; }
        [BsonIgnore]
        public ConfigGroupDB Config { get; set; }
        [BsonIgnore]
        public TrajetDB Trajet { get; set; }

        [BsonIgnore]
        public int Prospection { get; set; }
        [BsonIgnore]
        public int groupLevel { get; set; }
        [BsonIgnore]
        public int groupTotal { get; set; }
    }
}
