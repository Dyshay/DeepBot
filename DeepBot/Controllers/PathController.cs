using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using DeepBot.Data.Model.Script;
using DeepBot.Data.Model.Script.Actions;
using DeepBot.Data.Model.Script.Options;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DeepBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PathController : ControllerBase
    {
        private UserManager<UserDB> _userManager;
        private SignInManager<UserDB> _signInManager;
        private RoleManager<RoleDB> _roleManager;
        private readonly ApplicationSettings _appSettings;
        readonly IMongoCollection<UserDB> _userCollection;
        private List<TrajetDB> _paths = Database.Paths.Find(FilterDefinition<TrajetDB>.Empty).ToList();
        private List<string> ListBank = new List<string>() { "-29;-58", "-23;40", "2;-2", "4;-16", "-16;4", "24;-36" };
        public PathController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
        }

        [HttpGet]
        [Authorize]
        [Route("GetAllPaths")]
        public async Task<List<PathMinDisplayed>> GetAllPaths()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            List<TrajetDB> listTrajet = _paths.Where(o => o.Fk_User.ToString() == userId).ToList();
            List<PathMinDisplayed> listeRetour = new List<PathMinDisplayed>();
            var user = await _userManager.FindByIdAsync(userId);
            foreach (TrajetDB item in listTrajet)
            {
                listeRetour.Add(new PathMinDisplayed()
                {
                    IsCapture = item.IsCapture,
                    Key = item.Key,
                    Name = item.Name,
                    Type = item.Type,
                    Zones = item.Zones
                });
            }

            return listeRetour;
        }
        [HttpPost]
        [Authorize]
        [Route("GetPathByKey")]
        public async Task<PathModel> GetPathByKey(pathKey key)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            TrajetDB trajet = _paths.FirstOrDefault(o => o.Key == key.Key);

            PathModel pathToSend = new PathModel()
            {
                Name = trajet.Name,
                Type = trajet.Type,
                GroupLevelMax = trajet.GroupLevelMax,
                GroupLevelMin = trajet.GroupLevelMin,
                CaptureItem = trajet.CaptureItem,
                MaxPod = trajet.MaxPod,
                MonsterQuantityMin = trajet.MonsterQuantityMin,
                MonsterQuantityMax = trajet.MonsterQuantityMax,
                ListRessource = trajet.ListRessource,
                LeaderBank = trajet.LeaderBank,
                IsCapture = trajet.IsCapture,
                Key = trajet.Key.ToString()
            };
            pathToSend.PathAction = new List<PathActionModel>();
            foreach (var item in trajet.PathAction)
            {
                PathActionModel pathactionmodelToAdd = new PathActionModel();
                pathactionmodelToAdd.MapPos = Database.Maps.Find(o => o.Key == item.MapId).First().Coordinate.Replace(',', ';').Replace("[", "").Replace("]", "");
                pathactionmodelToAdd.Actions = new List<MapActionModel>();
                foreach (var action in item.Actions)
                {
                    MapActionModel mapaction = new MapActionModel()
                    {
                        Order = action.Order
                    };
                    if (action is FightAction)
                    {
                        FightActionModel fight = new FightActionModel() { IsAlone = ((FightAction)action).IsAlone };
                        mapaction.FightAction = fight;
                    }
                    else if (action is BankAction)
                    {
                        BankActionModel bank = new BankActionModel() { MapId = item.MapId };
                        mapaction.BankAction = bank;
                    }
                    else if (action is GatherAction)
                    {
                        GatherActionModel gather = new GatherActionModel() { };
                        mapaction.GatherAction = gather;
                    }
                    else if (action is InteractionAction)
                    {
                        InteractionActionModel interaction = new InteractionActionModel()
                        {
                            InteractiveidObject = ((InteractionAction)action).InteractiveIdObject,
                            InteractiveIdResponse = ((InteractionAction)action).InteractiveIdResponse,
                            ToBackBank = ((InteractionAction)action).ToBackBank,
                            ToGoBank = ((InteractionAction)action).ToGoBank
                        };
                        mapaction.InteractionAction = interaction;
                    }
                    else if (action is MoveAction)
                    {
                        MoveActionModel move = null;
                        if (((MoveAction)action).Direction != null)
                        {
                            move = new MoveActionModel()
                            {
                                Cellid = ((MoveAction)action).CellId,
                                ToGoBank = ((MoveAction)action).ToGoBank,
                                ToBackBank = ((MoveAction)action).ToBackBank,
                                Direction = ((MoveAction)action).Direction.ConvertAll(o => o.ToString()),
                                MapId = ((MoveAction)action).MapId
                            };
                        }
                        else
                        {
                            move = new MoveActionModel()
                            {
                                Cellid = ((MoveAction)action).CellId,
                                ToGoBank = ((MoveAction)action).ToGoBank,
                                ToBackBank = ((MoveAction)action).ToBackBank,
                                Direction = null,
                                MapId = ((MoveAction)action).MapId
                            };
                        }

                        mapaction.moveAction = move;
                    }
                    else if (action is UseItemAction)
                    {
                        UseItemActionModel useitem = new UseItemActionModel()
                        {
                            ToBackBank = ((UseItemAction)action).ToBackBank,
                            ItemId = ((UseItemAction)action).ItemId,
                            ToGoBank = ((UseItemAction)action).ToGoBank
                        };
                        mapaction.UseItemAction = useitem;
                    }
                    else if (action is ZaapAction)
                    {
                        ZaapActionModel zaap = new ZaapActionModel()
                        {
                            ToGoBank = ((ZaapAction)action).ToGoBank,
                            ToBackBank = ((ZaapAction)action).ToBackBank,
                            Destination = Database.Maps.Find(o => o.Key == ((ZaapAction)action).Destination).First().Coordinate.Replace(',', ';').Replace("[", "").Replace("]", ""),
                            ZaapId = ((ZaapAction)action).ZaapId
                        };
                        mapaction.ZaapAction = zaap;
                    }
                    else if (action is ZaapiAction)
                    {
                        ZaapiActionModel zaapi = new ZaapiActionModel()
                        {
                            ToGoBank = ((ZaapAction)action).ToGoBank,
                            ToBackBank = ((ZaapAction)action).ToBackBank,
                            Destination = Database.Maps.Find(o => o.Key == ((ZaapAction)action).Destination).First().Coordinate.Replace(',', ';').Replace("[", "").Replace("]", ""),
                            ZaapiId = ((ZaapAction)action).ZaapId
                        };
                        mapaction.ZaapiAction = zaapi;
                    }
                    pathactionmodelToAdd.Actions.Add(mapaction);
                };

                pathToSend.PathAction.Add(pathactionmodelToAdd);
            };


            return pathToSend;
        }

        [HttpPost]
        [Authorize]
        [Route("UpdatePath")]
        public async Task<PathMinDisplayed> UpdatePath(PathModel path)
        {
            int mapId = 0;
            List<string> zones = new List<string>();
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            TrajetDB trajetDB = new TrajetDB()
            {
                Name = path.Name,
                Type = (TypePath)path.Type,
                GroupLevelMax = path.GroupLevelMax,
                GroupLevelMin = path.GroupLevelMin,
                CaptureItem = path.CaptureItem,
                Fk_User = new Guid(userId),
                MaxPod = path.MaxPod,
                MonsterQuantityMin = path.MonsterQuantityMin,
                MonsterQuantityMax = path.MonsterQuantityMax,
                LeaderBank = path.LeaderBank,
                IsCapture = path.IsCapture,
                ListRessource = path.ListRessource,
                Key = new Guid(path.Key)
            };
            if (path.MonsterLevel != null)
                foreach (var monstreLevel in path.MonsterLevel)
                {
                    if (trajetDB.MonsterLevel == null)
                        trajetDB.MonsterLevel = new List<SpecificMonsterLevel>();

                    trajetDB.MonsterLevel.Add(new SpecificMonsterLevel()
                    {
                        MonsterId = monstreLevel.MonsterId,
                        MonsterLevelMax = monstreLevel.MonsterLevelmax,
                        MonsterLevelMin = monstreLevel.MonsterLevelMin
                    });
                }
            if (path.MonsterQuantity != null)
                foreach (var monstreQuantity in path.MonsterQuantity)
                {
                    if (trajetDB.MonsterQuantity == null)
                        trajetDB.MonsterQuantity = new List<SpecificMonsterQuantity>();
                    trajetDB.MonsterQuantity.Add(new SpecificMonsterQuantity()
                    {
                        MonsterId = monstreQuantity.MonsterId,
                        MonsterQuantityMax = monstreQuantity.MonsterQuantityMax,
                        MontserQuantityMin = monstreQuantity.MonsterQuantityMin
                    });
                }
            if (path.MonsterCapture != null)
                foreach (var monstreCapture in path.MonsterCapture)
                {
                    if (trajetDB.MonsterCapture == null)
                        trajetDB.MonsterCapture = new List<CaptureMonsterQuantity>();
                    trajetDB.MonsterCapture.Add(new CaptureMonsterQuantity()
                    {
                        MonsterId = monstreCapture.MonsterId,
                        MonsterQuantity = monstreCapture.MonsterQuantity
                    });
                }
            /* actions du trajet */
            trajetDB.PathAction = new List<PathAction>();
            foreach (PathActionModel action in path.PathAction)
            {
                PathAction pathActionToCreate = new PathAction();
                if (!ListBank.Contains(action.MapPos))
                {
                    MapDB map = Database.Maps.Find(o => o.Coordinate == ("[" + action.MapPos.Replace(';', ',') + "]")).First();

                    mapId = map.Key;
                    if (!zones.Contains(map.AreaName))
                        zones.Add(map.AreaName);

                    pathActionToCreate.MapId = mapId;
                    foreach (MapActionModel item in action.Actions)
                    {
                        if (pathActionToCreate.Actions == null)
                            pathActionToCreate.Actions = new List<MapAction>();

                        if (item.FightAction != null)
                        {
                            FightAction fightActionToCreate = new FightAction()
                            {
                                Order = item.Order,
                                IsAlone = item.FightAction.IsAlone
                            };
                            pathActionToCreate.Actions.Add(fightActionToCreate);
                        }
                        else if (item.GatherAction != null)
                        {
                            GatherAction GatherActionToCreate = new GatherAction()
                            {
                                Order = item.Order
                            };
                            pathActionToCreate.Actions.Add(GatherActionToCreate);
                        }
                        else if (item.InteractionAction != null)
                        {
                            InteractionAction InteractionActionToCreate = new InteractionAction()
                            {
                                Order = item.Order,
                                InteractiveIdObject = item.InteractionAction.InteractiveidObject,
                                InteractiveIdResponse = item.InteractionAction.InteractiveIdResponse,
                                ToBackBank = item.InteractionAction.ToBackBank,
                                ToGoBank = item.InteractionAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(InteractionActionToCreate);
                        }
                        else if (item.moveAction != null)
                        {
                            MoveAction MoveActionToCreate = new MoveAction()
                            {
                                Order = item.Order,
                                ToBackBank = item.moveAction.ToBackBank,
                                ToGoBank = item.moveAction.ToGoBank,
                                CellId = item.moveAction.Cellid
                            };
                            if (item.moveAction.Direction != null)
                                foreach (string direc in item.moveAction.Direction)
                                {
                                    if (MoveActionToCreate.Direction == null)
                                        MoveActionToCreate.Direction = new List<MovementDirectionEnum>();
                                    MoveActionToCreate.Direction.Add((MovementDirectionEnum)System.Enum.Parse(typeof(MovementDirectionEnum), direc.ToUpper()));
                                }
                            pathActionToCreate.Actions.Add(MoveActionToCreate);
                        }
                        else if (item.UseItemAction != null)
                        {
                            UseItemAction UseItemActionToCreate = new UseItemAction()
                            {
                                Order = item.Order,
                                ItemId = item.UseItemAction.ItemId,
                                ToBackBank = item.UseItemAction.ToBackBank,
                                ToGoBank = item.UseItemAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(UseItemActionToCreate);
                        }
                        else if (item.ZaapAction != null)
                        {
                            int zaapDestination = Database.Maps.Find(o => o.Coordinate == ("[" + action.MapPos.Replace(';', ',') + "]")).First().Key;

                            ZaapAction UseItemActionctionToCreate = new ZaapAction()
                            {
                                Order = item.Order,
                                Destination = zaapDestination,
                                ZaapId = item.ZaapAction.ZaapId,
                                ToBackBank = item.ZaapAction.ToBackBank,
                                ToGoBank = item.ZaapAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(UseItemActionctionToCreate);
                        }
                        else if (item.ZaapiAction != null)
                        {
                            int zaapiDestination = Database.Maps.Find(o => o.Coordinate == ("[" + action.MapPos.Replace(';', ',') + "]")).First().Key;
                            ZaapAction UseItemActionctionToCreate = new ZaapAction()
                            {
                                Order = item.Order,
                                Destination = zaapiDestination,
                                ZaapId = item.ZaapiAction.ZaapiId,
                                ToBackBank = item.ZaapiAction.ToBackBank,
                                ToGoBank = item.ZaapiAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(UseItemActionctionToCreate);
                        }
                    }
                    trajetDB.PathAction.Add(pathActionToCreate);
                }
                else
                {
                    foreach (MapActionModel item in action.Actions)
                    {
                        pathActionToCreate = new PathAction();
                        if (item.moveAction != null)
                        {
                            mapId = item.moveAction.MapId.Value;
                            pathActionToCreate.MapId = mapId;
                            MoveAction MoveActionToCreate = new MoveAction()
                            {
                                Order = item.Order,
                                ToBackBank = item.moveAction.ToBackBank,
                                ToGoBank = item.moveAction.ToGoBank,
                                CellId = item.moveAction.Cellid,
                                MapId = mapId
                            };
                            if (item.moveAction.Direction != null)
                                foreach (string direc in item.moveAction.Direction)
                                {
                                    if (MoveActionToCreate.Direction == null)
                                        MoveActionToCreate.Direction = new List<MovementDirectionEnum>();
                                    MoveActionToCreate.Direction.Add((MovementDirectionEnum)System.Enum.Parse(typeof(MovementDirectionEnum), direc.ToUpper()));
                                }

                            if (trajetDB.PathAction.Exists(o => o.MapId == mapId))
                            {
                                trajetDB.PathAction.Find(o => o.MapId == mapId).Actions.Add(MoveActionToCreate);
                            }
                            else
                            {
                                pathActionToCreate.Actions = new List<MapAction>();
                                pathActionToCreate.Actions.Add(MoveActionToCreate);
                                trajetDB.PathAction.Add(pathActionToCreate);
                            }
                        }
                        else if (item.BankAction != null)
                        {
                            mapId = item.BankAction.MapId.Value;
                            pathActionToCreate.MapId = mapId;
                            BankAction BankActionToCreate = new BankAction()
                            {
                                MapId = mapId,
                                Order = item.Order
                            };
                            if (trajetDB.PathAction.Exists(o => o.MapId == mapId))
                            {
                                trajetDB.PathAction.Find(o => o.MapId == mapId).Actions.Add(BankActionToCreate);
                            }
                            else
                            {
                                pathActionToCreate.Actions = new List<MapAction>();
                                pathActionToCreate.Actions.Add(BankActionToCreate);
                                trajetDB.PathAction.Add(pathActionToCreate);
                            }
                        }

                    }

                }
            }
            trajetDB.Zones = zones;
            PathMinDisplayed retourPath = new PathMinDisplayed()
            {
                IsCapture = trajetDB.IsCapture,
                Key = trajetDB.Key,
                Name = trajetDB.Name,
                Type = trajetDB.Type,
                UsedNumber = 0,
                Zones = trajetDB.Zones
            };

            await Database.Paths.DeleteOneAsync(o => o.Key == trajetDB.Key);
            await Database.Paths.InsertOneAsync(trajetDB);
            return retourPath;
        }

        [HttpPost]
        [Authorize]
        [Route("DeletePath")]
        public async Task<string> DeletePath(keymodel pathkey)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            TrajetDB trajettoDelete = Database.Paths.Find(o => o.Key == new Guid(pathkey.key) && o.Fk_User == new Guid(userId)).FirstOrDefault();
            try
            {
                await Database.Paths.DeleteOneAsync(o => o.Key == trajettoDelete.Key);
            }
            catch (Exception ex)
            {

                throw;
            }

            return JsonSerializer.Serialize(trajettoDelete.Name);
        }




        [HttpPost]
        [Authorize]
        [Route("CreatePath")]
        public async Task<PathMinDisplayed> CreatePath(PathModel path)
        {
            int mapId = 0;
            List<string> zones = new List<string>();
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            TrajetDB trajetDB = new TrajetDB()
            {
                Name = path.Name,
                Type = (TypePath)path.Type,
                GroupLevelMax = path.GroupLevelMax,
                GroupLevelMin = path.GroupLevelMin,
                CaptureItem = path.CaptureItem,
                Fk_User = new Guid(userId),
                MaxPod = path.MaxPod,
                MonsterQuantityMin = path.MonsterQuantityMin,
                MonsterQuantityMax = path.MonsterQuantityMax,
                LeaderBank = path.LeaderBank,
                IsCapture = path.IsCapture,
                ListRessource = path.ListRessource,
                Key = Guid.NewGuid()
            };
            foreach (var monstreLevel in path.MonsterLevel)
            {
                if (trajetDB.MonsterLevel == null)
                    trajetDB.MonsterLevel = new List<SpecificMonsterLevel>();

                trajetDB.MonsterLevel.Add(new SpecificMonsterLevel()
                {
                    MonsterId = monstreLevel.MonsterId,
                    MonsterLevelMax = monstreLevel.MonsterLevelmax,
                    MonsterLevelMin = monstreLevel.MonsterLevelMin
                });
            }
            foreach (var monstreQuantity in path.MonsterQuantity)
            {
                if (trajetDB.MonsterQuantity == null)
                    trajetDB.MonsterQuantity = new List<SpecificMonsterQuantity>();
                trajetDB.MonsterQuantity.Add(new SpecificMonsterQuantity()
                {
                    MonsterId = monstreQuantity.MonsterId,
                    MonsterQuantityMax = monstreQuantity.MonsterQuantityMax,
                    MontserQuantityMin = monstreQuantity.MonsterQuantityMin
                });
            }
            foreach (var monstreCapture in path.MonsterCapture)
            {
                if (trajetDB.MonsterCapture == null)
                    trajetDB.MonsterCapture = new List<CaptureMonsterQuantity>();
                trajetDB.MonsterCapture.Add(new CaptureMonsterQuantity()
                {
                    MonsterId = monstreCapture.MonsterId,
                    MonsterQuantity = monstreCapture.MonsterQuantity
                });
            }
            /* actions du trajet */
            trajetDB.PathAction = new List<PathAction>();
            foreach (PathActionModel action in path.PathAction)
            {
                PathAction pathActionToCreate = new PathAction();
                if (!ListBank.Contains(action.MapPos))
                {
                    MapDB map = Database.Maps.Find(o => o.Coordinate == ("[" + action.MapPos.Replace(';', ',') + "]")).First();

                    mapId = map.Key;
                    if (!zones.Contains(map.AreaName))
                        zones.Add(map.AreaName);

                    pathActionToCreate.MapId = mapId;
                    foreach (MapActionModel item in action.Actions)
                    {
                        if (pathActionToCreate.Actions == null)
                            pathActionToCreate.Actions = new List<MapAction>();

                        if (item.FightAction != null)
                        {
                            FightAction fightActionToCreate = new FightAction()
                            {
                                Order = item.Order,
                                IsAlone = item.FightAction.IsAlone
                            };
                            pathActionToCreate.Actions.Add(fightActionToCreate);
                        }
                        else if (item.GatherAction != null)
                        {
                            GatherAction GatherActionToCreate = new GatherAction()
                            {
                                Order = item.Order
                            };
                            pathActionToCreate.Actions.Add(GatherActionToCreate);
                        }
                        else if (item.InteractionAction != null)
                        {
                            InteractionAction InteractionActionToCreate = new InteractionAction()
                            {
                                Order = item.Order,
                                InteractiveIdObject = item.InteractionAction.InteractiveidObject,
                                InteractiveIdResponse = item.InteractionAction.InteractiveIdResponse,
                                ToBackBank = item.InteractionAction.ToBackBank,
                                ToGoBank = item.InteractionAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(InteractionActionToCreate);
                        }
                        else if (item.moveAction != null)
                        {
                            MoveAction MoveActionToCreate = new MoveAction()
                            {
                                Order = item.Order,
                                ToBackBank = item.moveAction.ToBackBank,
                                ToGoBank = item.moveAction.ToGoBank,
                                CellId = item.moveAction.Cellid
                            };
                            if (item.moveAction.Direction != null)
                                foreach (string direc in item.moveAction.Direction)
                                {
                                    if (MoveActionToCreate.Direction == null)
                                        MoveActionToCreate.Direction = new List<MovementDirectionEnum>();
                                    MoveActionToCreate.Direction.Add((MovementDirectionEnum)System.Enum.Parse(typeof(MovementDirectionEnum), direc.ToUpper()));
                                }
                            pathActionToCreate.Actions.Add(MoveActionToCreate);
                        }
                        else if (item.UseItemAction != null)
                        {
                            UseItemAction UseItemActionToCreate = new UseItemAction()
                            {
                                Order = item.Order,
                                ItemId = item.UseItemAction.ItemId,
                                ToBackBank = item.UseItemAction.ToBackBank,
                                ToGoBank = item.UseItemAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(UseItemActionToCreate);
                        }
                        else if (item.ZaapAction != null)
                        {
                            int zaapDestination = Database.Maps.Find(o => o.Coordinate == ("[" + action.MapPos.Replace(';', ',') + "]")).First().Key;

                            ZaapAction UseItemActionctionToCreate = new ZaapAction()
                            {
                                Order = item.Order,
                                Destination = zaapDestination,
                                ZaapId = item.ZaapAction.ZaapId,
                                ToBackBank = item.ZaapAction.ToBackBank,
                                ToGoBank = item.ZaapAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(UseItemActionctionToCreate);
                        }
                        else if (item.ZaapiAction != null)
                        {
                            int zaapiDestination = Database.Maps.Find(o => o.Coordinate == ("[" + action.MapPos.Replace(';', ',') + "]")).First().Key;
                            ZaapAction UseItemActionctionToCreate = new ZaapAction()
                            {
                                Order = item.Order,
                                Destination = zaapiDestination,
                                ZaapId = item.ZaapiAction.ZaapiId,
                                ToBackBank = item.ZaapiAction.ToBackBank,
                                ToGoBank = item.ZaapiAction.ToGoBank
                            };
                            pathActionToCreate.Actions.Add(UseItemActionctionToCreate);
                        }
                    }
                    trajetDB.PathAction.Add(pathActionToCreate);
                }
                else
                {
                    foreach (MapActionModel item in action.Actions)
                    {
                        pathActionToCreate = new PathAction();
                        if (item.moveAction != null)
                        {
                            mapId = item.moveAction.MapId.Value;
                            pathActionToCreate.MapId = mapId;
                            MoveAction MoveActionToCreate = new MoveAction()
                            {
                                Order = item.Order,
                                ToBackBank = item.moveAction.ToBackBank,
                                ToGoBank = item.moveAction.ToGoBank,
                                CellId = item.moveAction.Cellid,
                                MapId = mapId
                            };
                            if (item.moveAction.Direction != null)
                                foreach (string direc in item.moveAction.Direction)
                                {
                                    if (MoveActionToCreate.Direction == null)
                                        MoveActionToCreate.Direction = new List<MovementDirectionEnum>();
                                    MoveActionToCreate.Direction.Add((MovementDirectionEnum)System.Enum.Parse(typeof(MovementDirectionEnum), direc.ToUpper()));
                                }

                            if (trajetDB.PathAction.Exists(o => o.MapId == mapId))
                            {
                                trajetDB.PathAction.Find(o => o.MapId == mapId).Actions.Add(MoveActionToCreate);
                            }
                            else
                            {
                                pathActionToCreate.Actions = new List<MapAction>();
                                pathActionToCreate.Actions.Add(MoveActionToCreate);
                                trajetDB.PathAction.Add(pathActionToCreate);
                            }
                        }
                        else if (item.BankAction != null)
                        {
                            mapId = item.BankAction.MapId.Value;
                            pathActionToCreate.MapId = mapId;
                            BankAction BankActionToCreate = new BankAction()
                            {
                                MapId = mapId,
                                Order = item.Order
                            };
                            if (trajetDB.PathAction.Exists(o => o.MapId == mapId))
                            {
                                trajetDB.PathAction.Find(o => o.MapId == mapId).Actions.Add(BankActionToCreate);
                            }
                            else
                            {
                                pathActionToCreate.Actions = new List<MapAction>();
                                pathActionToCreate.Actions.Add(BankActionToCreate);
                                trajetDB.PathAction.Add(pathActionToCreate);
                            }
                        }

                    }

                }
            }
            trajetDB.Zones = zones;
            PathMinDisplayed retourPath = new PathMinDisplayed()
            {
                IsCapture = trajetDB.IsCapture,
                Key = trajetDB.Key,
                Name = trajetDB.Name,
                Type = trajetDB.Type,
                UsedNumber = 0,
                Zones = trajetDB.Zones
            };

            await Database.Paths.InsertOneAsync(trajetDB);
            return retourPath;
        }
    }
}