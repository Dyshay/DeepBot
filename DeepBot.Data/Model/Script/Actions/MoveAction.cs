using DeepBot.Data.Enums;
using System.Collections.Generic;

namespace DeepBot.Data.Model.Script.Actions
{
    public class MoveAction : MapAction
    {
        public List<MovementDirectionEnum>? Direction { get; set; }
        public int? CellId { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
        public int? MapId { get; set; }
    }
}
