using DeepBot.Data.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class ConfigCharacterDB : Document<Guid>
    {
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public Guid Fk_User { get; set; }
        public int Fk_Character { get; set; }
        public int MoveDelay { get; set; }
        public int PauseNumber { get; set; } 
        public int AgressionZone { get; set; } 
        public bool AutoAnswer { get; set; }
        public bool AutoDisconnect { get; set; }
        public int RefuseDelay { get; set; }
        public bool MsgAfterRefuse { get; set; }
        public bool AutoCaptureArchi { get; set; }
        public bool DiscordMsgModerator { get; set; }
        public bool DiscordMsgMP { get; set; }
        public bool DiscordMsgStop { get; set; }
        public int PositionStartFight { get; set; }
        public bool BlockSpectate { get; set; }
        public bool BlockFight { get; set; }
        public int SpeedFightAction { get; set; }
        public List<int> ChallengesToTry { get; set; }
        public int MinLifeRegenerate { get; set; }
        public bool UseConsommable { get; set; }
        public int MinLifeToFight { get; set; }
        public List<AutoBoostStats> AutoBoostStats { get; set; }
        public List<int> AutoDeleteRessources { get; set; }
        public List<int> ConsommableToUse { get; set; }

    }

    public class AutoBoostStats
    {
        public string Stat { get; set; }
        public int Value { get; set; }
        public int Order { get; set; }
    }
}
