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
        private List<GroupDB> _groups = Database.Groups.Find(FilterDefinition<GroupDB>.Empty).ToList();


        public GroupController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
        }


        [HttpGet]
        [Authorize]
        [Route("GetAllGroups")]
        public async Task<List<GroupDB>> GetAllGroups()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            List<GroupDB> ListGroup = _groups.Where(o => o.FK_User.ToString() == userId).ToList();
            var user = await _userManager.FindByIdAsync(userId);
            foreach (GroupDB item in ListGroup)
            {
                item.Followers = new List<Character>();
                foreach (var account in user.Accounts)
                {
                    if (account.CurrentCharacter != null)
                    {
                        if (account.CurrentCharacter.Key == item.Fk_Leader)
                            item.Leader = account.CurrentCharacter;
                        if (item.Fk_Followers.Contains(account.CurrentCharacter.Key))
                            item.Followers.Add(account.CurrentCharacter);
                    }

                }
            }
            return ListGroup;
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
            int level = 0;
            foreach (var charactersId in group.Fk_Followers)
            {
                foreach (Account account in user.Accounts)
                {
                    var character = account.Characters.FirstOrDefault(o => o.Key == charactersId);
                    
                    var principalChaarcter = account.CurrentCharacter;
                    if (character != null)
                    {
                        level += character.Level;
                        character.Fk_Group = group.Key;
                        principalChaarcter.Fk_Group = group.Key;
                    }
                }
            }
            var idLeader = group.Fk_Leader;
            foreach (var account in user.Accounts)
            {
                var leader = account.Characters.FirstOrDefault(o => o.Key == idLeader);
                
                if (leader != null)
                {
                    level += leader.Level;
                    leader.Fk_Group = group.Key;
                    account.CurrentCharacter.Fk_Group = group.Key;
                }
            }
            group.groupLevel = level;
            await _userManager.UpdateAsync(user);
            await Database.Groups.InsertOneAsync(group);

            return group;
        }

        [HttpPost]
        [Authorize]
        [Route("UpdateGroup")]
        public async Task<IActionResult> UpdateGroup(GroupDB group)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            List<int> listcharacterkeygroup = new List<int>();
            listcharacterkeygroup.Add(group.Fk_Leader);
            listcharacterkeygroup.AddRange(group.Fk_Followers);

            foreach (var account in user.Accounts)
            {
                if(account.CurrentCharacter.Fk_Group == group.Key && !listcharacterkeygroup.Contains(account.CurrentCharacter.Key))
                {
                    account.CurrentCharacter.Fk_Group = Guid.Empty;
                }
                else if (account.CurrentCharacter.Fk_Group != group.Key && listcharacterkeygroup.Contains(account.CurrentCharacter.Key))
                {
                    account.CurrentCharacter.Fk_Group = group.Key;
                }
            }
            await _userManager.UpdateAsync(user);
            await Database.Groups.ReplaceOneAsync(o => o.Key == group.Key, group);

            return Ok(group);
        }
    }
}