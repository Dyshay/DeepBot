using DeepBot.Core.Extensions;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.Global;
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

        [Receiver("AN")]
        public void NewLevelHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.Level = Convert.ToByte(package.Substring(2));
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
        }

        [Receiver("SL")]
        public void SpellsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.Spells = new List<SpellDB>();
            if (!package[2].Equals('o'))
            {
                var datas = package.Replace("_;", "_").Split(';');
                foreach (var data in datas)
                {
                    SpellDB spell = new SpellDB();
                    spell.DeserializeSpell(data);
                    characterGame.Spells.Add(spell);
                }
            }
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            // TODO send hub spell msg
        }

        [Receiver("SUK")]
        public void SpellUpdateSuccess(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            SpellDB spell = new SpellDB();
            spell.DeserializeSpell(package.Substring(3));
            characterGame.Spells.Where(spel => spel.Key == spell.Key).FirstOrDefault().Level = spell.Level;
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            // TODO send hub spell msg
        }

        [Receiver("SUE")]
        public void SpellUpdateError(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            // TODO send hub spell msg
        }

        [Receiver("OAKO")]
        public void ItemAddHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.Inventory.DeserializeInventory(package.Substring(4));
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            // TODO send hub inventory message
        }

        [Receiver("OM")]
        public void ItemMoveHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            string[] data = package.Substring(2).Split('|');
            Item item = characterGame.Inventory.Items.Find(it => it.InventoryId == Convert.ToInt32(data[0]));
            if (item != null)
            {
                if (String.IsNullOrEmpty(data[1]))
                    item.Position = ItemSlotEnum.SLOT_INVENTORY;
                else
                    item.Position = (ItemSlotEnum)Convert.ToInt32(data[1]);
            }
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            //TODO send update inventory message
        }

        [Receiver("OQ")]
        public void ItemQuantityUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            string[] data = package.Substring(2).Split('|');
            Item item = characterGame.Inventory.Items.Find(it => it.InventoryId == Convert.ToInt32(data[0]));
            if (item != null)
            {
                item.Quantity = Convert.ToInt32(data[1]);
            }
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            //TODO send update inventory message
        }

        [Receiver("OC")]
        public void ItemUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            string[] data = package.Substring(2).Split(';');
            Item item = new Item();
            item.DeserializeItem(data[1]);
            characterGame.Inventory.Items[characterGame.Inventory.Items.FindIndex(it => it.InventoryId == item.InventoryId)] = item;
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            //TODO send update inventory message
        }

        [Receiver("OR")]
        public void ItemRemoveHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            string[] data = package.Substring(2).Split(';');
            characterGame.Inventory.Items.RemoveAt(characterGame.Inventory.Items.FindIndex(it => it.InventoryId == Convert.ToInt32(package.Substring(2))));
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            //TODO send update inventory message
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
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, package.Substring(3).Split('|')[0].ToLower() + " t'invite à rejoindre son groupe.", tcpId), tcpId).Wait();
            if (characterGame.HasGroup && package.Substring(3).Split('|')[0].ToLower() == characterGame.Group.Leader.Name.ToLower())
            {
                // TODO cliente.account.connexion.SendPacket("PA");
                hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Invitation acceptée.", tcpId), tcpId).Wait();
            } else
            {
                // TODO cliente.account.connexion.SendPacket("PR");
                hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Invitation refusée.", tcpId), tcpId).Wait();
            }
        }

    }
}
