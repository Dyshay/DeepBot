using DeepBot.Data.Driver;
using DeepBot.Data.Model.Global;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class JobsDB : Document<Guid>
    {
        public Guid Fk_User { get; set; }
        public int Fk_Character { get; set; }
        public List<Job> Jobs { get; set; } = new List<Job>();
    }
}
