﻿using DeepBot.Core.Hubs;
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
        public void SelectCharacter(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] splittedData = package.Substring(3).Split('|');
            int count = 2;
            bool found = false;
            //TODO STOCK INFO IN account.Character
            while (count < splittedData.Length && !found)
            {
                string[] _loc11_ = splittedData[count].Split(';');
                int id = int.Parse(_loc11_[0]);
                string characterName = _loc11_[1];

                if (characterName.ToLower().Equals("")) //TODO USE THE Name in cfg
                {
                    hub.SendPackage($"AS{id}", tcpId, true);
                    hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Selection du personnage {characterName}", tcpId), tcpId).Wait();
                    found = true;
                }
                count++;
            }

        }

        [Receiver("GCK")]
        public void ConnectPackageHandle(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager) => hub.SendPackage("GI", tcpId);

        [Receiver("ASK")]
        public void SelectedCharacterPackageHandle(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] splittedData = package.Substring(4).Split('|');
            //TODO ADD Dispatch to AccountDB value

            user.Accounts.FirstOrDefault(c => c.TcpId == tcpId).State = AccountState.IDLE;
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Personnage en ligne", tcpId), tcpId).Wait();
        }
    }
}
