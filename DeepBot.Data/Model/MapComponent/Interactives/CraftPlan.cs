namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class CraftPlan : InteractiveObject
    {
        public CraftPlan(int mapId, int cellId, bool canWalkThrough = false) : base(mapId, cellId, canWalkThrough) { }
    }
}
