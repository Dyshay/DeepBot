using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using DeepBot.Data.Model.MapComponent.Entities;
using DeepBot.Data.Model.MapComponent.Interactives;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.MapComponent
{
    public class Map : Document<int>
    {
        public int MapId
        {
            set
            {
                Key = value;
                CurrentMap = Driver.Database.Maps.Find(o => o.Key == value).FirstOrDefault();
                Entities = new Dictionary<int, AbstractEntity>();
                Interactives = new Dictionary<int, InteractiveObject>();
                foreach (var cell in CurrentMap.Cells)
                    if (cell.InteractiveObject != -1 && InteractiveObjectManager.Instance.Exists(cell.InteractiveObject))
                        Interactives.TryAdd(cell.Id, InteractiveObjectManager.Instance.Generate(cell.InteractiveObject, CurrentMap.Key, cell.Id));
            }
        }
        public MapDB CurrentMap { get; private set; }
        public Dictionary<int, AbstractEntity> Entities { get; set; }
        public Dictionary<int, InteractiveObject> Interactives { get; set; }

        public Map(int mapId)
        {
            MapId = mapId;
        }
    }
}
