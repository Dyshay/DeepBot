using DeepBot.Data.Driver;
using System;

namespace DeepBot.Data.Model
{
    public class ApiKey : Document<Guid>
    {
        public DateTime CreationDate { get; set; }
        public DateTime EndDate { get; set; }
        public int MaxAccount { get; set; }
    }
}
