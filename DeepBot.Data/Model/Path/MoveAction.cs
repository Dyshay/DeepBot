using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Path
{
    public class MoveAction
    {
        public Direction Direction { get; set; }
        public int CellId { get; set; }
    }

    public enum Direction
    {
        TOP=0,
        RIGHT=1,
        BOTTOM=2,
        LEFT=3
    }
}
