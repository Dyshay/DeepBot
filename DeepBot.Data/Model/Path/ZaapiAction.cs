using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Path
{
    public class ZaapiAction:MapAction
    {
        public int ZaapiId { get; set; }
        public int Destination { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
}
