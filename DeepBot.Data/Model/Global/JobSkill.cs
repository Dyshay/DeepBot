using DeepBot.Data.Enums;

namespace DeepBot.Data.Model.Global
{
    public class JobSkill
    {
        public SkillIdEnum Id { get; set; }
        public int QuantityMin { get; set; }
        public int QuantityMax { get; set; }
        public double Time { get; set; }
    }
}
