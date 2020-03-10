using DeepBot.Data.Driver;
using DeepBot.Data.Model.IA;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Database
{
    public class IADB : Document<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Guid FK_User { get; set; }
        public int Classe { get; set; }
        public TypeIA Type { get; set; }
        public List<SpellAction> Actions { get; set; }

    }

    public enum TypeIA{
        Fuyarde=0,
        Agressif=1,
        Hybride=2
    }
}
