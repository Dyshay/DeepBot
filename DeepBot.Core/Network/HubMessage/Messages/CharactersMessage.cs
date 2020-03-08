using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class CharactersMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.CHARACTERS;
        public Character[] Characters { get; set; }

        public CharactersMessage(List<Character> characters, string tcpId)
        {
            Characters = characters.ToArray();
            TcpId = tcpId;
        }
    }
}
