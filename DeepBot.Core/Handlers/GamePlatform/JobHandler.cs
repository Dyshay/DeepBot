using DeepBot.Core.Extensions;
using DeepBot.Core.Hubs;
using DeepBot.Core.Network;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Enums;
using MongoDB.Driver;
using System;

namespace DeepBot.Core.Handlers.GamePlatform
{
    public class JobHandler //: IHandler
    {
        [Receiver("JS")]
        public void JobSkillsHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            Guid jobsId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Jobs;
            var jobsBook = Database.Jobs.Find(i => i.Key == jobsId).First();
            jobsBook.Jobs.DeserializeSkills(package.Substring(3));
            Database.Jobs.ReplaceOneAsync(i => i.Key == jobsId, jobsBook);
        }

        [Receiver("JX")]
        public void JobXpHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            Guid jobsId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Jobs;
            var jobsBook = Database.Jobs.Find(i => i.Key == jobsId).First();
            jobsBook.Jobs.DeserializeJobsXp(package.Substring(3));
            Database.Jobs.ReplaceOneAsync(i => i.Key == jobsId, jobsBook);
        }

        [Receiver("JN")]
        public void JobLevelUpHandler(DeepTalk hub, string package, UserDB user, string tcpId, IMongoCollection<UserDB> manager, DeepTalkService talkService)
        {
            Guid jobsId = user.Accounts.Find(c => c.TcpId == tcpId).CurrentCharacter.Fk_Jobs;
            var datas = package.Substring(2).Split('|');
            var jobsBook = Database.Jobs.Find(i => i.Key == jobsId).First();
            jobsBook.Jobs.Find(x => x.Id == (JobIdEnum)Convert.ToInt32(datas[0])).Level = Convert.ToInt32(datas[1]);
            Database.Jobs.ReplaceOneAsync(i => i.Key == jobsId, jobsBook);
        }
    }
}
