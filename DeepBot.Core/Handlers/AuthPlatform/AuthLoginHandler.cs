using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Database;
using DeepBot.Data.Enums;
using MongoDB.Driver;
using System.Text;

namespace DeepBot.Core.Handlers.AuthPlatform
{
    public class AuthLoginHandler : IHandler
    {
        [Receiver("AlEf")]
        public void WrongCredentialsError(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "Connexion rejetée. Nom de compte ou mot de passe incorrect.", tcpId), tcpId).Wait();
        }

        [Receiver("AlEa")]
        public void AlreadyConnectedError(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "Déjà connecté. Essayez encore une fois.", tcpId), tcpId).Wait();
        }

        [Receiver("AlEv")]
        public void WrongVersionError(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "La version de Dofus que vous avez installée n'est pas compatible avec ce serveur. Pour jouer, installez la nouvelle version . Le client DOFUS sera fermé.", tcpId), tcpId).Wait();
        }

        [Receiver("AlEb")]
        public void AccountBannedError(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "Connexion rejetée. Votre compte a été banni.", tcpId), tcpId).Wait();
        }

        [Receiver("AlEd")]
        public void AlreadyConnectingError(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, "Ce compte est déjà connecté à un serveur de jeu. Veuillez réessayer.", tcpId), tcpId).Wait();
        }

        [Receiver("AlEk")]
        public void AccountTempBannedError(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            string[] banInformations = package.Substring(3).Split('|');
            int days = int.Parse(banInformations[0].Substring(1)), hours = int.Parse(banInformations[1]), minutes = int.Parse(banInformations[2]);
            StringBuilder banInformationsMessage = new StringBuilder().Append("Votre compte sera invalide pendant ");

            if (days > 0)
                banInformationsMessage.Append(days + " jour(s)");
            if (hours > 0)
                banInformationsMessage.Append(hours + " heures");
            if (minutes > 0)
                banInformationsMessage.Append(minutes + " minutes");

            hub.DispatchToClient(new LogMessage(LogType.SYSTEM_ERROR, banInformationsMessage.ToString(), tcpId), tcpId).Wait();
        }
    }
}
