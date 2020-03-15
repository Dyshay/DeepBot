using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Data.Database;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class ChatHandler : IHandler
    {
        [Receiver("cC")]
        public void ChannelUpdateHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager)
        {
            /*var characterGame = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter;
            if (package.Substring(2).StartsWith("+"))
            {
                foreach (var chan in package.Substring(3).ToCharArray())
                {
                    if (!characterGame.Channels.Contains(chan))
                        characterGame.Channels += chan;
                }
            } 
            else
            {
                foreach (var chan in package.Substring(3).ToCharArray())
                {
                    if (!characterGame.Channels.Contains(chan))
                        characterGame.Channels.Replace(chan.ToString(), "");
                }
            }
            manager.ReplaceOneAsync(c => c.Id == user.Id, user);*/
        }

        [Receiver("cMK")]
        public void MessageHandler(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {

        }
    }
}
