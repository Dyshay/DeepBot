using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.MapComponent.Entities
{
    public abstract class AbstractEntity
    {
        public int Id { get; set; }
        public EntityTypeEnum Type { get; set; }
        public int MapId { get; set; }
        public int CellId { get; set; }
    }
}
