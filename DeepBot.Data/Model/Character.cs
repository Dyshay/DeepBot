using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model.CharacterInfo;
using DeepBot.Data.Model.MapComponent;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace DeepBot.Data.Model
{

    public class Character : Document<int>
    {
        public Guid Fk_IA { get; set; }
        public Guid Fk_Group { get; set; }
        public Guid Fk_Configuration { get; set; }
        public Guid Fk_Trajet { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public byte Level { get; set; }
        public int ServerId { get; set; }
        public short BreedId { get; set; }
        [BsonIgnore]
        public TrajetDB Trajet { get; set; }
        [BsonIgnore]
        public ConfigCharacterDB Config { get; set; }
        [BsonIgnore]
        public IADB IA { get; set; }
        [BsonIgnore]
        public MapCell Cell { get; set; }
        [BsonIgnore]
        public List<Spell> Spells { get; set; }
        [BsonIgnore]
        public Caracteristic Characteristic { get; set; }
        [BsonIgnore]
        public Inventory Inventory { get; set; }
        [BsonIgnore]
        public List<Job> Jobs { get; set; }
        [BsonIgnore]
        public Map  Map { get; set; }
        [BsonIgnore]
        public GroupDB Group { get; set; }
        [BsonIgnore]
        public byte Sex { get; set; }
        [BsonIgnore]
        public int Kamas { get; set; }
        [BsonIgnore]
        public int AvailableCharactericsPts { get; set; }
        [BsonIgnore]
        public int AvailableSpellPts { get; set; }

        [BsonIgnore]
        private CharacterState _State;
        [BsonIgnore]
        public CharacterState State
        {
            get { return this._State; }
            set { this._State = value; CharacterStateUpdate?.Invoke(); }
        }
        //[BsonIgnore]
        //public G.Game Game { get; set; }
        [BsonIgnore]
        public bool HasGroup => Group != null;
        [BsonIgnore]
        public bool IsGroupLeader => !HasGroup || Group.Leader == this;

        public event Action CharacterStateUpdate;
        public event Action CharacterSelected;
        public event Action CharacteristicsUpdate;
        public event Action SpellsUpdate;
        public event Action InventoryUpdate;
        public event Action JobsUpdate;



    }


}
