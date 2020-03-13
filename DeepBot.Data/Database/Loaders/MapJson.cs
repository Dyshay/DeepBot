using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using System.Collections.Generic;

namespace DeepBot.Data.Database.Loaders
{
    public class MapJson
    {
        public int AreaId { get; set; }
        public string AreaName { get; set; }
        public string GlobalAreaName { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public int MapId { get; set; }
        public string MapData { get; set; }
        public string Coordinate { get; set; }
        public MapCell[] Cells { get; set; }
        public Dictionary<MovementDirection, List<short>> CellsTeleport;
    }
}
