using DeepBot.Data.Model.Script.Actions;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DeepBot.Data.Model.Script
{
    public class ActionManager
    {
        public BlockingCollection<MapAction> ActionsQueue { get; set; } = new BlockingCollection<MapAction>();

        private Character Character { get; set; }
        private bool Running { get; set; } = false;

        public void Start(Character character)
        {
            Character = character;
            Running = true;
            Task.Factory.StartNew(() => Run());
        }

        public void Stop()
        {
            Running = false;
        }

        private void Run()
        {
            while (Running)
            {
                Debug.WriteLine("Start taking action");
                var action = ActionsQueue.Take();
                Debug.WriteLine("End taking action");
            }
        }
    }
}
