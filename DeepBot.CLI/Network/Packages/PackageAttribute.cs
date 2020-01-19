using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.CLI.Network.Packages
{
    public class PackageAttribute : Attribute
    {
        public string Packet;

        public PackageAttribute(string packet) => Packet = packet;
    }
}
