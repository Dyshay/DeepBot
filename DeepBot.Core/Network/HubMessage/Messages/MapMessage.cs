using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.MapComponent;
using DeepBot.Data.Model.MapComponent.Entities;

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
        public AbstractEntity[] Entitys { get; set; }
        public InteractiveObject[] InteractivObjects { get; set; }

        public MapMessage(MapCell[] cells, AbstractEntity[] entitys, InteractiveObject[] interactivObjects, string tcpId)
        {
            Cells = cells;
            Entitys = entitys;
            InteractivObjects = interactivObjects;
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
