namespace DeepBot.Data.Model.Path
{
    public class ZaapAction:MapAction
    {
        public int ZaapId { get; set; }
        public int Destination { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
}
