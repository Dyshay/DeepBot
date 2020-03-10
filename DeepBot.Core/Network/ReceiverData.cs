using System.Reflection;

namespace DeepBot.Core.Network
{
    public class ReceiverData
    {
        public object Instance { get; set; }
        public string HandlerName { get; set; }
        public MethodInfo Information { get; set; }

        public ReceiverData(object instance, string handlerName, MethodInfo information)
        {
            Instance = instance;
            HandlerName = handlerName;
            Information = information;
        }
    }
}
