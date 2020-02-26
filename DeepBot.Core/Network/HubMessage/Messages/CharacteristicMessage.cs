using DeepBot.Data.Enums;
using DeepBot.Data.Model.CharacterInfo;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Network.HubMessage.Messages
{
    public class CharacteristicMessage : NetworkMessage
    {
        public override NetworkType Type => NetworkType.CHARACTERISTIC;
        public Caracteristic Characteristic { get; set; }
        public int Kamas { get; set; }
        public int CharacteristicsPoints { get; set; }
        public byte Level { get; set; }

        public CharacteristicMessage(Caracteristic characteristic, int kamas, int characteristicsPoints, byte level)
        {
            Characteristic = characteristic;
            Kamas = kamas;
            CharacteristicsPoints = characteristicsPoints;
            Level = level;
        }
    }
}
