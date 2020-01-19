using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace DeepBot.CLI.Network.Packages
{
    public class PackageData
    {
        public object Instance { get; set; }
        public string PackageName { get; set; }
        public MethodInfo Information { get; set; }

        public PackageData(object instance, string packageName, MethodInfo information)
        {
            Instance = instance;
            packageName = PackageName;
            Information = information;
        }
    }
}
