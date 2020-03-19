namespace DeepBot.Data.Model.MapComponent
{
    public abstract class InteractiveObject
    {
        public int MapId { get; set; }
        public int CellId { get; set; }
        public bool CanWalkThrough { get; set; }
        public bool IsActive { get; set; }

        public InteractiveObject(int mapId, int cellId, bool canWalkThrough = false)
        {
            MapId = mapId;
            CellId = cellId;
            CanWalkThrough = canWalkThrough;
            IsActive = true;
        }
    }
}
