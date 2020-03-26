using DeepBot.Core.Hubs;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Enums;
using DeepBot.Data.Extensions;
using DeepBot.Data.Model;
using DeepBot.Data.Model.Script.Actions;
using DeepBot.Data.Utilities.Pathfinding;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DeepBot.Core.Managers
{
    public class ActionManager
    {
        public BlockingCollection<MapAction> ActionsQueue { get; set; } = new BlockingCollection<MapAction>();

        private Character Character { get; set; }
        private bool Running { get; set; } = false;

        private IHubContext<DeepTalk> _hubContext { get; set; }

        public ActionManager(Character character)
        {
            Character = character;
        }

        public void Start(IHubContext<DeepTalk> hubContext)
        {
            Debug.WriteLine("Start Actions Manager");
            _hubContext = hubContext;
            Running = true;
            Task.Factory.StartNew(() => Run());
        }

        public void Stop()
        {
            Debug.WriteLine("Stop Actions Manager");
            Running = false;
            ActionsQueue = new BlockingCollection<MapAction>();
        }

        private void Run()
        {
            while (Running)
            {
                Debug.WriteLine("Start taking action");
                var action = ActionsQueue.Take();
                Debug.WriteLine("End taking action");
                ProcessAction(action);
            }
        }

        private void ProcessAction(MapAction action)
        {
            Debug.WriteLine(action.GetType());
            if (action.GetType() == typeof(MoveAction))
            {
                ProcessMoveAction((MoveAction)action);
            }
        }

        private void ProcessMoveAction(MoveAction action)
        {
            Debug.WriteLine($"MAP {Character.Map.MapId}");
            var cells = Character.Map.GetTeleportCells(action.Direction[0]);
            _hubContext.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, $"Move from {Character.CellId} to {action.Direction[0]}", Character.TcpId), Character.TcpId);
            Debug.WriteLine($"Move from {Character.CellId} to {action.Direction[0]}");
            var path = PathFinder.Instance.GetPath(Character.Map, Character.CellId, cells[0], true);
            foreach (var node in path)
            {
                Debug.Write(node.Id + " ");
            }
            Debug.WriteLine("");
            Character.Map.PrintMap();
            Character.State = CharacterStateEnum.WALKING;
            _hubContext.SendPackage($"GA001{PathFinderUtils.Instance.GetPathfindingString(path)}", Character.TcpId);
        }
    }
}
