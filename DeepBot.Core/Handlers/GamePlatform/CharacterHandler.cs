using DeepBot.Core.Extensions;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class CharacterHandler : IHandler
    {
        public object CharacterState { get; private set; }

        [Receiver("As")]
        public void StatsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.DeserializeCharacter(package);
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            var inventory = Database.Inventories.Find(i => i.Key == characterGame.Fk_Inventory).First();
            hub.DispatchToClient(new CharacteristicMessage(characterGame.Characteristic, inventory.Kamas, characterGame.AvailableCharactericsPts, tcpId), tcpId).Wait();
        }

        [Receiver("AN")]
        public void NewLevelHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            characterGame.Level = Convert.ToByte(package.Substring(2));
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
        }

        [Receiver("SL")]
        public void SpellsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            if (!package[2].Equals('o'))
            {
                foreach (var data in package.Substring(2, package.Length - 3).Split(';'))
                {
                    var split = data.Split('~');
                    var pair = new KeyValuePair<int, byte>(Convert.ToInt32(split[0]), Convert.ToByte(split[1]));
                    Debug.WriteLine("Add spell " + pair.Key);
                    var index = characterGame.Fk_Spells.FindIndex(spell => spell.Key == pair.Key);
                    if (index >= 0)
                        characterGame.Fk_Spells[index] = pair;
                    else
                        characterGame.Fk_Spells.Add(pair);
                }
            }
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            // TODO send hub spell msg
        }

        [Receiver("SUK")]
        public void SpellUpdateSuccess(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            var split = package.Substring(3).Split('~');
            var pair = new KeyValuePair<int, byte>(Convert.ToInt32(split[0]), Convert.ToByte(split[1]));
            characterGame.Fk_Spells[characterGame.Fk_Spells.FindIndex(spell => spell.Key == pair.Key)] = pair;
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            // TODO send hub spell msg
        }

        [Receiver("SUE")]
        public void SpellUpdateError(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            // TODO send hub spell msg
        }

        [Receiver("DV")]
        public void NPCDialogClosedHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager) { } // TODO

        [Receiver("EV")]
        public void OtherDialogClosedHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager) { } // TODO

        [Receiver("PIK")]
        public void GroupInvitationHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
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
        public void RegenTimerHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            int regenTime = Convert.ToInt32(package.Substring(3));
            // TODO
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Votre personnage récupère 1 pdv chaque {regenTime / 1000} secondes", tcpId), tcpId).Wait();
        }

        [Receiver("ILS")]
        public void CharacterRegenHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            int regen = Convert.ToInt32(package.Substring(3));
            user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Characteristic.VitalityActual += regen;
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Vous avez récupéré {regen} points de vie", tcpId), tcpId).Wait();
        }

        [Receiver("eUK")]
        public void PlayerEmoteHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            var split = package.Substring(3).Split('|');
            int playerId = Convert.ToInt32(split[0]), emoteId = Convert.ToInt32(split[1]);
            var character = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;

            if (character.Key != playerId)
                return;
            if (emoteId == 1 && character.State != CharacterStateEnum.HEALING)
                character.State = CharacterStateEnum.HEALING;
            else if (emoteId == 0 && character.State == CharacterStateEnum.HEALING)
                character.State = CharacterStateEnum.IDLE;

            manager.ReplaceOneAsync(c => c.Id == user.Id, user);
        }

        [Receiver("gJR")]
        public void GuildInvitationHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, package.Substring(3) + " t'invite à rejoindre sa guilde.", tcpId), tcpId).Wait();
            hub.SendPackage("gJE", tcpId);
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_INFORMATION, $"Invitation à rejoindre la guilde refusée", tcpId), tcpId).Wait();
        }
    }
}
