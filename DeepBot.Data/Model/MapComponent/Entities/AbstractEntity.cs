using DeepBot.Data.Enums;

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
