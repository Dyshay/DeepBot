namespace DeepBot.Data.Model.Script.Actions
{
    public class InteractionAction : MapAction
    {
        public int InteractiveIdObject { get; set; }
        public int InteractiveIdResponse { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
}
