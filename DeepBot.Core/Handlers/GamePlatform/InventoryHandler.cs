using DeepBot.Core.Extensions;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using DeepBot.Data.Model.Global;
using MongoDB.Driver;
using System;
using System.Linq;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class InventoryHandler : IHandler
    {

        [Receiver("OAKO")]
        public void ItemAddHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            Guid inventoryId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Inventory;
            var inventory = Database.Inventories.Find(i => i.Key == inventoryId).First();
            inventory.Items.DeserializeItems(package.Substring(4));
            Database.Inventories.ReplaceOneAsync(i => i.Key == inventoryId, inventory);
            hub.DispatchToClient(new InventoryMessage(tcpId), tcpId).Wait();
        }

        [Receiver("OM")]
        public void ItemMoveHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            Guid inventoryId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Inventory;
            var inventory = Database.Inventories.Find(i => i.Key == inventoryId).First();
            string[] data = package.Substring(2).Split('|');
            Item item = inventory.Items.Find(it => it.InventoryId == Convert.ToInt32(data[0]));
            if (item != null)
            {
                if (String.IsNullOrEmpty(data[1]))
                    item.Position = ItemSlotEnum.SLOT_INVENTORY;
                else
                    item.Position = (ItemSlotEnum)Convert.ToInt32(data[1]);
            }
            Database.Inventories.ReplaceOneAsync(i => i.Key == inventoryId, inventory);
            hub.DispatchToClient(new InventoryMessage(tcpId), tcpId).Wait();
        }

        [Receiver("OQ")]
        public void ItemQuantityUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            Guid inventoryId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Inventory;
            var inventory = Database.Inventories.Find(i => i.Key == inventoryId).First();
            string[] data = package.Substring(2).Split('|');
            Item item = inventory.Items.Find(it => it.InventoryId == Convert.ToInt32(data[0]));
            if (item != null)
            {
                item.Quantity = Convert.ToInt32(data[1]);
            }
            Database.Inventories.ReplaceOneAsync(i => i.Key == inventoryId, inventory);
            hub.DispatchToClient(new InventoryMessage(tcpId), tcpId).Wait();
        }

        [Receiver("OC")]
        public void ItemUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            Guid inventoryId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Inventory;
            var inventory = Database.Inventories.Find(i => i.Key == inventoryId).First();
            string[] data = package.Substring(3).Split(';');
            Item item = new Item();
            item.DeserializeItem(data[0]);
            inventory.Items[inventory.Items.FindIndex(it => it.InventoryId == item.InventoryId)] = item;
            Database.Inventories.ReplaceOneAsync(i => i.Key == inventoryId, inventory);
            hub.DispatchToClient(new InventoryMessage(tcpId), tcpId).Wait();
        }

        [Receiver("OR")]
        public void ItemRemoveHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            Guid inventoryId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Inventory;
            var inventory = Database.Inventories.Find(i => i.Key == inventoryId).First();
            string[] data = package.Substring(2).Split(';');
            inventory.Items.RemoveAt(inventory.Items.FindIndex(it => it.InventoryId == Convert.ToInt32(package.Substring(2))));
            Database.Inventories.ReplaceOneAsync(i => i.Key == inventoryId, inventory);
            hub.DispatchToClient(new InventoryMessage(tcpId), tcpId).Wait();
        }

        [Receiver("Ow")]
        public void InventoryWeightHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            Guid inventoryId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Inventory;
            var inventory = Database.Inventories.Find(i => i.Key == inventoryId).First();
            string[] pods = package.Substring(2).Split('|');
            inventory.ActualPods = short.Parse(pods[0]);
            inventory.MaxPods = short.Parse(pods[1]);
            Database.Inventories.ReplaceOneAsync(i => i.Key == inventoryId, inventory);
        }

        [Receiver("Oa")]
        public void EntityInventoryHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            //Guid inventoryId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Inventory;
            //var inventory = Database.Inventories.Find(i => i.Key == inventoryId).First();
            //string[] datas = package.Substring(2).Split('|');
            //TODO
            //Database.Inventories.ReplaceOneAsync(i => i.Key == inventoryId, inventory);
        }

        [Receiver("ERK")]
        public void ExchangeRequestHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] datas = package.Substring(3).Split('|');
            int characterId = Convert.ToInt32(datas[0]), targetId = Convert.ToInt32(datas[1]);
            //TODO
        }

        [Receiver("ECK")]
        public void ExchangeCreateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            string[] datas = package.Substring(3).Split('|');
            var exchangeType = (ExchangeTypeEnum)Convert.ToInt32(datas[0]);
            if (exchangeType == ExchangeTypeEnum.EXCHANGE_STORAGE)
                characterGame.State = CharacterStateEnum.BANKING;
            else if (exchangeType == ExchangeTypeEnum.EXCHANGE_PLAYER)
                characterGame.State = CharacterStateEnum.TRADING;
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
        }

        [Receiver("DV")]
        public void DialogLeaveHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.State = CharacterStateEnum.IDLE;
        }

        [Receiver("EK")]
        public void ExchangeValidateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.State = CharacterStateEnum.IDLE;
        }

        [Receiver("EL")]
        public void ExchangeItemsListHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            var inventory = Database.Inventories.Find(i => i.Key == characterGame.Fk_Inventory).First();
            if (characterGame.State == CharacterStateEnum.BANKING)
            {
                inventory.Bank.DeserializeItems(package.Substring(3));
                if (package.Contains(";G"))
                    inventory.BankKamas = Convert.ToInt32(package.Split(';').First(x => x.StartsWith("G")).Replace("G", ""));
            }
            Database.Inventories.ReplaceOneAsync(i => i.Key == characterGame.Fk_Inventory, inventory);
        }
    }
}
