using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace DeepBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IAController : ControllerBase
    {
        private UserManager<UserDB> _userManager;
        private SignInManager<UserDB> _signInManager;
        private RoleManager<RoleDB> _roleManager;
        private readonly ApplicationSettings _appSettings;
        readonly IMongoCollection<UserDB> _userCollection;
        public IAController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
        }

        [HttpPost]
        [Authorize]
        [Route("CreateIA")]
        public async Task<IADB> CreateIA(IADB IA)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            IA.FK_User = new Guid(userId);
            IA.Key = Guid.NewGuid();

            await Database.IA.InsertOneAsync(IA);
            return IA;
        }

        [HttpGet]
        [Authorize]
        [Route("GetAllIAs")]
        public List<IADB> GetAllIAs()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            List<IADB> iADBs = Database.IA.Find(o => o.FK_User == new Guid(userId)).ToList();
            return iADBs;
        }

        [HttpPost]
        [Authorize]
        [Route("UpdateIa")]
        public async Task<IADB> UpdateIa(IADB IA)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;

            await Database.IA.ReplaceOneAsync(o => o.Key == IA.Key && o.FK_User == new Guid(userId), IA);
            return IA;
        }

        [HttpPost]
        [Authorize]
        [Route("DeleteIa")]
        public async Task<string> DeleteIa(keymodel IAkey)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            IADB IAtoDelete = Database.IA.Find(o => o.Key == new Guid(IAkey.key) && o.FK_User == new Guid(userId)).FirstOrDefault();
            try
            {
                await Database.IA.DeleteOneAsync(o => o.Key == IAtoDelete.Key);
            }
            catch (Exception ex)
            {

                throw;
            }

            return JsonSerializer.Serialize(IAtoDelete.Name);
        }



    }
}