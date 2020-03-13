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
        public void ChannelUpdateHandler(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {
            if (package.Substring(2).StartsWith("+"))
            {

            } 
            else
            {

            }
        }

        [Receiver("cMK")]
        public void MessageHandler(DeepTalk hub, string package, UserDB account, string tcpId, IMongoCollection<UserDB> manager)
        {

        }
    }
}
