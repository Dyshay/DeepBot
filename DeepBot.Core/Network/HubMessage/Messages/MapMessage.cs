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

        public Cell[] Cells { get; set; }
        public Entity[] Entitys { get; set; }
        public InteractivObject[] InteractivObjects { get; set; }
        public Monster[] Monsters { get; set; }
        public Character[] Characters { get; set; }
        public Npc[] Npcs { get; set; }
        public Player[] Players { get; set; }

        public MapMessage(Cell[] cells, Entity[] entitys, InteractivObject[] interactivObjects, Monster[] monsters, Character[] characters, Npc[] npcs, Player[] players, string tcpId)
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
