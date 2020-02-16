using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model;
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
    public class GroupController : ControllerBase
    {
        private UserManager<UserDB> _userManager;
        private SignInManager<UserDB> _signInManager;
        private RoleManager<RoleDB> _roleManager;
        private readonly ApplicationSettings _appSettings;
        readonly IMongoCollection<UserDB> _userCollection;
        private  IMongoCollection<GroupDB> _group;
        

        public GroupController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
            _group = Database.Groups;
        }


        [HttpGet]
        [Authorize]
        [Route("GetAllGroups")]
        public  List<GroupDB> GetAllGroups()
        {

            string userId = User.Claims.First(c => c.Type == "UserID").Value;

            return _group.Find(o => o.FK_User.ToString() == userId).ToList();

        }

        [HttpPost]
        [Authorize]
        [Route("CreateGroup")]
        public async Task<GroupDB> CreateGroupAsync(GroupDB group)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            group.Key = Guid.NewGuid();
            group.FK_User = Guid.Parse(userId);

            foreach (var charactersId in group.Fk_Followers)
            {
                foreach (Account account in user.Accounts)
                {
                    var character = account.Characters.FirstOrDefault(o => o.Key == charactersId);
                   
                    if (character != null)
                    {
                        character.Fk_Group = group.Key;
                    } 
                }
            }
            await _userManager.UpdateAsync(user);
            await Database.Groups.InsertOneAsync(group);

            return null;
        }
    }
}