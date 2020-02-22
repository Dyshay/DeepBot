using DeepBot.Data.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model
{
    public class Proxy : Document<Guid>
    {
        public int MyProperty { get; set; }
    }
}
