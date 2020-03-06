using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using DeepBot.Data.Model.CharacterInfo;
using DeepBot.Data.Model.Global;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;

namespace DeepBot.Data.Database
{
    public class ItemDB : Document<int>
    {
        public string Name { get; set; }
        public ItemTypeEnum Type { get; set; }
        public short Level { get; set; }
        public int Weight { get; set; }
        public bool TwoHands { get; set; }
        public bool Ethereal { get; set; }
        public bool Forgemageable { get; set; }
        public bool Buff { get; set; }
        public bool Usable { get; set; }
        public bool Targetable { get; set; }
        public string Conditions { get; set; }
        public string BaseEffects { get; set; }
        public int SetId { get; set; }
        public int CSBonus { get; set; }
        public int APCost { get; set; }
        public int POMin { get; set; }
        public int POMax { get; set; }
        public int CSRate { get; set; }
        public int CFRate { get; set; }
    }
}
