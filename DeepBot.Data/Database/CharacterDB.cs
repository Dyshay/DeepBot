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
    public class CharacterDB
    {
        [BsonId(IdGenerator = typeof(CombGuidGenerator))]
        public Guid CharacterId { get; set; }
        public Guid AccountId { get; set; } /* FK */
        public int CharacterAnkamaId { get; set; }
        public string CharacterName { get; set; }
        public TimeSpan ConnectedHour { get; set; } /* total temps de connection sur character */

        [BsonIgnore]
        public byte CharacterLevel { get; set; }
        [BsonIgnore]
        public byte CharacterSex { get; set; }
        [BsonIgnore]
        public byte CharacterBreedId { get; set; }
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
        public AccountDB CharacterAccount { get; set; }

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
        public CharacterDB(AccountDB account)
        {

        }
    }


}
