using System.Collections.Generic;

namespace DeepBot.Data.Model.Path
{
    public class PathAction
    {
        public int MapId { get; set; }
        public List<MapAction> Actions { get; set; }
    }
}
