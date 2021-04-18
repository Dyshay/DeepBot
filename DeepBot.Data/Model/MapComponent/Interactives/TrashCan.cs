namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class TrashCan : InteractiveObject
    {
        public TrashCan(int mapId, int cellId, bool canWalkThrough = false) : base(mapId, cellId, canWalkThrough) { }
    }
}
