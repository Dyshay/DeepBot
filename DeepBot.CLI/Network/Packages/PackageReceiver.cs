using DeepBot.CLI.Model;
using DeepBot.CLI.Network.Frames;
using DeepBot.CLI.Network.Tcp;
using DeepBot.CLI.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DeepBot.CLI.Network.Packages
{
    public class PackageReceiver
    {
        public static readonly List<PackageData> methods = new List<PackageData>();

        public static void Initialize()
        {
            Assembly asm = typeof(IFrame).GetTypeInfo().Assembly;

            foreach (var type in asm.GetTypes().SelectMany(x => x.GetMethods()).Where(m => m.GetCustomAttributes(typeof(PackageAttribute), false).Length > 0))
            {
                PackageAttribute attribute = type.GetCustomAttributes(typeof(PackageAttribute), true)[0] as PackageAttribute;
                Type typeValue = Type.GetType(type.DeclaringType.FullName);

                object instance = Activator.CreateInstance(typeValue, null);
                methods.Add(new PackageData(instance, attribute.Packet, type));
            }
        }

        public static async void Receive(TcpClient client, string package, Account acc)
        {
            PackageData method = methods.Find(m => package.StartsWith(m.PackageName));

            if (method != null)
            {
                method.Information.Invoke(method.Instance, new object[2] { client, package });
                string value = await acc.TalkingService.SendHandlePackageToServer(package, acc.ApiKey);
            }
        }
    }
}
