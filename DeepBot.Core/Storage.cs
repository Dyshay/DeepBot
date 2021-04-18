using DeepBot.Core.Hubs;
using DeepBot.Core.Managers;
using DeepBot.Data.Generic;
using DeepBot.Data.Model;
using System.Collections.Concurrent;

namespace DeepBot.Core
{
    public class Storage : Singleton<Storage>
    {
        private ConcurrentDictionary<int, Character> Characters { get; set; } = new ConcurrentDictionary<int, Character>();
        private ConcurrentDictionary<int, ScriptManager> ScriptManagers { get; set; } = new ConcurrentDictionary<int, ScriptManager>();

        public void AddCharacter(Character character)
        {
            Characters[character.Key] = character;
            ScriptManagers[character.Key] = new ScriptManager(character, new ActionManager(character));
        }

        public void RemoveCharacter(Character character)
        {
            Characters[character.Key] = null;
            ScriptManagers[character.Key] = null;
        }

        public Character GetCharacter(int characterId)
        {
            return Characters[characterId];
        }

        public ScriptManager GetScriptManagers(int characterId)
        {
            return ScriptManagers[characterId];
        }
    }
}