using DeepBot.Data.Driver;
using DeepBot.Data.Model.Script.Actions;
using DeepBot.Data.Model.Script.Options;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class TrajetDB : Document<Guid>
    {
        public string Name { get; set; }
        public List<string> Zones { get; set; }
        public Guid Fk_User { get; set; }
        public TypePath Type { get; set; }
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

    public enum TypePath
    {
        FIGHT = 0,
        GATHER = 1
    }
}
