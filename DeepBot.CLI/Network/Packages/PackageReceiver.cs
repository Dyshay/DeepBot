using DeepBot.CLI.Model;

namespace DeepBot.CLI.Network.Packages
{
    public class PackageReceiver
    {
        public static async void Receive(string package, Account acc, short tcpId)
        {
            await acc.TalkingService.SendHandlePackageToServer(package, tcpId);
        }
    }
}
