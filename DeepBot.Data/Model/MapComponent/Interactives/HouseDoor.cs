namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class HouseDoor : InteractiveObject
    {
        public HouseDoor(int mapId, int cellId, bool canWalkThrough = false) : base(mapId, cellId, canWalkThrough) { }
    }

}
