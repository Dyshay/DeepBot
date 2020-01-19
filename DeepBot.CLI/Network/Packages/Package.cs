using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeepBot.CLI.Network.Packages
{
    public class Package
    {
        public string Date { get; set; }
        public string Type { get; set; }
        public string Content { get; set; }
        public string Handler { get; set; }

        public Package(string type, string package)
        {
            this.Date = DateTime.Now.ToString("HH:mm:ss");
            this.Type = type;
            this.Content = package;
            PackageReceiver.methods.FirstOrDefault(h => package.StartsWith(h.PackageName));
        }
    }
}
