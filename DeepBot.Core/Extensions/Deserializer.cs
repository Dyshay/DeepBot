using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using DeepBot.Data.Model.CharacterInfo;
using DeepBot.Data.Model.Global;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Extensions
{
    public static class Deserializer
    {
        public static void Deserialize(this Character character, string rawData)
        {

        }

        public static void Deserialize(this Inventory inventory, string rawData)
        {
            foreach (string data in rawData.Split(';'))
            {
                if (!string.IsNullOrEmpty(data))
                {
                    string[] values = data.Split('~');
                    Item item = new Item();
                    item.Deserialize(data);
                    inventory.Items.Add(item);
                }
            }
        }

        public static void Deserialize(this Item item, string rawData)
        {
            string[] values = rawData.Split('~');

            if (values.Length >= 4)
            {

                item.InventoryId = Convert.ToInt32(values[0], 16);
                item.BaseId = Convert.ToInt32(values[1], 16);
                item.Quantity = Convert.ToInt32(values[2], 16);
                item.Position = string.IsNullOrEmpty(values[3]) ? ItemSlotEnum.SLOT_INVENTORY : (ItemSlotEnum)Convert.ToInt32(values[3]);
                item.Effects.Deserialize(values[4]);
            }
        }

        public static void Deserialize(this List<Effect> effects, string rawData)
        {
            string[] effect_split = rawData.Split(',');
            for (int i = 0; i < effect_split.Length; i++)
            {
                string[] stats = effect_split[i].Split('#');
                for (int x = 0; x < stats.Length; x++)
                {
                    if (!string.IsNullOrEmpty(stats[x]))
                    {
                        EffectEnum type = (EffectEnum)Convert.ToInt32(stats[0], 16);
                        effects.Add(new Effect(type));
                    }
                }
            }
        }
    }
}
