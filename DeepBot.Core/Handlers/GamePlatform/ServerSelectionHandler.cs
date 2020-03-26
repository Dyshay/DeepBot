using DeepBot.Core.Extensions;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using DeepBot.Data.Extensions;
using DeepBot.Data.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class ServerSelectionHandler : IHandler
    {
        [Receiver("HG")]
        public void WelcomeGame(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager) => hub.SendPackage($"AT{user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).GameTicket}", tcpId);

        [Receiver("ATK0")]
        public void ResultServerSelection(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.SendPackage("Ak0", tcpId);
            hub.SendPackage("AV", tcpId);
        }

        [Receiver("AV0")]
        public void GetListCharacters(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var account = user.Accounts.Find(c => c.TcpId == tcpId);
            hub.SendPackage("Agfr", tcpId);
            hub.SendPackage($"Ai{account.ClientId}", tcpId);
            hub.SendPackage("AL", tcpId);
            hub.SendPackage("Af", tcpId);
        }

        [Receiver("ALK")]
        public void SelectCharacter(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var currentAccount = user.Accounts.FirstOrDefault(c => c.TcpId == tcpId);
            string[] splittedData = package.Substring(3).Split('|');
            int count = 2;
            bool found = false;
            List<Character> characters = new List<Character>();

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

                if (!isScan && currentAccount != null)
                {
                    if (characterName.ToLower().Equals(currentAccount.CurrentCharacter.Name.ToLower()))
                    {
                        hub.SendPackage($"AS{id}", tcpId, true);
                        hub.SendPackage($"Af", tcpId);
                        hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Selection du personnage {characterName}", tcpId), tcpId).Wait();
                        Debug.WriteLine("Add character " + currentAccount.CurrentCharacter.Key + " to memory");
                        Storage.Instance.AddCharacter(currentAccount.CurrentCharacter);
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
        public async Task SelectedCharacterPackageHandle(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            var inventory = Database.Inventories.Find(i => i.Key == characterGame.Fk_Inventory).First();

            string[] splittedData = package.Substring(4).Split('|');

            characterGame.Key = int.Parse(splittedData[0]);
            characterGame.Name = splittedData[1];
            characterGame.Level = byte.Parse(splittedData[2]);
            characterGame.BreedId = byte.Parse(splittedData[3]);
            characterGame.Sex = byte.Parse(splittedData[4]);
            inventory.Items.DeserializeItems(splittedData[9]);

            characterGame.State = CharacterStateEnum.IDLE;
            await Task.Delay(new Random().Next(150,450));
            hub.SendPackage("GC1", tcpId).Wait();
            Database.Inventories.ReplaceOneAsync(i => i.Key == characterGame.Fk_Inventory, inventory).Wait();
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Personnage en ligne", tcpId), tcpId).Wait();
        }
    }
}
