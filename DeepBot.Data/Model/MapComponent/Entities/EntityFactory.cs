using DeepBot.Data.Enums;
using DeepBot.Data.Generic;
using System;
using System.Diagnostics;

namespace DeepBot.Data.Model.MapComponent.Entities
{
    public class EntityFactory : Singleton<EntityFactory>
    {
        public AbstractEntity CreateEntity(int mapId, string rawData)
        {
            var datas = rawData.Split(';');
            switch ((EntityTypeEnum)Convert.ToInt32(datas[5]))
            {
                case EntityTypeEnum.TYPE_NPC:
                    return new NPCEntity()
                    {
                        Id = Convert.ToInt32(datas[3]),
                        Type = EntityTypeEnum.TYPE_NPC,
                        Name = datas[4],
                        MapId = mapId,
                        CellId = Convert.ToInt32(datas[0]),
                    };
                case EntityTypeEnum.TYPE_MONSTER_GROUP:
                    var group = new MonsterGroupEntity()
                    {
                        Id = Convert.ToInt32(datas[3]),
                        MapId = mapId,
                        CellId = Convert.ToInt32(datas[0]),
                    };
                    for (int i = 0; i < datas[6].Split(',').Length; i++)
                    {
                        group.Monsters.Add(new MonsterEntity()
                        {
                            Id = Convert.ToInt32(datas[4].Split(',')[i]),
                            MapId = mapId,
                            CellId = Convert.ToInt32(datas[0]),
                            Level = Convert.ToInt32(datas[7].Split(',')[i]),
                        });
                    }
                    return group;
                case EntityTypeEnum.TYPE_MOUNT:
                case EntityTypeEnum.TYPE_PRISM:
                case EntityTypeEnum.TYPE_MOUNT_PARK:
                case EntityTypeEnum.TYPE_MUTANT_PLAYER:
                case EntityTypeEnum.TYPE_MUTANT:
                case EntityTypeEnum.TYPE_TAX_COLLECTOR:
                case EntityTypeEnum.TYPE_MERCHANT:
                case EntityTypeEnum.TYPE_MONSTER_FIGHTER:
                case EntityTypeEnum.TYPE_FIGHTER:
                    Debug.WriteLine($"Unknown Entity : {(EntityTypeEnum)Convert.ToInt32(datas[5])}");
                    return null;
                case EntityTypeEnum.TYPE_CHARACTER:
                default:
                    return new CharacterEntity()
                    {
                        Id = Convert.ToInt32(datas[3]),
                        Type = EntityTypeEnum.TYPE_CHARACTER,
                        Name = datas[4],
                        MapId = mapId,
                        CellId = Convert.ToInt32(datas[0]),
                    };
            }
        }
    }
}
