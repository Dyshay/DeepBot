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
            string[] _loc3 = rawData.Substring(2).Split('|');
            string[] _loc5 = _loc3[0].Split(',');

            character.Characteristic.ExperienceActual = double.Parse(_loc5[0]);
            character.Characteristic.ExperienceMinLevel = double.Parse(_loc5[1]);
            character.Characteristic.ExperienceLevelUp = double.Parse(_loc5[2]);
            character.Kamas = int.Parse(_loc3[1]);
            character.AvailableCharactericsPts = int.Parse(_loc3[2]);

            _loc5 = _loc3[5].Split(',');
            character.Characteristic.VitalityActual = int.Parse(_loc5[0]);
            character.Characteristic.VitalityMax = int.Parse(_loc5[1]);

            _loc5 = _loc3[6].Split(',');
            character.Characteristic.EnergyActual = int.Parse(_loc5[0]);
            character.Characteristic.EnergyMax = int.Parse(_loc5[1]);

            character.Characteristic.Initiative.Base = int.Parse(_loc3[7]);
            character.Characteristic.Prospection.Base = int.Parse(_loc3[8]);

            for (int i = 9; i <= 18; ++i)
            {
                _loc5 = _loc3[i].Split(',');
                int basee = int.Parse(_loc5[0]);
                int equipment = int.Parse(_loc5[1]);
                int skill = int.Parse(_loc5[2]);
                int boost = int.Parse(_loc5[3]);

                switch (i)
                {
                    case 9:
                        character.Characteristic.PA.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 10:
                        character.Characteristic.PM.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 11:
                        character.Characteristic.Strength.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 12:
                        character.Characteristic.Vitality.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 13:
                        character.Characteristic.Wisdom.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 14:
                        character.Characteristic.Luck.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 15:
                        character.Characteristic.Agility.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 16:
                        character.Characteristic.Intelligence.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 17:
                        character.Characteristic.Range.UpdateStat(basee, equipment, skill, boost);
                        break;

                    case 18:
                        character.Characteristic.InvocablesCreatures.UpdateStat(basee, equipment, skill, boost);
                        break;
                }
            }
        }

        public static void DeserializeInventory(this InventoryDB inventory, string rawData)
        {
            foreach (string data in rawData.Split(';'))
            {
                if (!string.IsNullOrEmpty(data))
                {
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
                item.Fk_ItemId = Convert.ToInt32(values[1], 16);
                item.Quantity = Convert.ToInt32(values[2], 16);
                item.Position = string.IsNullOrEmpty(values[3]) ? ItemSlotEnum.SLOT_INVENTORY : (ItemSlotEnum)Convert.ToInt32(values[3], 16);
                item.Effects = new List<Effect>();
                item.Effects.DeserializeEffects(values[4]);
            }
        }

        public static void DeserializeEffects(this List<Effect> effects, string rawData)
        {
            string[] effect_split = rawData.Substring(0, rawData.Length - 1).Split(',');
            for (int i = 0; i < effect_split.Length; i++)
            {
                string[] stats = effect_split[i].Split('#');
                Effect effect = new Effect();
                effect.Id = (EffectEnum)Convert.ToInt32(stats[0], 16);
                effect.Value1 = Convert.ToInt32(stats[1], 16);
                effect.Value2 = Convert.ToInt32(stats[2], 16);
                effect.Value3 = Convert.ToInt32(stats[3], 16);
                if (stats.Length > 4)
                    effect.Args = stats[4];
                effects.Add(effect);
            }
        }
    }
}
