using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Utilities.Animations
{
    public class AnimationDuration
    {
        public int Linear { get; private set; }
        public int Horizontal { get; private set; }
        public int Vertical { get; private set; }

        public AnimationDuration(int linear, int horizontal, int vertical)
        {
            Linear = linear;
            Horizontal = horizontal;
            Vertical = vertical;
        }
    }
}
