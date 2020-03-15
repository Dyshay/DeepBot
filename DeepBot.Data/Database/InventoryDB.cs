using DeepBot.Data.Driver;
using DeepBot.Data.Model.Global;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class InventoryDB : Document<Guid>
    {
        public Guid Fk_User { get; set; }
        public int Fk_Character { get; set; }
        public int Kamas { get; set; }
        public int BankKamas { get; set; }
        public int MaxPods { get; set; }
        public int ActualPods { get; set; }
        public List<Item> Items { get; set; } = new List<Item>();
        //public List<Item> Consumables { get; set; }
        //public List<Item> Resources { get; set; }
        public List<Item> Bank { get; set; } = new List<Item>();
    }
}
