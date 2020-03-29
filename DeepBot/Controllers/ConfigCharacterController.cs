using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
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
    public class ConfigCharacterController : ControllerBase
    {
        private UserManager<UserDB> _userManager;
        private SignInManager<UserDB> _signInManager;
        private RoleManager<RoleDB> _roleManager;
        private readonly ApplicationSettings _appSettings;
        readonly IMongoCollection<UserDB> _userCollection;

        public ConfigCharacterController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
        }

        [HttpPost]
        [Authorize]
        [Route("UpdateConfigCharacter")]
        public async Task<IActionResult> UpdateConfigCharacter(ConfigCharacterDB config)
        {
            await Database.ConfigsCharacter.ReplaceOneAsync(o => o.Key == config.Key, config);
            return Ok(config);
        }
    }
}