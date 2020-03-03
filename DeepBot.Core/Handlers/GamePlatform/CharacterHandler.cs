using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class CharacterHandler
    {
        [Receiver("As")]
        public void StatsHandler(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = account.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.UpdateCharacteristics(package);
            manager.ReplaceOneAsync(c => c.Id == account.Id, account);
            hub.DispatchToClient(new CharacteristicMessage(characterGame.Characteristic, characterGame.Kamas, characterGame.AvailableCharactericsPts, tcpId), tcpId).Wait();
        }
    }
}
