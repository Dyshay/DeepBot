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
using System.Text;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class GameErrorHandler : IHandler
    {
        [Receiver("M030")]
        public void StreamingErrorPacketHandle(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "Connexion rejetée. Vous n'avez pas pu vous authentifier pour ce serveur car votre connexion a expiré. Assurez-vous de couper les téléchargements, la musique ou les vidéos en continu pour améliorer la qualité et la vitesse de votre connexion.", tcpId), tcpId).Wait();
        }

        [Receiver("M031")]
        public void NetworkErrorPacketHandle(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "Connexion rejetée. Le serveur de jeu n'a pas reçu les informations d'authentification nécessaires après votre identification. Veuillez réessayer et, si le problème persiste, contactez votre administrateur réseau ou votre serveur d'accès Internet. C'est un problème de redirection dû à une mauvaise configuration DNS.", tcpId), tcpId).Wait();
        }

        [Receiver("M032")]
        public void FloodConnexionErrorPacketHandle(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "Pour éviter de déranger les autres joueurs, attendez %1 secondes avant de vous reconnecter.", tcpId), tcpId).Wait();
        }
    }
}
