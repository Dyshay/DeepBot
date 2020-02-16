using DeepBot.Data.Driver;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class ApiKeyArchiveDB : Document<Guid>
    {
        public Guid Fk_User { get; set; }
        public Guid Fk_Account { get; set; }
        public DateTime CreationDate { get; set; }
        public bool isTrial { get; set; }

    }
}
