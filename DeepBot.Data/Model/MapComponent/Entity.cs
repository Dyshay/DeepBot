using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.MapComponent
{
    public abstract class Entity
    {
        public int Id { get; set; }
        public Cell Cell { get; set; }
    }
}
