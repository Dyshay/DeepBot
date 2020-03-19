using DeepBot.Data.Driver;
using DeepBot.Data.Model.IA;
using System;
using System.Collections.Generic;

namespace DeepBot.Data.Database
{
    public class IADB : Document<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Guid FK_User { get; set; }
        public Classe Classe { get; set; }
        public TypeIA Type { get; set; }
        public List<SpellAction> Actions { get; set; }

    }

    public enum TypeIA
    {
        Fuyarde = 0,
        Agressif = 1,
        Hybride = 2
    }
    public enum Classe
    {
        Féca = 10,
        Osamodas = 20,
        Enutrof = 30,
        Sram = 40,
        Xélor = 50,
        Ecaflip = 60,
        Eniripsa = 70,
        Iop = 80,
        Cra = 90,
        Sadida = 100,
        Sacrieur = 110,
        Pandawa = 120
    }
}
