using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DeepBot.Data.Extensions
{
    public static class MapExtensions
    {
        public static List<short> AddTeleportCell(this List<short> cells, short cellId, MovementDirectionEnum dir)
        {
            short[] topCells = new short[] { 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 36 };
            short[] rightCells = new short[] { 28, 57, 86, 115, 144, 173, 231, 202, 260, 289, 318, 347, 376, 405, 434 };
            short[] bottomCells = new short[] { 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463 };
            short[] leftCells = new short[] { 15, 44, 73, 102, 131, 160, 189, 218, 247, 276, 305, 334, 363, 392, 421, 450 };

            if (dir == MovementDirectionEnum.TOP && topCells.Contains(cellId))
                cells.Add(cellId);
            else if (dir == MovementDirectionEnum.RIGHT && rightCells.Contains(cellId))
                cells.Add(cellId);
            else if (dir == MovementDirectionEnum.BOTTOM && bottomCells.Contains(cellId))
                cells.Add(cellId);
            else if (dir == MovementDirectionEnum.LEFT && leftCells.Contains(cellId))
                cells.Add(cellId);
            return cells;
        }
    }
}
