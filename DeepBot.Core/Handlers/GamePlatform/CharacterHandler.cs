using DeepBot.Core.Extensions;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class CharacterHandler
    {
        [Receiver("As")]
        public void StatsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.UpdateCharacteristics(package);
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            hub.DispatchToClient(new CharacteristicMessage(characterGame.Characteristic, characterGame.Kamas, characterGame.AvailableCharactericsPts, tcpId), tcpId).Wait();
        }

        [Receiver("OAKO")]
        public void InventoryHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.Inventory.DeserializeInventory(package.Substring(4));
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            // TODO send hub inventory message
        }

        [Receiver("SL")]
        public void SpellsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            if (!package[2].Equals('o'))
            {
                characterGame.Spells.DeserializeSpells(package.Substring(2));
            }
        }

        [Receiver("PIK")]
        public void PodsUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            string[] pods = package.Substring(2).Split('|');
            characterGame.Inventory.ActualPods = short.Parse(pods[0]);
            characterGame.Inventory.MaxPods = short.Parse(pods[1]);
        }

        [Receiver("DV")]
        public void NPCDialogClosedHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager) { }

        [Receiver("EV")]
        public void OtherDialogClosedHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager) { }

        [Receiver("PIK")]
        public void GroupRequestPacketHandle(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            if (characterGame.HasGroup && package.Substring(3).Split('|')[0].ToLower() == characterGame.Group.Leader.Name.ToLower())
            {
                // TODO cliente.account.connexion.SendPacket("PA");
                // TODO notify
            } else
            {
                // TODO cliente.account.connexion.SendPacket("PR");
                // TODO notify
            }
        }

    }
}
