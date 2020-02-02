using DeepBot.Data.Model.Global;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.CharacterInfo
{
    public class Inventory
    {
        public int MaxPod { get; set; }
        public int ActualPod { get; set; }
        public List<Item> Items { get; set; }

        public event Action<Item> InventoryRefresh;

        public Inventory()
        {

        }
    }
}
