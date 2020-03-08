using DeepBot.Data.Driver;
using System;

namespace DeepBot.Data.Database
{
    public class IADB : Document<Guid>
    {
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime UpdatedDate { get; set; }

    }
}
