using DeepBot.Data.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class StatsDB : Document<int>
    {
        public Guid Id { get; set; } /* Id du User ou account */ 
        public Int64 OnlineTime { get; set; } /* temps en minutes */
        public int TotalKamas { get; set; }
        public int TotalLevel { get; set; }
    }
}
