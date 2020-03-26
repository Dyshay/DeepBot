using DeepBot.Core.Hubs;
using DeepBot.Core.Network.HubMessage.Messages;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace DeepBot.Core.Managers
{
    public class ScriptManager
    {
        private Character Character { get; set; }
        private ActionManager ActionManager { get; set; }
        private ScriptStateEnum State { get; set; } = ScriptStateEnum.MOVEMENT;
        private bool Running { get; set; } = false;
        private int CurrentMapId { get; set; }
        private int ActionNumber { get; set; }
        private IHubContext<DeepTalk> _hubContext { get; set; }

        public ScriptManager(Character character, ActionManager actionManager)
        {
            Character = character;
            ActionManager = actionManager;
        }

        public void StartStop(IHubContext<DeepTalk> hubContext)
        {
            if (Running)
            {
                _hubContext.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "Arrêt du script...", Character.TcpId), Character.TcpId);
                Debug.WriteLine("Stop Script");
                Running = false;
                Character.OnStateChanged -= ProcessAction;
                ActionManager.Stop();
            }
            else
            {
                _hubContext = hubContext;
                _hubContext.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "Lancement du script...", Character.TcpId), Character.TcpId);
                if (Character.Trajet == null)
                {
                    _hubContext.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, "Aucun script sélectionné", Character.TcpId), Character.TcpId);
                    return;
                }
                Debug.WriteLine("Start Script");
                Running = true;
                Character.OnStateChanged += ProcessAction;
                ActionManager.Start(hubContext);
                ProcessAction();
            }
        }

        private void ProcessAction()
        {
            if (Character.Map.MapId != CurrentMapId)
            {
                CurrentMapId = Character.Map.MapId;
                ActionNumber = 0;
            }
            else
                ActionNumber++;
            Debug.WriteLine($"Process action {ActionNumber} on map {CurrentMapId}");

            if (Character.State != CharacterStateEnum.IDLE)
                return;
            CheckCharacter(Character);
            if (Character.State != CharacterStateEnum.IDLE)
                return;

            var mapActions = Character.Trajet.PathAction.FirstOrDefault(o => o.MapId == CurrentMapId);
            if (mapActions == null)
            {
                _hubContext.DispatchToClient(new LogMessage(LogType.GAME_INFORMATION, $"Aucune action pour la carte {Character.Map.CurrentMap.Coordinate} id={Character.Map.MapId}", Character.TcpId), Character.TcpId);
                StartStop(null);
                return;
            }

            ActionManager.ActionsQueue.Add(mapActions.Actions[ActionNumber]);
        }

        private void CheckCharacter(Character character)
        {
            // Verify Death
            if (character.Characteristic.EnergyActual == 0)
            {
                State = ScriptStateEnum.PHENIX;
                return;
            }
        }

        private void VerifyFollowers()
        {

        }
    }
}
