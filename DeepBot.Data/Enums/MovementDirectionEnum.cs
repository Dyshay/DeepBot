using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace DeepBot.Data.Enums
{
    public enum MovementDirectionEnum
    {
        [Description("NONE")]
        NONE,
        [Description("TOP")]
        TOP,
        [Description("BOTTOM")]
        BOTTOM,
        [Description("LEFT")]
        LEFT,
        [Description("RIGHT")]
        RIGHT,
    }
}
