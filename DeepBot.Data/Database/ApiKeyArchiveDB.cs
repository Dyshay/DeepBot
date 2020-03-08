using DeepBot.Data.Driver;
using System;

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
