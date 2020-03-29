using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.IA
{
    public class SpellAction
    {
        public int Priority { get; set; }
        public int NbLancer { get; set; }
        public Target Target { get; set; }
        public int SpellId { get; set; }
        public List<ConditionalAction> Conditions { get; set; }
    }

    public enum Target
    {
        Enemy=0,
        Ally=1,
        Myself=2,
        Zone=3
    }
}
