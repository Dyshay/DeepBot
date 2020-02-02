using DeepBot.Data.Model;
using DeepBot.Data.Model.Character;
using DeepBot.Data.Model.MapComponent;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class Character
    {
        public int Id { get; set; } /* ANKAMA ID */ 
        public Guid Fk_IA { get; set; }
        public Guid Fk_Group { get; set; }
        public Guid Fk_Configuration { get; set; }
        public Guid Fk_Trajet { get; set; }
        public string CharacterName { get; set; }
        public byte CharacterLevel { get; set; }
        public byte CharacterBreedId { get; set; }


        [BsonIgnore]
        public TrajetDB Trajet { get; set; }
        [BsonIgnore]
        public ConfigCharacterDB Config { get; set; }
        [BsonIgnore]
        public GroupDB Group { get; set; }
        [BsonIgnore]
        public IADB IA { get; set; }
        [BsonIgnore]
        public byte CharacterSex { get; set; }
        [BsonIgnore]
        public int CharacterKamas { get; set; }
        [BsonIgnore]
        public int CharacterAvailableCharactericsPoints { get; set; }
        [BsonIgnore]
        public int CharacterAvailableSpellPoints { get; set; }
        [BsonIgnore]
        public Cell CharacterCell { get; set; }
        [BsonIgnore]
        public List<Spell> CharacterSpells { get; set; }
        [BsonIgnore]
        public Caracteristic CharacterCharacteristic { get; set; }
        [BsonIgnore]
        public Inventory CharacterInventory { get; set; }
        [BsonIgnore]
        public List<Job> CharacterJobs { get; set; }
        [BsonIgnore]
        public Map CharacterMap { get; set; }
        [BsonIgnore]
        public GroupDB CharacterGroup { get; set; }
        [BsonIgnore]
        public Account CharacterAccount { get; set; }

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
        public bool HasGroup => CharacterGroup != null;
        [BsonIgnore]
        public bool IsGroupLeader => !HasGroup || CharacterGroup.Leader == this;

        public event Action CharacterStateUpdate;
        public event Action CharacterSelected;
        public event Action CharacteristicsUpdate;
        public event Action SpellsUpdate;
        public event Action InventoryUpdate;
        public event Action JobsUpdate;


        [BsonConstructor]
        public Character(Account account)
        {

        }
    }


}
