using System.Collections.Generic;
using System.Linq;

namespace DeepBot.Data.Model.MapComponent
{
    public class MapMonster : MapEntity
    {
        public int Template { get; set; }
        public int Level { get; set; }

        public List<MapMonster> Group { get; set; } = new List<MapMonster>();
        public int MonstersNumber => Group.Count + 1;
        public int GroupLevel => Level + Group.Sum(f => f.Level);
    }
}
