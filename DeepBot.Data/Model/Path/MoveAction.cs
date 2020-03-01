using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Path
{
    public class MoveAction
    {
        public List<Direction> Direction { get; set; }
        public int CellId { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }

    public enum Direction
    {
        TOP=0,
        RIGHT=1,
        BOTTOM=2,
        LEFT=3
    }
}
