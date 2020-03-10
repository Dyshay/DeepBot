using DeepBot.Data.Driver;
using System;

namespace DeepBot.Data.Database
{
    public class StatsDB : Document<Guid>
    {
        public Int64 OnlineTime { get; set; } /* temps en minutes */
        public int TotalKamas { get; set; }
        public int TotalLevel { get; set; }
    }
}
