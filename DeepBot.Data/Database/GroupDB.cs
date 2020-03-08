using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class GroupDB : Document<Guid>
    {
        public int Fk_Leader { get; set; }
        public List<int> Fk_Followers { get; set; }
        public Guid Fk_Configuration { get; set; }
        public Guid Fk_Trajet { get; set; }
        public Guid FK_User { get; set; }
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
