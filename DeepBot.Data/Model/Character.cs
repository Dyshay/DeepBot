﻿using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model.CharacterInfo;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Model
{

    public class Character : Document<int>
    {
        public Guid Fk_IA { get; set; }
        public Guid Fk_Group { get; set; }
        public Guid Fk_Configuration { get; set; }
        public Guid Fk_Trajet { get; set; }
        public Guid Fk_Inventory { get; set; }
        public Guid Fk_Jobs { get; set; }
        public List<KeyValuePair<int, byte>> Fk_Spells { get; set; } = new List<KeyValuePair<int, byte>>();
        public string Name { get; set; }
        public byte Level { get; set; }
        public int ServerId { get; set; }
        public short BreedId { get; set; }
        public int AvailableCharactericsPts { get; set; }
        public int AvailableSpellPts { get; set; }
        public Caracteristic Characteristic { get; set; } = new Caracteristic();
        [BsonIgnore]
        public TrajetDB Trajet { get; set; }
        [BsonIgnore]
        public ConfigCharacterDB Config { get; set; }
        [BsonIgnore]
        public IADB IA { get; set; }
        [BsonIgnore]
        public MapCell Cell { get; set; }
        [BsonIgnore]
        public List<SpellDB> Spells
        {
            get
            {
                List<SpellDB> spells = new List<SpellDB>();
                if (Fk_Spells != null)
                    Fk_Spells.ForEach(spell => spells.Add(Driver.Database.Spells.Find(spel => spel.Key == spell.Key).First()));
                return spells;
            }
        }
        [BsonIgnore]
        public List<Job> Jobs { get; set; }
        [BsonIgnore]
        public MapDB Map { get; set; }
        [BsonIgnore]
        public GroupDB Group { get; set; }
        [BsonIgnore]
        public byte Sex { get; set; }
        [BsonIgnore]
        public CharacterState State { get; set; }
        //[BsonIgnore]
        //public G.Game Game { get; set; }
        [BsonIgnore]
        public bool HasGroup => Group != null;
        [BsonIgnore]
        public bool IsGroupLeader => !HasGroup || Group.Leader == this;
    }
}
