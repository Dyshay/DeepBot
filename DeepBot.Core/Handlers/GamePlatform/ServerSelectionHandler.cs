using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class ServerSelectionHandler : IHandler
    {
        [Receiver("HG")]
        public void WelcomeGame(DeepTalk hub, string package, Account account, string tcpId) => hub.SendPackage($"AT{account.GameTicket}", tcpId);

        [Receiver("ATK0")]
        public void ResultServerSelection(DeepTalk hub, string package, Account account, string tcpId)
        {
            hub.SendPackage("Ak0", tcpId);
            hub.SendPackage("AV", tcpId);
        }
        
        [Receiver("AV0")]
        public void GetListCharacters(DeepTalk hub, string package, Account account, string tcpId)
        {
            hub.SendPackage("Ages", tcpId);
            hub.SendPackage("AL", tcpId);
            hub.SendPackage("Af", tcpId);
        }

        [Receiver("ALK")]
        public void SelectCharacter(DeepTalk hub, string package, Account account, string tcpId)
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
        public void ConnectPackageHandle(DeepTalk hub, string package, Account account, string tcpId) => hub.SendPackage("GI", tcpId);

        [Receiver("ASK")]
        public void SelectedCharacterPackageHandle(DeepTalk hub, string package, Account account, string tcpId)
        {
            string[] splittedData = package.Substring(4).Split('|');
            //TODO ADD Dispatch to AccountDB value

            account.State = AccountState.IDLE;
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Personnage en ligne", tcpId), tcpId).Wait();
        }
    }
}
