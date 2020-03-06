using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using DeepBot.Data.Model.CharacterInfo;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;

namespace DeepBot.Data.Database.Loaders
{
    public class Loader
    {

        public static void LoadItems()
        {
            var Items = new Dictionary<int, ItemDB>();
            using Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("DeepBot.Data.Database.Resources.Items.json");
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                Items = JsonSerializer.Deserialize<List<ItemJson>>(result).ToDictionary(c => c.Id, c => DecompressItem(c));
            }
            foreach (var item in Items.Values)
            {
                item.Insert();
            }
        }

        public static void LoadMaps()
        {
            var Maps = new Dictionary<int, MapDB>();
            using Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("DeepBot.Data.Database.Resources.Maps.json");
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                Maps = JsonSerializer.Deserialize<List<MapJson>>(result).ToDictionary(c => c.MapId, c => DecompressMap(c));
            }
            foreach (var map in Maps.Values)
            {
                map.Insert();
            }
        }

        public static ItemDB DecompressItem(ItemJson itemj)
        {
            ItemDB item = new ItemDB();
            item.Key = itemj.Id;
            item.Name = itemj.Name;
            item.Type = (ItemTypeEnum)itemj.Type;
            item.Level = itemj.Level;
            item.Weight = itemj.Weight;
            item.TwoHands = itemj.TwoHands;
            item.Ethereal = itemj.Ethereal;
            item.Forgemageable = itemj.Forgemageable;
            item.Buff = itemj.Buff;
            item.Usable = itemj.Usable;
            item.Targetable = itemj.Targetable;
            item.Conditions = itemj.Conditions;
            item.BaseEffects = itemj.Effects;
            item.SetId = itemj.SetId;
            item.CSBonus = itemj.CSBonus;
            item.APCost = itemj.APCost;
            item.POMin = itemj.POMin;
            item.POMax = itemj.POMax;
            item.CSRate = itemj.CSRate;
            item.CFRate = itemj.CFRate;
            return item;
        }

        public static MapDB DecompressMap(MapJson mapj)
        {
            MapDB map = new MapDB();
            map.Key = mapj.MapId;
            map.AreaId = mapj.AreaId;
            map.AreaName = mapj.AreaName;
            map.GlobalAreaName = mapj.GlobalAreaName;
            map.Height = mapj.Height;
            map.Width = mapj.Width;
            map.Cells = new MapCell[mapj.MapData.Length / 10];
            string cellsValues;
            for (int i = 0; i < mapj.MapData.Length; i += 10)
            {
                cellsValues = mapj.MapData.Substring(i, 10);
                map.Cells[i / 10] = DecompressCell(mapj, cellsValues, Convert.ToInt16(i / 10));
            }
            map.Coordinate = mapj.Coordinate;
            return map;
        }

        public static MapCell DecompressCell(MapJson map, string cellData, short cellId)
        {
            byte[] cellInformations = new byte[cellData.Length];

            for (int i = 0; i < cellData.Length; i++)
                cellInformations[i] = Convert.ToByte(Hash.GetHash(cellData[i]));

            int mapWidth = map.Width;
            int loc5 = cellId / ((mapWidth * 2) - 1);
            int loc6 = cellId - (loc5 * ((mapWidth * 2) - 1));
            int loc7 = loc6 % mapWidth;
            short interactiv = ((cellInformations[7] & 2) >> 1) != 0 ? Convert.ToInt16(((cellInformations[0] & 2) << 12) + ((cellInformations[7] & 1) << 12) + (cellInformations[8] << 6) + cellInformations[9]) : Convert.ToInt16(-1);

            MapCell cell = new MapCell()
            {
                Id = cellId,
                Type = (CellTypes)((cellInformations[2] & 56) >> 3),
                IsActive = (cellInformations[0] & 32) >> 5 != 0,
                IsInLineOfSight = (cellInformations[0] & 1) != 1,
                InteractiveObject = interactiv,
                LayerObject2 = Convert.ToInt16(((cellInformations[0] & 2) << 12) + ((cellInformations[7] & 1) << 12) + (cellInformations[8] << 6) + cellInformations[9]),
                LayerObject1 = Convert.ToInt16(((cellInformations[0] & 4) << 11) + ((cellInformations[4] & 1) << 12) + (cellInformations[5] << 6) + cellInformations[6]),
                LayerGroundLevel = Convert.ToByte(cellInformations[1] & 15),
                LayerGroundSlope = Convert.ToByte((cellInformations[4] & 60) >> 2),
                X = (cellId - ((mapWidth - 1) * (loc5 - loc7))) / mapWidth,
                Y = loc5 - loc7
            };
            return cell;
        }
    }
}
