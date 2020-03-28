using System;
using System.Collections.Generic;

namespace DeepBot.Core.Hubs
{
    public interface IDeepTalkService
    {
        void AddTask(string tcpId, string cliId, List<string> packages, DateTime requestEnd);
    }
}