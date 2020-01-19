using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeepBot.Data.Model.MapComponent
{
    public class Monster : Entity
    {
        public int Template { get; set; }
        public int Level { get; set; }

        public List<Monster> Group { get; set; } = new List<Monster>();
        public int MonstersNumber => Group.Count + 1;
        public int GroupLevel => Level + Group.Sum(f => f.Level);
    }
}
