using DeepBot.Data.Enums;

namespace DeepBot.Data.Model.GameServer
{
    public class Server
    {
        public int Id { get; set; } = 0;
        public string Name { get; set; } = "Undefined";
        public ServerState State { get; set; } = ServerState.OFFLINE;
    }
}
