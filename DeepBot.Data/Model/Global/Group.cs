using DeepBot.Data.Database;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model
{
    public class Group
    {
        [BsonIgnore]
        public CharacterDB Leader { get; set; }
        [BsonIgnore]
        public List<CharacterDB> Followers { get; set; }
        List<Guid> AccountID { get; set; }
    }
}
