using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.MapComponent;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class MapMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.MAP;

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
    }
}
