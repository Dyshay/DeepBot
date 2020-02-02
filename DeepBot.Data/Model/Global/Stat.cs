using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.CharacterInfo
{
    public class Stat
    {
        public int Base { get; set; } = 0;
        public int Equipment { get; set; } = 0;
        public int Skill { get; set; } = 0;
        public int Boost { get; set; } = 0;
        public int Total { get { return Base + Equipment + Skill + Boost; } }

        public void UpdateStat(int basee, int equipment, int skill, int boost)
        {
            Base = basee;
            Equipment = equipment;
            Skill = skill;
            Boost = boost;
        }
    }
}
