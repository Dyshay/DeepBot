using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeepBot.Data.Model
{
    public class Cell
    {
        public short Id { get; set; }
        public bool IsActive { get; set; }
        public CellTypes Type { get; set; }
        public bool IsInLineOfSight { get; set; }
        public byte LayerGroundLevel { get; set; }
        public byte LayerGroundSlope { get; set; }
        public short LayerObject1 { get; set; }
        public short LayerObject2 { get; set; }
        public short InteractiveObject { get; set; }
        public int X { get; set; }
        public int Y { get; set; }

        private static readonly int[] TeleportTexturesSpritesId = { 1030, 1029, 1764, 2298, 745 };
        public bool IsWalkable => IsActive && Type != CellTypes.NOT_WALKABLE && !IsInLineOfSight && !IsInteractiveCell;
        public bool IsTeleportCell => TeleportTexturesSpritesId.Contains(LayerObject1) || TeleportTexturesSpritesId.Contains(LayerObject2);
        public bool IsInteractiveCell => Type == CellTypes.INTERACTIVE_OBJECT || InteractiveObject != -1;


    }
}
