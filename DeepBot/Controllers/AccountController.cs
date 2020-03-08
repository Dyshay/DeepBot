using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DeepBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private UserManager<UserDB> _userManager;
        private SignInManager<UserDB> _signInManager;
        private RoleManager<RoleDB> _roleManager;
        private readonly ApplicationSettings _appSettings;
        readonly IMongoCollection<UserDB> _userCollection;
        private List<GroupDB> _groups = Database.Groups.Find(FilterDefinition<GroupDB>.Empty).ToList();
        private List<ConfigCharacterDB> _configCharacter = Database.ConfigsCharacter.Find(FilterDefinition<ConfigCharacterDB>.Empty).ToList();

        public AccountController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
        }

        [HttpGet]
        [Authorize]
        [Route("GetAccounts")]
        public async Task<List<Account>> GetAccountsAsync()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
                return user.Accounts;
            else
                return null;
        }

        [HttpPost]
        [Authorize]
        [Route("CreateAccount")]
        public async Task<IActionResult> CreateAccount([FromBody]AccountModel acc)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            var account = user.Accounts.Find(c => c.AccountName == acc.accountName);
            account.CurrentCharacter = account.Characters.Find(c => c.Key == acc.currentCharacterId);
            await CreateConfigAsync(account.CurrentCharacter.Key);
            await CreateInventoryAsync(account.CurrentCharacter.Key);
            await CreateJobsAsync(account.CurrentCharacter.Key);

            user.Accounts.RemoveAll(o => o.isScan);
            account.isScan = false;
            account.Key = Guid.NewGuid();
            account.CreationDate = DateTime.Now;
            account.ExpirationDateBan = null;
            account.EndAnakamaSubscribe = null;

            account.CurrentCharacter.Fk_Configuration = Database.ConfigsCharacter.Find(FilterDefinition<ConfigCharacterDB>.Empty).ToList().FirstOrDefault(o => o.Fk_Character == account.CurrentCharacter.Key).Key;
            account.CurrentCharacter.Fk_Inventory = Database.Inventories.Find(FilterDefinition<InventoryDB>.Empty).ToList().FirstOrDefault(o => o.Fk_Character == account.CurrentCharacter.Key).Key;
            account.CurrentCharacter.Fk_Jobs = Database.Jobs.Find(FilterDefinition<JobsDB>.Empty).ToList().FirstOrDefault(o => o.Fk_Character == account.CurrentCharacter.Key).Key;
            if (user.Accounts == null)
            {
                user.Accounts = new List<Account>() { account };
                try
                {
                    await _userCollection.ReplaceOneAsync(x => x.Id == user.Id, user);
                    return Ok(account);
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
            if (user.ApiKey.MaxAccount >= user.Accounts?.Count() + 1)
            {
                if (user.Accounts.Select(o => o.AccountName.ToUpper()).Contains(account.AccountName.ToUpper()) && user.Accounts.Select(o => o.AccountName.ToUpper()).Count() > 1)
                {
                    return ValidationProblem("AlreadyCreated");
                }
                else
                {
                    user.Accounts.Add(account);
                    try
                    {
                        await _userCollection.ReplaceOneAsync(x => x.Id == user.Id, user);
                        return Ok(account);
                    }
                    catch (Exception ex)
                    {
                        return null;
                    }
                }
            }
            else
                return ValidationProblem("MaxAccount");
        }

        [HttpPost]
        [Authorize]
        [Route("UpdateAccount")]
        public async Task<IActionResult> UpdateAccount(Account account)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            Account currentAcount = user.Accounts.FirstOrDefault(o => o.Key == account.Key);

            if (account.CurrentCharacter.Key != currentAcount.CurrentCharacter.Key && _configCharacter.FirstOrDefault(o => o.Fk_Character == account.CurrentCharacter.Key) == null)
            {
                await CreateConfigAsync(account.CurrentCharacter.Key);
                account.CurrentCharacter.Fk_Configuration = Database.ConfigsCharacter.Find(FilterDefinition<ConfigCharacterDB>.Empty).ToList().FirstOrDefault(o => o.Fk_Character == account.CurrentCharacter.Key).Key;
                await CreateInventoryAsync(account.CurrentCharacter.Key);
                account.CurrentCharacter.Fk_Inventory = Database.Inventories.Find(FilterDefinition<InventoryDB>.Empty).ToList().FirstOrDefault(o => o.Fk_Character == account.CurrentCharacter.Key).Key;
                await CreateJobsAsync(account.CurrentCharacter.Key);
                account.CurrentCharacter.Fk_Jobs = Database.Jobs.Find(FilterDefinition<JobsDB>.Empty).ToList().FirstOrDefault(o => o.Fk_Character == account.CurrentCharacter.Key).Key;
            }

            if ((account.CurrentCharacter.Key != currentAcount.CurrentCharacter.Key) || (account.CurrentCharacter.Fk_Group != currentAcount.CurrentCharacter.Fk_Group))
            {
                List<GroupDB> grouptoUpdate = _groups.Where(o => o.Fk_Followers.Contains(currentAcount.CurrentCharacter.Key)).ToList();
                foreach (var item in grouptoUpdate)
                {
                    item.Fk_Followers.Remove(currentAcount.CurrentCharacter.Key);
                }
            }
            var index = user.Accounts.FindIndex(o => o.Key == account.Key);
            user.Accounts[index] = account;
            await _userCollection.ReplaceOneAsync(x => x.Id == user.Id, user);

            return Ok(account);
        }

        [HttpPost]
        [Authorize]
        [Route("DeleteAccount")]
        public async Task<string> DeleteAccount(keymodel accountkey)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            Account accountToDelete = user.Accounts.FirstOrDefault(o => o.Key.ToString() == accountkey.key);

            user.Accounts.Remove(accountToDelete);
            try
            {
                await _userCollection.ReplaceOneAsync(x => x.Id == user.Id, user);
            }
            catch (Exception)
            {

                throw;
            }
            return JsonSerializer.Serialize(accountToDelete.AccountName);
        }

        public async Task CreateConfigAsync(int characterId)
        {
            ConfigCharacterDB config = new ConfigCharacterDB();
            config.Fk_Character = characterId;
            config.Fk_User = new Guid(User.Claims.First(c => c.Type == "UserID").Value);
            config.CreationDate = DateTime.Now;
            await Database.ConfigsCharacter.InsertOneAsync(config);
        }

        public async Task CreateInventoryAsync(int characterId)
        {
            InventoryDB inventory = new InventoryDB();
            inventory.Fk_Character = characterId;
            inventory.Fk_User = new Guid(User.Claims.First(c => c.Type == "UserID").Value);
            await Database.Inventories.InsertOneAsync(inventory);
        }

        public async Task CreateJobsAsync(int characterId)
        {
            JobsDB jobs = new JobsDB();
            jobs.Fk_Character = characterId;
            jobs.Fk_User = new Guid(User.Claims.First(c => c.Type == "UserID").Value);
            await Database.Jobs.InsertOneAsync(jobs);
        }
    }

    public class keymodel
    {
        public string key { get; set; }
    }

    public class AccountModel
    {
        public string accountName { get; set; }
        public int currentCharacterId { get; set; }
    }
}