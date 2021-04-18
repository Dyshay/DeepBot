using DeepBot.Data.Driver;
using System;

namespace DeepBot.Data.Model
{
    public class ConfigUser : Document<Guid>
    {
        public int MyProperty { get; set; }
    }
}
