using DeepBot.Data.Driver;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class ConfigGroupDB : Document<Guid>
    {
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public Guid Fk_User { get; set; }
        public Guid Fk_Group { get; set; }
        public int PauseNumber { get; set; }
        public int PauseTime { get; set; }
        public bool AlignTeam { get; set; }
        public int AgressionZone { get; set; }
        public bool AutoCaptureArchi { get; set; }
        public int Fk_CharacterCapture { get; set; }
        public bool BlockSpectate { get; set; }
        public bool BlockFightGroupOnly { get; set; }
        public List<int> ChallengesToTry { get; set; }
        public bool AutoDisconnect { get; set; }
    }
}
