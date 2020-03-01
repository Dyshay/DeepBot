using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Path
{
    public class MapAction
    {
        public int Order { get; set; }
        public MoveAction MoveAction { get; set; }
        public UseItemAction UseItemAction { get; set; }
        public FightAction FightAction { get; set; }
        public GatherAction GatherAction { get; set; }
        public InteractionAction InteractionAction { get; set; }
    }
}
