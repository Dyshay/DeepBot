using DeepBot.Data.Driver;
using DeepBot.Data.Model.Path;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class TrajetDB : Document<Guid>
    {
        public string Name { get; set; }
        public Guid Fk_User { get; set; }
        public int Type { get; set; }
        public int MaxPod { get; set; }
        public int MonsterQuantityMin { get; set; }
        public int MonsterQuantityMax { get; set; }
        public int GroupLevelMin { get; set; }
        public int GroupLevelMax { get; set; }
        public bool IsCapture { get; set; }
        public bool LeaderBank { get; set; }
        public int CaptureItem { get; set; }
        public List<SpecificMonsterLevel> MonsterLevel { get; set; }
        public List<SpecificMonsterQuantity> MonsterQuantity { get; set; }
        public List<CaptureMonsterQuantity> MonsterCapture { get; set; }
        public List<PathAction> PathAction { get; set; }

    }
}
