using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Messages.NetworkModel
{
    public class Character
    {
        public int Id { get; set; } /* ANKAMA ID */
        public string Name { get; set; }
        public byte Level { get; set; }
        public short BreedId { get; set; }
    }
}
