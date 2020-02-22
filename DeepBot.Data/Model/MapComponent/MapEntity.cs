using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.MapComponent
{
    public abstract class MapEntity
    {
        public int Id { get; set; }
        public MapCell Cell { get; set; }
    }
}
