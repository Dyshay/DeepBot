namespace DeepBot.Data.Model.Script.Actions
{
    public class ZaapAction : MapAction
    {
        public int ZaapId { get; set; }
        public int Destination { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
}
