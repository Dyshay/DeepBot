namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class PaddockDoor : InteractiveObject
    {
        public PaddockDoor(int mapId, int cellId, bool canWalkThrough = false) : base(mapId, cellId, canWalkThrough) { }
    }
}
