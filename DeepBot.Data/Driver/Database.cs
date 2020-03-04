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
        public static readonly IMongoCollection<RoleDB> Roles = Base.GetCollection<RoleDB>("Roles");
        public static readonly IMongoCollection<GroupDB> Groups = Base.GetCollection<GroupDB>("Groups");
        public static readonly IMongoCollection<IADB> IA = Base.GetCollection<IADB>("IA");
        public static readonly IMongoCollection<StatsDB> Stats = Base.GetCollection<StatsDB>("Stats");
        public static readonly IMongoCollection<ApiKeyArchiveDB> ApiArchives = Base.GetCollection<ApiKeyArchiveDB>("ApiArchive");
        public static readonly IMongoCollection<ConfigCharacterDB> ConfigsCharacter = Base.GetCollection<ConfigCharacterDB>("ConfigCharacter");
        public static readonly IMongoCollection<ConfigGroupDB> ConfigsGroup = Base.GetCollection<ConfigGroupDB>("ConfigGroup");
        public static readonly IMongoCollection<MapDB> Maps = Base.GetCollection<MapDB>("Maps");
        public static readonly IMongoCollection<ItemDB> Items = Base.GetCollection<ItemDB>("Items");
        public static readonly IMongoCollection<SpellDB> Spells = Base.GetCollection<SpellDB>("Spells");

        public static void Insert<TDocument>(this TDocument document)
        {
            switch (document)
            {
                case IADB e:
                    IA.InsertOne(e);
                    break;
                case GroupDB e:
                    Groups.InsertOne(e);
                    break;
                case StatsDB e:
                    Stats.InsertOne(e);
                    break;
                case ApiKeyArchiveDB e:
                    ApiArchives.InsertOne(e);
                    break;
                case ConfigCharacterDB e:
                    ConfigsCharacter.InsertOne(e);
                    break;
                case ConfigGroupDB e:
                    ConfigsGroup.InsertOne(e);
                    break;
                case MapDB e:
                    Maps.InsertOne(e);
                    break;
                case ItemDB e:
                    Items.InsertOne(e);
                    break;
                case SpellDB e:
                    Spells.InsertOne(e);
                    break;
                default:
                    throw new NotImplementedException();
            }
        }

        public static void Delete<TDocument>(this TDocument document)
        {
            switch (document)
            {
                case IADB e:
                    IA.InsertOne(e);
                    break;
                case GroupDB e:
                    Groups.InsertOne(e);
                    break;
                case StatsDB e:
                    Stats.InsertOne(e);
                    break;
                case ApiKeyArchiveDB e:
                    ApiArchives.InsertOne(e);
                    break;
                case ConfigCharacterDB e:
                    ConfigsCharacter.InsertOne(e);
                    break;
                case ConfigGroupDB e:
                    ConfigsGroup.InsertOne(e);
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
                case IADB e:
                    IA.InsertOne(e);
                    break;
                case GroupDB e:
                    Groups.InsertOne(e);
                    break;
                case StatsDB e:
                    Stats.InsertOne(e);
                    break;
                case ApiKeyArchiveDB e:
                    ApiArchives.InsertOne(e);
                    break;
                case ConfigCharacterDB e:
                    ConfigsCharacter.InsertOne(e);
                    break;
                case ConfigGroupDB e:
                    ConfigsGroup.InsertOne(e);
                    break;
                default:
                    throw new NotImplementedException();
            }
        }


        public static long CountRole()
        {
            return Base.GetCollection<RoleDB>("Roles").CountDocuments(_ => true);
        }


    }
}
