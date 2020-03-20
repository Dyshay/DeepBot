using DeepBot.Data.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Model.Script
{
    public class ScriptManager
    {
        private Character Character { get; set; }
        private bool Running { get; set; } = false;
        private int CurrentMapId { get; set; }
        private int ActionNumber { get; set; }

        public void Start(Character character)
        {
            Character = character;
            Running = true;

            Character.OnStateChanged += ProcessAction;
        }

        private void ProcessAction()
        {
            switch (Character.State)
            {
                case CharacterStateEnum.IDLE:

                    break;
            }
        }

        public void Stop()
        {
            Running = false;
            Character.OnStateChanged -= ProcessAction;
        }
    }
}
