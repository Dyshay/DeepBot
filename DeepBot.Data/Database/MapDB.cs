using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class MapDB : Document<int>
    {
        public string GlobalAreaName { get; set; }
        public string AreaName { get; set; }
        public int AreaId { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string Coordinate { get; set; }
        public MapCell[] Cells { get; set; }
        public List<short> TopCellsTeleport { get; set; }
        public List<short> RightCellsTeleport { get; set; }
        public List<short> BottomCellsTeleport { get; set; }
        public List<short> LeftCellsTeleport { get; set; }
    }
}
