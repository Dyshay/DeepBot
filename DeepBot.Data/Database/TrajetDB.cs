using DeepBot.Data.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class TrajetDB : Document<Guid>
    {
        public string Name { get; set; }
        public Guid Fk_User { get; set; }
        public int type { get; set; }
        // TO DO  :  obets déplacement , action , combatt , obtions du trajet ETC 
    }
}
