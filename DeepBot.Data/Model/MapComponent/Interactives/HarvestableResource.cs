namespace DeepBot.Data.Model.MapComponent.Interactives
{
    public class HarvestableResource : InteractiveObject
    {
        public int GeneratedTemplateId { get; set; }
        public int Experience { get; set; }

        public HarvestableResource(int mapId, int cellId, int generatedTemplateId, int experience, bool walkThrough = false)
            : base(mapId, cellId, walkThrough)
        {
            GeneratedTemplateId = generatedTemplateId;
            Experience = experience;
        }
    }
}
