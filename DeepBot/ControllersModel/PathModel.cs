using DeepBot.Data.Database;
using System;
using System.Collections.Generic;

namespace DeepBot.ControllersModel
{
    public class PathModel
    {
        public string? Key { get; set; }
        public string Name { get; set; }
        public TypePath Type { get; set; }
        public int MaxPod { get; set; }
        public int MonsterQuantityMin { get; set; }
        public int MonsterQuantityMax { get; set; }
        public int GroupLevelMin { get; set; }
        public int GroupLevelMax { get; set; }
        public bool IsCapture { get; set; }
        public bool LeaderBank { get; set; }
        public int CaptureItem { get; set; }
        public List<int> ListRessource { get; set; }
        public List<SpecificMonsterLevelModel> MonsterLevel { get; set; }
        public List<SpecificMonsterQuantityModel> MonsterQuantity { get; set; }
        public List<CaptureMonsterQuantityModel> MonsterCapture { get; set; }
        public List<PathActionModel> PathAction { get; set; }

    }
    public class SpecificMonsterLevelModel
    {
        public int MonsterId { get; set; }
        public int MonsterLevelMin { get; set; }
        public int MonsterLevelmax { get; set; }
    }
    public class SpecificMonsterQuantityModel
    {
        public int MonsterId { get; set; }
        public int MonsterQuantityMin { get; set; }
        public int MonsterQuantityMax { get; set; }
    }

    public class CaptureMonsterQuantityModel
    {
        public int MonsterId { get; set; }
        public int MonsterQuantity { get; set; }
    }
    public class PathActionModel
    {
        public string MapPos { get; set; }
        public List<MapActionModel> Actions { get; set; }
    }
    public class MapActionModel
    {
        public int Order { get; set; }
        public MoveActionModel moveAction { get; set; }
        public UseItemActionModel? UseItemAction { get; set; }
        public FightActionModel? FightAction { get; set; }
        public GatherActionModel? GatherAction { get; set; }
        public InteractionActionModel? InteractionAction { get; set; }
        public ZaapActionModel? ZaapAction { get; set; }
        public ZaapiActionModel? ZaapiAction { get; set; }
        public BankActionModel? BankAction { get; set; }


    }
    public class MoveActionModel
    {
        public List<string>? Direction { get; set; }
        public int? Cellid { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
        public int? MapId { get; set; }
    }
    public class UseItemActionModel
    {
        public int ItemId { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }

    }
    public class FightActionModel
    {
        public bool IsAlone { get; set; }
    }
    public class GatherActionModel
    {

    }
    public class InteractionActionModel
    {
        public int InteractiveidObject { get; set; }
        public int InteractiveIdResponse { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
    public class ZaapActionModel
    {
        public int ZaapId { get; set; }
        public string Destination { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
    public class ZaapiActionModel
    {
        public int ZaapiId { get; set; }
        public string Destination { get; set; }
        public bool ToGoBank { get; set; }
        public bool ToBackBank { get; set; }
    }
    public class BankActionModel
    {
        public int? MapId { get; set; }
    }

    public class PathMinDisplayed
    {
        public string Name { get; set; }
        public TypePath Type { get; set; }
        public bool IsCapture { get; set; }
        public Guid Key { get; set; }
        public int UsedNumber { get; set; }
        public List<string> Zones { get; set; }
    }

    public class pathKey
    {
        public Guid Key { get; set; }
    }

}



