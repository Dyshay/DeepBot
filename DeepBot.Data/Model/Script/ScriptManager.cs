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

        public void Start(Character character)
        {
            Character = character;
            Running = true;
            Character.OnStateChanged += ProcessAction;

            character.ActionManager.Start(character);
        }

        private void ProcessAction()
        {
            if (Character.State != CharacterStateEnum.IDLE)
                return;

            CheckCharacter(Character);
        }

        public void Stop()
        {
            Running = false;
            Character.OnStateChanged -= ProcessAction;
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
