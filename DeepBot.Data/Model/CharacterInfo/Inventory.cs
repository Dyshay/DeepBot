using DeepBot.Data.Model.Global;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.CharacterInfo
{
    public class Inventory
    {
        public int MaxPods { get; set; }
        public int ActualPods { get; set; }
        public List<Item> Items { get; set; }
    }
}
