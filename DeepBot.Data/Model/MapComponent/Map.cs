using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using DeepBot.Data.Model.MapComponent.Interactives;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.MapComponent
{
    public class Map
    {
        public int MapId
        {
            set
            {
                CurrentMap = Driver.Database.Maps.Find(o => o.Key == value).FirstOrDefault();
                Entities = new ConcurrentDictionary<int, MapEntity>();
                Interactives = new ConcurrentDictionary<int, InteractiveObject>();
                foreach (var cell in CurrentMap.Cells)
                    if (cell.InteractiveObject != -1 && InteractiveObjectManager.Instance.Exists(cell.InteractiveObject))
                        Interactives.TryAdd(cell.InteractiveObject,
                            InteractiveObjectManager.Instance.Generate(cell.InteractiveObject, CurrentMap.Key, cell.Id));
            }
        }
        public MapDB CurrentMap { get; private set; }
        public ConcurrentDictionary<int, MapEntity> Entities { get; set; }
        public ConcurrentDictionary<int, InteractiveObject> Interactives { get; set; }

        public Map(int mapId)
        {
            MapId = mapId;
        }
    }
}
