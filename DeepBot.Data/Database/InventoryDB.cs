using DeepBot.Data.Driver;
using DeepBot.Data.Model.Global;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class InventoryDB : Document<Guid>
    {
        public Guid Fk_User { get; set; }
        public int Fk_Character { get; set; }
        public int BankKamas { get; set; }
        public List<Item> Items { get; set; } = new List<Item>();
        //public List<Item> Consumables { get; set; }
        //public List<Item> Resources { get; set; }
        public List<Item> Bank { get; set; } = new List<Item>();
    }
}
