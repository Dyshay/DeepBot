using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using DeepBot.Data.Model.CharacterInfo;
using DeepBot.Data.Model.Global;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeepBot.Core.Extensions
{
    public static class Deserializer
    {
        public static void DeserializeCharacter(this Character character, string rawData)
        {

        }

        public static void DeserializeInventory(this Inventory inventory, string rawData)
        {
            inventory.Items.Clear();
            foreach (string data in rawData.Split(';'))
            {
                if (!string.IsNullOrEmpty(data))
                {
                    string[] values = data.Split('~');
                    Item item = new Item();
                    item.DeserializeItem(data);
                    inventory.Items.Add(item);
                }
            }
        }

        public static void DeserializeItem(this Item item, string rawData)
        {
            string[] values = rawData.Split('~');

            if (values.Length >= 4)
            {

                item.InventoryId = Convert.ToInt32(values[0], 16);
                item.BaseId = Convert.ToInt32(values[1], 16);
                item.Quantity = Convert.ToInt32(values[2], 16);
                item.Position = string.IsNullOrEmpty(values[3]) ? ItemSlotEnum.SLOT_INVENTORY : (ItemSlotEnum)Convert.ToInt32(values[3]);
                item.Effects.DeserializeEffects(values[4]);
            }
        }

        public static void DeserializeEffects(this List<Effect> effects, string rawData)
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

        public static void DeserializeSpells(this List<SpellDB> spells, string rawData)
        {
            spells.Clear();
            var datas = rawData.Replace("_;", "_").Split(';');
            foreach (var dat in datas)
            {
                var split = dat.Split('~');
                int spellId = int.Parse(split[0]);
                var spell = Database.Spells.FindSync(FilterDefinition<SpellDB>.Empty).ToList().FirstOrDefault(o => o.Key == spellId);
                spell.Level = byte.Parse(split[1]);
                spells.Add(spell);
            }
        }
    }
}
