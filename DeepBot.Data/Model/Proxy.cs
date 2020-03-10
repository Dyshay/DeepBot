using DeepBot.Data.Driver;
using System;

namespace DeepBot.Data.Model
{
    public class Proxy : Document<Guid>
    {
        public int MyProperty { get; set; }
    }
}
