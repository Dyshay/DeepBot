using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.ControllersModel
{
    public class CharacterModel
    {
        public class CreateCharacterModel
        {
            public string Name { get; set; }
            public int Level { get; set; }
            public int BreedId { get; set; }
            public int Sex { get; set; }
            public Guid fk_Group { get; set; }
            public int Id { get; set; }
        }
    }
}
