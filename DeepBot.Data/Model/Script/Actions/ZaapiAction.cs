namespace DeepBot.Data.Model.Script.Actions
{
    public class ZaapiAction : MapAction
    {
        public int ZaapiId { get; set; }
        public int Destination { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
}
