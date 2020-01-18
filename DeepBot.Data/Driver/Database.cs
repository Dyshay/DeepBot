using DeepBot.Data.Database;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Driver
{
    public static class Database
    {
        private static readonly IMongoDatabase Base = new MongoClient().GetDatabase("DeepBot");

        public static readonly IMongoCollection<AccountMongoDB> Accounts = Base.GetCollection<AccountMongoDB>("Accounts");

        public static void Inset<TDocument>(this TDocument document)
        {
            switch (document)
            {
                case AccountMongoDB e:
                    Accounts.InsertOne(e);
                    break;
                default:
                    throw new NotImplementedException();
            }
        }

        public static void Delete<TDocument>(this TDocument document)
        {
            switch (document)
            {
                case AccountMongoDB e:
                    Accounts.DeleteOne(x => x.Key == e.Key);
                    break;
                default:
                    throw new NotImplementedException();
            }
        }

        public static void Push<TDocument>(this TDocument document, Action<TDocument> action = null)
        {
            action?.Invoke(document);

            switch (document)
            {
                case AccountMongoDB e:
                    Accounts.ReplaceOne(x => x.Key == e.Key, e);
                    break;
                default:
                    throw new NotImplementedException();
            }
        }

    }
}
