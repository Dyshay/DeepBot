using MongoDB.Bson.Serialization.Attributes;

namespace DeepBot.Data.Driver
{
    public class Document<TKey>
    {
        [BsonId]
        public TKey Key { get; set; }
    }
}
