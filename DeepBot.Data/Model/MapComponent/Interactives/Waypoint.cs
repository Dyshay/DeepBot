namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class WayPoint : InteractiveObject
    {
        public WayPoint(int mapId, int cellId, bool canWalkThrough = false) : base(mapId, cellId, canWalkThrough) { }
    }
}
