using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Global
{
    public class Item
    {
        public int InventoryId { get; set; }
        public int BaseId { get; set; }
        public int Quantity { get; set; }
        public ItemSlotEnum Position { get; set; }
        public List<Effect> Effects { get; set; }
    }
}
