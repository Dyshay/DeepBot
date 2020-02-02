using DeepBot.Data.Model.Character;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Global
{
    public class Item
    {
        public uint IdInventory { get; set; }
        public int IdModel { get; set; }
        public string Name { get; set; }
        public short Level { get; set; }
        public ItemTypeEnum Type { get; set; }
        public ItemSlotEnum Position { get; set; }
        public int Quantity { get; set; }
        public int Weight { get; set; }
        public bool IsUsable { get; set; }
        public int EstimedPrice { get; set; }
        public List<Effect> Effects { get; set; }
        public bool IsEquippable => IsEquippabled();
        public Pet Pet => GetPet(IdInventory); /* EXCLURE MONTURE */

        

        public Item()
        {

        }

        public Pet GetPet(uint id)
        {
            return null;
        }


        public bool IsEquippabled()
        {
            return ItemSlotEnum.SLOT_INVENTORY == Position && (ItemTypeEnum.TYPE_PIERRE_AME == Type || ItemTypeEnum.TYPE_PELLE == Type || ItemTypeEnum.TYPE_OUTIL == Type || ItemTypeEnum.TYPE_PIOCHE == Type || ItemTypeEnum.TYPE_COIFFE == Type
                || ItemTypeEnum.TYPE_ANNEAU == Type || ItemTypeEnum.TYPE_AMULETTE == Type || ItemTypeEnum.TYPE_BOTTES == Type || ItemTypeEnum.TYPE_CEINTURE == Type || ItemTypeEnum.TYPE_DAGUES == Type || ItemTypeEnum.TYPE_DOFUS == Type
                || ItemTypeEnum.TYPE_EPEE == Type || ItemTypeEnum.TYPE_FAUX == Type || ItemTypeEnum.TYPE_HACHE == Type || ItemTypeEnum.TYPE_BATON == Type || ItemTypeEnum.TYPE_BAGUETTE == Type || ItemTypeEnum.TYPE_ARC == Type
                );
        }
    }



}
