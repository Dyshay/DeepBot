using DeepBot.CLI.Model;

namespace DeepBot.CLI.Network.Packages
{
    public class PackageReceiver
    {
        public static async void Receive(string package, Account acc, short tcpId)
        {
            System.Console.WriteLine($"[Dofus] {package}");
            await acc.TalkingService.SendHandlePackageToServer(package, tcpId);
        }
    }
}
