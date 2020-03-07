using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.Identity;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class ServerSelectionHandler : IHandler
    {
        [Receiver("HG")]
        public void WelcomeGame(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager) => hub.SendPackage($"AT{user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).GameTicket}", tcpId);

        [Receiver("ATK0")]
        public void ResultServerSelection(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.SendPackage("Ak0", tcpId);
            hub.SendPackage("AV", tcpId);
        }

        [Receiver("AV0")]
        public void GetListCharacters(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.SendPackage("Ages", tcpId);
            hub.SendPackage("AL", tcpId);
            hub.SendPackage("Af", tcpId);

        }

        [Receiver("ALK")]
        public void SelectCharacter(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var currentCharacter = user.Accounts.FirstOrDefault(c => c.TcpId == tcpId);
            string[] splittedData = package.Substring(3).Split('|');
            int count = 2;
            bool found = false;
            List<Character> characters = new List<Character>();
            //TODO STOCK INFO IN account.Character
            hub.CallCheck(tcpId).Wait();

            DeepTalk.IsScans.TryGetValue(tcpId, out bool isScan);

            while (count < splittedData.Length && !found)
            {
                string[] _loc11_ = splittedData[count].Split(';');
                int id = int.Parse(_loc11_[0]);
                string characterName = _loc11_[1];
                byte Level = byte.Parse(_loc11_[2]);
                short model = short.Parse(_loc11_[3]);

                if (isScan)
                    characters.Add(new Character() { BreedId = model, Key = id, Name = characterName, Level = Level });

                if (!isScan && currentCharacter != null)
                {
                    if(characterName.ToLower().Equals(currentCharacter.CurrentCharacter.Name.ToLower())) //TODO USE THE Name in cfg
                    {
                        hub.SendPackage($"AS{id}", tcpId, true);
                        hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Selection du personnage {characterName}", tcpId), tcpId).Wait();
                        found = true;
                    }
                }
                count++;
            }
            if (isScan)
            {
                user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).Characters = characters;
                manager.ReplaceOneAsync(c => c.Id == user.Id, user).Wait();
                hub.DispatchToClient(new CharactersMessage(characters, tcpId), tcpId).Wait();
                hub.DisconnectCli(tcpId, true).Wait();
            }
        }

        [Receiver("GCK")]
        public void ConnectPackageHandle(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager) => hub.SendPackage("GI", tcpId);

        [Receiver("ASK")]
        public void SelectedCharacterPackageHandle(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] splittedData = package.Substring(4).Split('|');
            
            Account account = user.Accounts.FirstOrDefault(c => c.TcpId == tcpId);
            account.CurrentCharacter.Key = int.Parse(splittedData[0]);
            account.CurrentCharacter.Name = splittedData[1];
            account.CurrentCharacter.Level = byte.Parse(splittedData[2]);
            account.CurrentCharacter.BreedId = byte.Parse(splittedData[3]);
            account.CurrentCharacter.Sex = byte.Parse(splittedData[4]);
            //account.CurrentCharacter.Inventory.getInventory(splittedData[9]);

            account.State = AccountState.IDLE;
            hub.SendPackage("GC1", tcpId);
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Personnage en ligne", tcpId), tcpId).Wait();
        }
    }
}
