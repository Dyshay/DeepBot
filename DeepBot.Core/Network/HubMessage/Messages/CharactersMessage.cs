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
        public List<Character> Characters { get; set; }

        public CharactersMessage(List<Character> characters)
        {
            Characters = characters;
        }

    }
}
