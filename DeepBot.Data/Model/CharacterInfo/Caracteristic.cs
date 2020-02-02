

namespace DeepBot.Data.Model.CharacterInfo
{
    public class Caracteristic
    {
        public double ExperienceActual { get; set; } = 0;
        public double ExperienceMinLevel { get; set; } = 0;
        public double ExperienceLevelUp { get; set; } = 0;
        public int EnergyActual { get; set; } = 0;
        public int EnergyMax { get; set; } = 0;
        public int VitalityActual { get; set; } = 0;
        public int VitalityMax { get; set; } = 0;
        public Stat Initiative { get; set; } = new Stat();
        public Stat Prospection { get; set; } = new Stat();
        public Stat PA { get; set; } = new Stat();
        public Stat PM { get; set; } = new Stat();
        public Stat Vitality { get; set; } = new Stat();
        public Stat Wisdom { get; set; } = new Stat();
        public Stat Strength { get; set; } = new Stat();
        public Stat Intelligence { get; set; } = new Stat();
        public Stat Luck { get; set; } = new Stat();
        public Stat Agility { get; set; } = new Stat();
        public Stat Range { get; set; } = new Stat();
        public Stat InvocablesCreatures { get; set; } = new Stat();
    }
}
