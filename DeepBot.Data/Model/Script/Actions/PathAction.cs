using System.Collections.Generic;

namespace DeepBot.Data.Model.Script.Actions
{
    public class PathAction
    {
        public int MapId { get; set; }
        public List<MapAction> Actions { get; set; }
    }
}
