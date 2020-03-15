using DeepBot.Data.Generic;
using DeepBot.Data.Model;
using DeepBot.Data.Model.MapComponent;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data
{
    public class Storage : Singleton<Storage>
    {
        public ConcurrentDictionary<int, Character> Characters { get; set; } = new ConcurrentDictionary<int, Character>();
    }
}
