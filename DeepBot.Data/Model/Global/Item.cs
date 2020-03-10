using DeepBot.Data.Database;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System.Collections.Generic;

namespace DeepBot.Data.Model.Global
{
    public class Item
    {
        public int InventoryId { get; set; }
        public int Fk_ItemId { get; set; }
        public int Quantity { get; set; }
        public ItemSlotEnum Position { get; set; }
        public List<Effect> Effects { get; set; }
        [BsonIgnore]
        public ItemDB baseItem => Driver.Database.Items.Find(c => c.Key == Fk_ItemId).FirstOrDefault();
    }
}
