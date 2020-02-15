using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AspNetCore.Identity.Mongo.Model;
using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using DeepBot.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

namespace DeepBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private UserManager<UserDB> _userManager;
        private SignInManager<UserDB> _signInManager;
        private RoleManager<RoleDB> _roleManager;
        private readonly ApplicationSettings _appSettings;
        readonly IMongoCollection<UserDB> _userCollection;

        public UserController(UserManager<UserDB> userManager, RoleManager<RoleDB> roleManager, IOptions<ApplicationSettings> appSettings, SignInManager<UserDB> signInManager, IMongoCollection<UserDB> userCollection)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _userCollection = userCollection;
        }


        [HttpGet]
        [Authorize]
        [Route("getUser")]
        //GET : /api/User/getUser
        public async Task<Object> getUser()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);

            return user;

        }
        public async Task<UserDB> getUserDB()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);

            return user;

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit(UserDB user)
        {
            await _userCollection.ReplaceOneAsync(x => x.Id == user.Id, user);

            return null;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Delete(string id)
        {
            var user = await _userCollection.DeleteOneAsync(x => x.Id == id);
            return null;
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("Register")]
        //POST :/api/User/Register
        public async Task<IActionResult> Register(RegisterUserModel model)
        {
            var apiKey = Guid.NewGuid();
            ApiKey apiKeyDebug = null;

#if DEBUG
            apiKeyDebug = new ApiKey()
            {
                CreationDate = DateTime.Now,
                EndDate = DateTime.Now.AddYears(1),
                Id = Guid.NewGuid(),
                MaxAccount = 99
            };
#endif


            var user = new UserDB()
            {
                UserName = model.UserName,
                Email = model.UserEmail,
                ApiKey = apiKeyDebug,
                Langue = model.Langue
            };

            var result = await _userManager.CreateAsync(user, model.UserPassword);

            if (result.Succeeded)
            {

                await _signInManager.SignInAsync(user, isPersistent: false);
                var IdentityUser = await _userManager.FindByNameAsync(user.UserName);

#if DEBUG

                if (!await _roleManager.RoleExistsAsync("Administrateur"))
                    await _roleManager.CreateAsync(new RoleDB("Administrateur"));
                await _userManager.AddToRoleAsync(IdentityUser, "Administrateur");
#else
                      if (!await _roleManager.RoleExistsAsync("Utilisateur"))
                await _roleManager.CreateAsync(new RoleDB("Utilisateur"));
                await _userManager.AddToRoleAsync(IdentityUser, "Utilisateur");
#endif     
                /* ajouter envoi mail confirmation */
                return Ok("Register reussie");
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("Login")]
        //POST :/api/User/Login
        public async Task<IActionResult> Login(LoginUserModel model)
        {

            var user = await _userManager.FindByNameAsync(model.UserName);


            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var role = user.Roles.FirstOrDefault();


                IdentityOptions _options = new IdentityOptions();

                SecurityTokenDescriptor tokenDescriptor;

                if (role != null)
                {
                    try
                    {
                        tokenDescriptor = new SecurityTokenDescriptor
                        {
                            Subject = new ClaimsIdentity(new Claim[]
                                {
                                    new Claim(_options.ClaimsIdentity.UserNameClaimType, user.UserName),
                                    new Claim(_options.ClaimsIdentity.RoleClaimType, role),
                                    new Claim("UserID", user.Id),
                                    new Claim("ApiKey", user.ApiKey.Id.ToString())
                                }),

                            Expires = DateTime.UtcNow.AddDays(7),
                            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                        };
                    }
                    catch (Exception)
                    {

                        throw;
                    }


                }
                else
                {
                    tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new Claim[]
                   {
                        new Claim("UserID", user.Id),
                        new Claim("Username", user.UserName)
                   }),

                        Expires = DateTime.UtcNow.AddHours(168),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                    };
                }


                //DAL_Log.Write("User", "Login", user.UserName, "Connection reussie");

                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Identifiants ou mot de passe incorrect." });
        }

        [HttpPost]
        [Route("GetDefaultProfile")]
        public JsonResult GetDefaultProfile(string IdUser)
        {
            return null;
        }


        [HttpGet]
        [Authorize]
        [Route("CreateSideNavUser")]
        public async Task<SideNav> CreateSideNavUserAsync()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            List<Guid> listGroup = new List<Guid>();
            List<Guid> listAccount = new List<Guid>();
            SideNav sidenav = new SideNav();
            sidenav.items = new List<SideNavItem>();

            foreach (var account in user.Accounts)
            {
                if(account.CurrentCharacter != null)
                {
                    if (account.CurrentCharacter.Fk_Group != Guid.Empty && !listGroup.Contains(account.CurrentCharacter.Fk_Group))
                        listGroup.Add(account.CurrentCharacter.Fk_Group);
                    else if (account.CurrentCharacter.Fk_Group == Guid.Empty)
                    {
                        SideNavItem item = new SideNavItem()
                        {
                            Id = account.CurrentCharacter.Id.ToString(),
                            isGroup = false,
                            Name = account.CurrentCharacter.Name,
                            State = ControllersModel.Enum.SideNavState.CONNECTED
                        };
                        sidenav.items.Add(item);
                    }
                }
            }
            foreach (var groupId in listGroup)
            {
               GroupDB group= await Database.Groups.FindAsync(o => o.Id == groupId) as GroupDB;
                SideNavItem item = new SideNavItem()
                {
                    Id = groupId.ToString(),
                    Name = group.Name,
                    isGroup = true,
                    State = ControllersModel.Enum.SideNavState.CONNECTED,
                    Childrens = new List<SideNavItem>()
                };
                
                foreach (var account in user.Accounts)
                {
                    if(account.CurrentCharacter != null)
                    {
                        if(account.CurrentCharacter.Fk_Group == groupId)
                        {
                            SideNavItem ChildItem = new SideNavItem()
                            {
                                Id = account.CurrentCharacter.Id.ToString(),
                                isGroup = false,
                                Name = account.CurrentCharacter.Name,
                                State = ControllersModel.Enum.SideNavState.CONNECTED
                            };
                            item.Childrens.Add(ChildItem);
                        }
                    }
                }
                sidenav.items.Add(item);
            }

            return sidenav;
        }



    }
}