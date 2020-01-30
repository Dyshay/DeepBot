using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class GroupDB
    {
        [BsonId(IdGenerator = typeof(CombGuidGenerator))]
        public Guid GroupId { get; set; }
        [BsonIgnore]
        public CharacterDB Leader { get; set; }
        [BsonIgnore]
        public List<CharacterDB> Followers { get; set; }
        public Guid LeaderId { get; set; }
        public List<Guid> FollowersId { get; set; }
        public Guid AccountId { get; set; }
        [BsonIgnore]
        public int Prospection { get; set; }
        [BsonIgnore]
        public int groupLevel { get; set; }
        [BsonIgnore]
        public int groupTotal { get; set; }
    }
}
