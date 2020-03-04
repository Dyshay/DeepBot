using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model.MapComponent;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class MapHandler
    {
        [Receiver("GDM")]
        public void GetMapHandler(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = account.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter
            if (package.Length == 21)
            {
                string[] _loc3 = package.Split('|');
                if (int.TryParse(_loc3[1], out int mapId))
                {
                    hub.SendPackage($"Gdm{mapId}", tcpId);
                    var map = Database.Maps.Find(c => c.Key == mapId).Single();
                    hub.DispatchToClient(new MapMessage(map.Cells, map.Width, map.Height, map.AreaName, map.Coordinate, tcpId), tcpId).Wait();
                    characterGame.Map = map;
                    manager.ReplaceOneAsync(c => c.Id == account.Id, account);
                }
            }
            else
            {
                if (int.TryParse(package.Substring(4).Split('|')[0], out int mapId))
                {
                    var map = Database.Maps.Find(c => c.Key == mapId).Single();
                    hub.DispatchToClient(new MapMessage(map.Cells, map.Width, map.Height, map.AreaName, map.Coordinate, tcpId), tcpId).Wait();
                    hub.SendPackage("GI", tcpId);
                    characterGame.Map = map;
                    manager.ReplaceOneAsync(c => c.Id == account.Id, account);
                }
            }
        }

    }
}
