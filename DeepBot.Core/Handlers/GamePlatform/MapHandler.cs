using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model.MapComponent;
using MongoDB.Driver;
using System;
using System.Diagnostics;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class MapHandler : IHandler
    {
        [Receiver("GDM")]
        public void GetMapHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
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
            Storage.Instance.Characters[characterGame.Key] = characterGame;
        }

        [Receiver("GV")]
        public void ChangeScreenHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.SendPackage("GC1", tcpId);
        }

        [Receiver("GDK")]
        public void ChangeMapHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            // TODO notify map change
        }

        [Receiver("GM")]
        public void EntityPopOrMoveHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            foreach (var playerSplit in package.Substring(3).Split('|'))
            {
                if (playerSplit.Length != 0)
                {
                    var infos = playerSplit.Substring(1).Split(';');
                    if (playerSplit.StartsWith('+'))
                    {

                    }
                    else if (playerSplit.StartsWith('-'))
                    {
                        //Storage.Instance.Characters[characterGame.Key].Map.Entities.Remove(Convert.ToInt32(infos[0]));
                    }
                }
            }
        }

        [Receiver("GDF")]
        public void InteractiveStateUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame = Storage.Instance.Characters[characterGame.Key];
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
            Storage.Instance.Characters[characterGame.Key] = characterGame;
        }

        [Receiver("GA")]
        public void EntityActionHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            // TODO
        }

        [Receiver("GAF")]
        public void EndActionHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] idEndAction = package.Substring(3).Split('|');
            hub.SendPackage($"GKK{idEndAction[0]}", tcpId);
        }

    }
}
