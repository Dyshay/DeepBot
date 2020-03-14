using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.MapComponent.Entities
{
    public abstract class AbstractEntity
    {
        public long Id { get; set; }
        public EntityTypeEnum Type { get; set; }
        public abstract string Name { get; set; }
        public abstract int MapId { get; set; }
        public virtual long Kamas { get; set; }
        public abstract int CellId { get; set; }
        public abstract int Level { get; set; }

        public AbstractEntity(EntityTypeEnum type, int id)
        {
            Id = id;
            Type = type;
        }
    }
}
