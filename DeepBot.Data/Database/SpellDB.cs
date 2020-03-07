using DeepBot.Data.Driver;
using DeepBot.Data.Model.Global;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class SpellDB : Document<int>
    {
        public string Name { get; set; }
        public List<SpellStat> Stats { get; set; }
        [BsonIgnore]
        public byte Level { get; set; }
    }
}
