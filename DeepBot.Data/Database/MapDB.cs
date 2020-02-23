using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Text.Json;

namespace DeepBot.Data.Database
{
    public class MapDB
    {
        public string GlobalAreaName { get; set; }
        public string AreaName { get; set; }
        public int AreaId { get; set; }
        public int MapId { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string Coordinate { get; set; }
        public MapCell[] Cells { get; set; }
        public Dictionary<MovementDirection, List<short>> CellsTeleport;
    }
}
