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
        public Caracteristic Characteristic { get; set; } = new Caracteristic();

        [BsonIgnore]
        public Inventory Inventory { get; set; }
        [BsonIgnore]
        public List<Job> Jobs { get; set; }
        public Map  Map { get; set; }
        [BsonIgnore]
        public GroupDB Group { get; set; }
        [BsonIgnore]
        public byte Sex { get; set; }
        public int Kamas { get; set; }
        public int AvailableCharactericsPts { get; set; }
        public int AvailableSpellPts { get; set; }

        [BsonIgnore]
        private CharacterState _State;
        [BsonIgnore]
        public CharacterState State
        {
            get { return this._State; }
            set { this._State = value; }
        }
        //[BsonIgnore]
        //public G.Game Game { get; set; }
        [BsonIgnore]
        public bool HasGroup => Group != null;
        [BsonIgnore]
        public bool IsGroupLeader => !HasGroup || Group.Leader == this;

        public void UpdateCharacteristics(string data)
        {
            string[] _loc3 = data.Substring(2).Split('|');
            string[] _loc5 = _loc3[0].Split(',');

            Characteristic.ExperienceActual = double.Parse(_loc5[0]);
            Characteristic.ExperienceMinLevel = double.Parse(_loc5[1]);
            Characteristic.ExperienceLevelUp = double.Parse(_loc5[2]);
            Kamas = int.Parse(_loc3[1]);
            AvailableCharactericsPts = int.Parse(_loc3[2]);

            _loc5 = _loc3[5].Split(',');
            Characteristic.VitalityActual = int.Parse(_loc5[0]);
            Characteristic.VitalityMax = int.Parse(_loc5[1]);

            _loc5 = _loc3[6].Split(',');
            Characteristic.EnergyActual = int.Parse(_loc5[0]);
            Characteristic.EnergyMax = int.Parse(_loc5[1]);

            Characteristic.Initiative.Base = int.Parse(_loc3[7]);
            Characteristic.Prospection.Base = int.Parse(_loc3[8]);

            for (int i = 9; i <= 18; ++i)
            {
                _loc5 = _loc3[i].Split(',');
                int basee = int.Parse(_loc5[0]);
                int equipment = int.Parse(_loc5[1]);
                int skill = int.Parse(_loc5[2]);
                int boost = int.Parse(_loc5[3]);

                switch (i)
                {
                    case 9:
                        Characteristic.PA.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 10:
                        Characteristic.PM.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 11:
                        Characteristic.Strength.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 12:
                        Characteristic.Vitality.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 13:
                        Characteristic.Wisdom.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 14:
                        Characteristic.Luck.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 15:
                        Characteristic.Agility.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 16:
                        Characteristic.Intelligence.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 17:
                        Characteristic.Range.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 18:
                        Characteristic.InvocablesCreatures.UpdateStat(basee, equipment, skill, boost);
                        break;
                }
            }
        }


    }


}
