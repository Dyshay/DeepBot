using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Driver
{
    public class Document<TKey>
    {
        [BsonId]
        public TKey Key { get; set; }
    }
}
