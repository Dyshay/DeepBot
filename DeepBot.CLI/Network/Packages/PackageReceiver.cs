using DeepBot.CLI.Model;

namespace DeepBot.CLI.Network.Packages
{
    public class PackageReceiver
    {
        public static async void Receive(string package, Account acc)
        {
            await acc.TalkingService.SendHandlePackageToServer(package, acc.ApiKey);
        }
    }
}
