namespace DeepBot.Data.Model.Script.Actions
{
    public class UseItemAction : MapAction
    {
        public int ItemId { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
}
