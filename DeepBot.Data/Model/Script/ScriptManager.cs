using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace DeepBot.Data.Model.Script
{
    public class ScriptManager
    {
        private Character Character { get; set; }
        private ScriptStateEnum State { get; set; } = ScriptStateEnum.MOVEMENT;
        private bool Running { get; set; } = false;
        private int CurrentMapId { get; set; }
        private int ActionNumber { get; set; }

        public ScriptManager(Character character)
        {
            Character = character;
        }

        public void StartStop()
        {
            if (Running)
            {
                Debug.WriteLine("Stop Script");
                Running = false;
                Character.OnStateChanged -= ProcessAction;
                Character.ActionManager.Stop();
            }
            else
            {
                Debug.WriteLine("Start Script");
                Running = true;
                Character.OnStateChanged += ProcessAction;
                Character.ActionManager.Start();
            }
        }

        private void ProcessAction()
        {
            if (Character.State != CharacterStateEnum.IDLE)
                return;

            CheckCharacter(Character);
        }

        private void CheckCharacter(Character character)
        {
            // Verify Death
            if (character.Characteristic.EnergyActual == 0)
            {
                State = ScriptStateEnum.PHENIX;
                return;
            }

            if (character.Config.MinLifeRegenerate > (character.Characteristic.VitalityActual / character.Characteristic.VitalityMax * 100))
            {
                
            }
        }

        private void VerifyFollowers()
        {

        }
    }
}
