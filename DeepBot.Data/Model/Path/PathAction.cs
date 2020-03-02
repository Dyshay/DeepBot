using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Path
{
    public class PathAction
    {
        public int MapId { get; set; }
        public List<MapAction> Actions { get; set; }
    }
}
