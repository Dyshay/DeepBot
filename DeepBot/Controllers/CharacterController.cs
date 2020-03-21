using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {


        private UserManager<UserDB> _userManager;
        private SignInManager<UserDB> _signInManager;
        private RoleManager<RoleDB> _roleManager;
        private readonly ApplicationSettings _appSettings;
        readonly IMongoCollection<UserDB> _userCollection;

        public CharacterController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
        }

        [HttpGet]
        [Authorize]
        [Route("GetAllCharacters")]
        public async Task<List<Character>> GetCharactersAsync()
        {
            List<Character> characters = new List<Character>();
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                foreach (var item in user.Accounts)
                {
                    if (item.Characters.Count > 1)
                        characters.AddRange(item.Characters);
                    else
                        characters.Add(item.Characters.First());
                }
                return characters;
            }
            return null;
        }

        [HttpGet]
        [Authorize]
        [Route("GetCharacter/{id}")]
        public async Task<Character> GetCharacterByIdAsync(int id)
        {
            Character character = new Character();
            string userId = User.Claims.First(c => c.Type == "UserID").Value;

            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                character = user.Accounts.Select(c => c.CurrentCharacter).FirstOrDefault(c => c.Key == id);

                if (character != null)
                    return character;

                return null;
            }

            return null;
        }

        [HttpPost]
        [Authorize]
        [Route("UpdateCharacter")]
        public async Task<Character> UpdateCharacter(Character character)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;

            var user = await _userManager.FindByIdAsync(userId);
            if(user != null)
            {
                foreach (var item in user.Accounts)
                {
                    if(item.CurrentCharacter.Key == character.Key)
                    {
                        item.CurrentCharacter = character;
                    }
                }
            }
            await _userCollection.ReplaceOneAsync(x => x.Id == user.Id, user);
            return character;
        }

        [HttpPost]
        [Authorize]
        [Route("StartAndStopBot")]
        public async Task<int> StartAndStopBot(CharacterKey key)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            string tcpId;
            foreach (var item in user.Accounts)
            {
                if (item.CurrentCharacter.Key == key.Key)
                    tcpId = item.TcpId;
            }

                return key.Key;
        }

            
    }
}