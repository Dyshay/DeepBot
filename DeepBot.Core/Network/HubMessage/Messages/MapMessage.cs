using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.MapComponent;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class MapMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.MAP;
        public int MapWidth { get; set; }
        public int MapHeight { get; set; }
        public string AreaName { get; set; }
        public string Coordinate { get; set; }

        public MapCell[] Cells { get; set; }
        public MapEntity[] Entitys { get; set; }
        public InteractivObject[] InteractivObjects { get; set; }
        public MapMonster[] Monsters { get; set; }
        public MapCharacter[] Characters { get; set; }
        public MapNpc[] Npcs { get; set; }
        public MapPlayer[] Players { get; set; }

        public MapMessage(MapCell[] cells, MapEntity[] entitys, InteractivObject[] interactivObjects, MapMonster[] monsters, MapCharacter[] characters, MapNpc[] npcs, MapPlayer[] players, string tcpId)
        {
            Cells = cells;
            Entitys = entitys;
            InteractivObjects = interactivObjects;
            Monsters = monsters;
            Characters = characters;
            Npcs = npcs;
            Players = players;
            TcpId = tcpId;
        }

        public MapMessage(MapCell[] cells, int mapWidth, int mapHeight, string areaName, string coordinate, string tcpId)
        {
            Cells = cells;
            TcpId = tcpId;
            MapWidth = mapWidth;
            MapHeight = mapHeight;
            AreaName = areaName;
            Coordinate = coordinate;
        }
    }
}
