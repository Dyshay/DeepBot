using DeepBot.Data.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model
{
    public class ApiKey: Document<Guid>
    {
        public DateTime CreationDate { get; set; }
        public DateTime EndDate { get; set; }
        public int MaxAccount { get; set; }
    }
}
