using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model.MapComponent;
using MongoDB.Driver;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class MapHandler
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
        }

    }
}
