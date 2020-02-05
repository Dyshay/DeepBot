using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;

namespace DeepBot.Data.Model.MapComponent
{
    public class Map
    {
        public static Dictionary<int, Map> Maps { get; set; }

        public string GlobalAreaName { get; set; }
        public string AreaName { get; set; }
        public int AreaId { get; set; }
        public int MapId { get; set; }
        public string MapData { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string Coordinate { get; set; }
        public MapCell[] Cells { get; set; }
        public Dictionary<MovementDirection, List<short>> CellsTeleport;
        public Dictionary<int, MapEntity> Entities;
        public Dictionary<int, InteractivObject> Interactives;

        public event Action EntitiesUpdate;
        public event Action<int, string> EntityMoved;

        public Map()
        {
        }

        public void FireEntitiesUpdate()
        {
            EntitiesUpdate?.Invoke();
        }

        public void FireEntityMove(int id, string path)
        {
            EntityMoved?.Invoke(id, path);
        }

        public static void Initialize()
        {
            Maps = new Dictionary<int, Map>();
            using Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("DeepBot.Resources.Data.Maps.json");
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                Maps = JsonSerializer.Deserialize<List<Map>>(result).ToDictionary(c => c.MapId, c => DecompressMap(c));
            }
        }

        public static Map DecompressMap(Map map)
        {
            map.Cells = new MapCell[map.MapData.Length / 10];
            map.Interactives = new Dictionary<int, InteractivObject>();
            string cellsValues;

            for (int i = 0; i < map.MapData.Length; i += 10)
            {
                cellsValues = map.MapData.Substring(i, 10);
                map.Cells[i / 10] = DecompressCell(map, cellsValues, Convert.ToInt16(i / 10));
            }

            return map;
        }

        public static MapCell DecompressCell(Map map, string cellData, short cellId)
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
            if (InteractivObject.InteractivesObjects.ContainsKey(interactiv))
                map.Interactives.TryAdd(cellId, InteractivObject.InteractivesObjects[interactiv].Clone());
            return cell;
        }

        public Map Clone()
        {
            return new Map()
            {
                AreaId = AreaId,
                AreaName = AreaName,
                Cells = Cells,
                CellsTeleport = CellsTeleport,
                Coordinate = Coordinate,
                GlobalAreaName = GlobalAreaName,
                Height = Height,
                MapData = MapData,
                MapId = MapId,
                Width = Width,
                Interactives = Interactives,
                Entities = new Dictionary<int, MapEntity>(),
            };
        }
    }
}
