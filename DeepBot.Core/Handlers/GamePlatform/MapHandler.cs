using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using DeepBot.Data.Model.MapComponent;
using DeepBot.Data.Model.MapComponent.Entities;
using DeepBot.Data.Utilities;
using DeepBot.Data.Utilities.Pathfinding;
using MongoDB.Driver;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class MapHandler : IHandler
    {
        [Receiver("GDM")]
        public void GetMapHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            if (package.Length == 21)
            {
                string[] _loc3 = package.Split('|');
                if (int.TryParse(_loc3[1], out int mapId))
                {
                    hub.SendPackage($"Gdm{mapId}", tcpId);
                    characterGame.Map = new Map(mapId);
                    hub.DispatchToClient(new MapMessage(characterGame.Map.CurrentMap.Cells, characterGame.Map.CurrentMap.Width,
                        characterGame.Map.CurrentMap.Height, characterGame.Map.CurrentMap.AreaName, characterGame.Map.CurrentMap.Coordinate, tcpId), tcpId).Wait();
                }
            }
            else
            {
                if (int.TryParse(package.Substring(4).Split('|')[0], out int mapId))
                {
                    characterGame.Map = new Map(mapId);
                    hub.DispatchToClient(new MapMessage(characterGame.Map.CurrentMap.Cells, characterGame.Map.CurrentMap.Width,
                        characterGame.Map.CurrentMap.Height, characterGame.Map.CurrentMap.AreaName, characterGame.Map.CurrentMap.Coordinate, tcpId), tcpId).Wait();
                    hub.SendPackage("GI", tcpId);
                }
            }
        }

        [Receiver("GV")]
        public void ChangeScreenHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.SendPackage("GC1", tcpId);
        }

        [Receiver("GDK")]
        public void ChangeMapHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            characterGame.State = CharacterStateEnum.IDLE;
        }

        [Receiver("GM")]
        public void EntityPopOrMoveHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            foreach (var playerSplit in package.Substring(3).Split('|'))
            {
                if (playerSplit.Length != 0)
                {
                    if (playerSplit.StartsWith('+'))
                    {
                        Debug.WriteLine(playerSplit.Substring(1));
                        var entity = EntityFactory.Instance.CreateEntity(characterGame.Map.MapId, playerSplit.Substring(1));
                        if (entity != null)
                        {
                            Debug.WriteLine($"Entity {entity.Id} pop or move on cell {entity.CellId}; curr character {entity.Id == characterGame.Key}");
                            characterGame.Map.Entities[entity.Id] = entity;
                            if (entity.Id == characterGame.Key)
                                characterGame.CellId = entity.CellId;
                        }
                    }
                    else if (playerSplit.StartsWith('-'))
                    {
                        characterGame.Map.Entities.Remove(Convert.ToInt32(playerSplit.Substring(1)));
                    }
                }
            }
        }

        [Receiver("GDF")]
        public void InteractiveStateUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            foreach (string interactive in package.Substring(4).Split('|'))
            {
                var datas = interactive.Split(';');
                var cellId = Convert.ToInt16(datas[0]);
                switch (byte.Parse(datas[2]))
                {
                    case 0:
                        characterGame.Map.Interactives[cellId].IsActive = false;
                        break;
                    case 1:
                        characterGame.Map.Interactives[cellId].IsActive = true;
                        break;
                }
            }
        }

        [Receiver("GA")]
        public async Task EntityActionHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            string[] splittedData = package.Substring(2).Split(';');
            int actionId = int.Parse(splittedData[1]);
            if (actionId > 0)
            {
                int entityId = int.Parse(splittedData[2]);
                switch (actionId)
                {
                    case 1: // Entity Move on map
                        int cellId = Hash.GetCellNum(splittedData[3].Substring(splittedData[3].Length - 2));
                        if (entityId == characterGame.Key)
                        {
                            var gttMovementType = splittedData[0];
                            var path = PathFinder.Instance.GetPath(characterGame.Map, characterGame.CellId, cellId, true);
                            await Task.Delay(PathFinderUtils.Instance.GetDeplacementTime(characterGame.Map, path));
                            await hub.SendPackage($"GKK{gttMovementType}", tcpId);
                            characterGame.CellId = cellId;
                        }
                        break;
                }
            }
        }

        [Receiver("GAF")]
        public void EndActionHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] idEndAction = package.Substring(3).Split('|');
            hub.SendPackage($"GKK{idEndAction[0]}", tcpId);
        }
    }
}
