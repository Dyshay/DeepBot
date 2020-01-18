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

        public static readonly IMongoCollection<UserDB> Users = Base.GetCollection<UserDB>("Users");
        public static readonly IMongoCollection<AccountDB> Accounts = Base.GetCollection<AccountDB>("Accounts");

        public static void Inset<TDocument>(this TDocument document)
        {
            switch (document)
            {
                case UserDB e:
                    Users.InsertOne(e);
                    break;
                case AccountDB e:
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
                case UserDB e:
                    Users.DeleteOne(x => x.Key == e.Key);
                    break;
                case AccountDB e:
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
                case UserDB e:
                    Users.ReplaceOne(x => x.Key == e.Key, e);
                    break;
                case AccountDB  e:
                    Accounts.ReplaceOne(x => x.Key == e.Key, e);
                    break;
                default:
                    throw new NotImplementedException();
            }
        }

    }
}
