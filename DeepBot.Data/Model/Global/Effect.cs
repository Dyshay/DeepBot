using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Global
{
    public class Effect
    {
        public EffectEnum Id { get; set; }
        public int Stats { get; set; }

        public Effect(EffectEnum id)
        {
            Id = id;
        }
    }
}
