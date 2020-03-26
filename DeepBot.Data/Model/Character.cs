using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using DeepBot.Data.Model.CharacterInfo;
using DeepBot.Data.Model.MapComponent;
using DeepBot.Data.Model.Script;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Diagnostics;

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
        public int RegenTime { get; set; }
        public short BreedId { get; set; }
        public int AvailableCharactericsPts { get; set; }
        public int AvailableSpellPts { get; set; }
        public Caracteristic Characteristic { get; set; } = new Caracteristic();
        public CharacterStateEnum State
        {
            get { return _State; }
            set
            {
                _State = value;
                OnStateChanged?.Invoke();
            }
        }

        [BsonIgnore]
        private CharacterStateEnum _State { get; set; } = CharacterStateEnum.DISCONNECTED;
        [BsonIgnore]
        public int CellId { get; set; }
        [BsonIgnore]
        public Map Map { get; set; }
        [BsonIgnore]
        public TrajetDB Trajet { get { return Driver.Database.Paths.Find(c => c.Key == Fk_Trajet).FirstOrDefault(); } }
        [BsonIgnore]
        public ConfigCharacterDB Config { get { return Driver.Database.ConfigsCharacter.Find(c => c.Key == Fk_Configuration).FirstOrDefault(); } }
        [BsonIgnore]
        public IADB IA { get { return Driver.Database.IA.Find(c => c.Key == Fk_IA).FirstOrDefault(); } }
        [BsonIgnore]
        public List<SpellDB> Spells
        {
            get
            {
                List<SpellDB> spells = new List<SpellDB>();
                if (Fk_Spells != null)
                    Fk_Spells.ForEach(spell => spells.Add(Driver.Database.Spells.Find(s => s.Key == spell.Key).First()));
                return spells;
            }
        }
        [BsonIgnore]
        public GroupDB Group { get { return Driver.Database.Groups.Find(c => c.Key == Fk_Group).FirstOrDefault(); } }
        [BsonIgnore]
        public byte Sex { get; set; }
        [BsonIgnore]
        public bool HasGroup => Group != null;
        [BsonIgnore]
        public bool IsGroupLeader => !HasGroup || Group.Leader == this;
        [BsonIgnore]
        public string TcpId { get; set; }

        [BsonIgnore]
        public Action OnStateChanged;

        [BsonConstructor]
        public Character()
        {
        }
    }
}
