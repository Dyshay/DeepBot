using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Enums
{
    public enum EntityTypeEnum
    {
        // SPECIAL TYPES BDD ITEMS
        TYPE_STORAGE = -22,
        TYPE_AUCTION_HOUSE = -21,
        TYPE_BANK = -20,

        // GAME TYPES
        TYPE_MOUNT = -11,
        TYPE_PRISM = -10,
        TYPE_MOUNT_PARK = -9,
        TYPE_MUTANT_PLAYER = -8,
        TYPE_MUTANT = -7,
        TYPE_TAX_COLLECTOR = -6,
        TYPE_MERCHANT = -5,
        TYPE_NPC = -4,
        TYPE_MONSTER_GROUP = -3,
        TYPE_MONSTER_FIGHTER = -2,
        TYPE_FIGHTER = -1,
        TYPE_CHARACTER = 0,
    }
}
