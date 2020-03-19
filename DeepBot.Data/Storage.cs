using DeepBot.Data.Generic;
using DeepBot.Data.Model;
using System.Collections.Concurrent;

namespace DeepBot.Data
{
    public class Storage : Singleton<Storage>
    {
        public ConcurrentDictionary<int, Character> Characters { get; set; } = new ConcurrentDictionary<int, Character>();
    }
}