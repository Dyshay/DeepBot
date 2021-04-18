using System.Collections.Generic;
using System.Linq;

namespace DeepBot.Data.Model.MapComponent.Entities
{
    public class MonsterGroupEntity : AbstractEntity
    {
        public int Level
        {
            get
            {
                return Monsters.Sum(x => x.Level);
            }
        }

        public List<MonsterEntity> Monsters { get; set; } = new List<MonsterEntity>();
    }
}
