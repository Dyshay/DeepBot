namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class Chest : InteractiveObject
    {
        public Chest(int mapId, int cellId, bool canWalkThrough = false) : base(mapId, cellId, canWalkThrough) { }
    }
}
