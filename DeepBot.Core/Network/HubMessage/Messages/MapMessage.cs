using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.MapComponent;
using DeepBot.Data.Model.MapComponent.Entities;
using System.Linq;

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

        public MapMessage(Map map, string tcpId)
        {
            Cells = map.CurrentMap.Cells;
            TcpId = tcpId;
            MapWidth = map.CurrentMap.Width;
            MapHeight = map.CurrentMap.Height;
            AreaName = map.CurrentMap.AreaName;
            Coordinate = map.CurrentMap.Coordinate;
            Entitys = map.Entities.Values.ToArray();
            InteractivObjects = map.Interactives.Values.ToArray();
        }
    }
}
