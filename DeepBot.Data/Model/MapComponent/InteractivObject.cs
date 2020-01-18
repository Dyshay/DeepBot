using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;

namespace DeepBot.Data.Model.MapComponent
{
    public class InteractivObject
    {
        public static Dictionary<int, InteractivObject> InteractivesObjects { get; set; }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsUsable { get; set; } = true;

        public static void Initialize()
        {
            InteractivesObjects = new Dictionary<int, InteractivObject>();
            using Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("DeepBot.Resources.Data.Interactives.json");
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                InteractivesObjects = JsonSerializer.Deserialize<List<InteractivObject>>(result).ToDictionary(c => c.Id, c => c);
            }
        }

        public InteractivObject Clone()
        {
            return new InteractivObject()
            {
                Id = Id,
                Name = Name,
                IsUsable = IsUsable,
            };
        }
    }
}
