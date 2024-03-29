﻿using DeepBot.Core.Extensions;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class CharacterHandler : IHandler
    {
        public object CharacterState { get; private set; }

        [Receiver("As")]
        public void StatsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            characterGame.DeserializeCharacter(package);
            var inventory = Database.Inventories.Find(i => i.Key == characterGame.Fk_Inventory).First();
            hub.DispatchToClient(new CharacteristicMessage(characterGame.Characteristic, inventory.Kamas, characterGame.AvailableCharactericsPts, tcpId), tcpId).Wait();
        }

        [Receiver("AN")]
        public void NewLevelHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            characterGame.Level = Convert.ToByte(package.Substring(2));
        }

        [Receiver("SL")]
        public void SpellsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            if (!package[2].Equals('o'))
            {
                foreach (var data in package.Substring(2, package.Length - 3).Split(';'))
                {
                    var split = data.Split('~');
                    var pair = new KeyValuePair<int, byte>(Convert.ToInt32(split[0]), Convert.ToByte(split[1]));
                    var index = characterGame.Fk_Spells.FindIndex(spell => spell.Key == pair.Key);
                    if (index >= 0)
                        characterGame.Fk_Spells[index] = pair;
                    else
                        characterGame.Fk_Spells.Add(pair);
                }
            }
            // TODO send hub spell msg
        }

        [Receiver("SUK")]
        public void SpellUpdateSuccess(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            var split = package.Substring(3).Split('~');
            var pair = new KeyValuePair<int, byte>(Convert.ToInt32(split[0]), Convert.ToByte(split[1]));
            characterGame.Fk_Spells[characterGame.Fk_Spells.FindIndex(spell => spell.Key == pair.Key)] = pair;
            // TODO send hub spell msg
        }

        [Receiver("SUE")]
        public void SpellUpdateError(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            // TODO send hub spell msg
        }

        [Receiver("DV")]
        public void NPCDialogClosedHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService) { } // TODO

        [Receiver("EV")]
        public void OtherDialogClosedHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService) { } // TODO

        [Receiver("PIK")]
        public void GroupInvitationHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, package.Substring(3).Split('|')[0].ToLower() + " t'invite à rejoindre son groupe.", tcpId), tcpId).Wait();
            if (characterGame.HasGroup && package.Substring(3).Split('|')[0].ToLower() == characterGame.Group.Leader.Name.ToLower())
            {
                hub.SendPackage("PA", tcpId);
                hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Invitation acceptée.", tcpId), tcpId).Wait();
            }
            else
            {
                hub.SendPackage("PR", tcpId);
                hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, "Invitation refusée.", tcpId), tcpId).Wait();
            }
        }

        [Receiver("ILS")]
        public void RegenTimerHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            characterGame.RegenTime = Convert.ToInt32(package.Substring(3));
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Votre personnage récupère 1 pdv chaque {characterGame.RegenTime / 1000} secondes", tcpId), tcpId).Wait();
        }

        [Receiver("ILS")]
        public void CharacterRegenHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            int regen = Convert.ToInt32(package.Substring(3));
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);
            characterGame.Characteristic.VitalityActual += regen;
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Vous avez récupéré {regen} points de vie", tcpId), tcpId).Wait();
        }

        [Receiver("eUK")]
        public void PlayerEmoteHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            var characterGame = Storage.Instance.GetCharacter(user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Key);

            var split = package.Substring(3).Split('|');
            int playerId = Convert.ToInt32(split[0]), emoteId = Convert.ToInt32(split[1]);
            if (characterGame.Key != playerId)
                return;
            if (emoteId == 1 && characterGame.State != CharacterStateEnum.HEALING)
                characterGame.State = CharacterStateEnum.HEALING;
            else if (emoteId == 0 && characterGame.State == CharacterStateEnum.HEALING)
                characterGame.State = CharacterStateEnum.IDLE;
        }

        [Receiver("gJR")]
        public void GuildInvitationHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, package.Substring(3) + " t'invite à rejoindre sa guilde.", tcpId), tcpId).Wait();
            hub.SendPackage("gJE", tcpId);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Invitation à rejoindre la guilde refusée", tcpId), tcpId).Wait();
        }
    }
}
