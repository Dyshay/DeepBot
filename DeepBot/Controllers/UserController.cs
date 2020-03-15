using DeepBot.ControllersModel;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using DeepBot.Data.Model;
using Mailjet.Client;
using Mailjet.Client.Resources;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

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
        private List<GroupDB> _groups = Database.Groups.Find(FilterDefinition<GroupDB>.Empty).ToList();
        private List<ConfigCharacterDB> _configCharacter = Database.ConfigsCharacter.Find(FilterDefinition<ConfigCharacterDB>.Empty).ToList();
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
            var user = await _userManager.FindByIdAsync(userId);/*
            foreach (var item in user.Accounts)
            {
                if (item.CurrentCharacter != null)
                    item.CurrentCharacter.Config = _configCharacter.FirstOrDefault(o => o.Fk_Character == item.CurrentCharacter.Key);
            }*/
            return user;

        }
        [HttpGet]
        [AllowAnonymous]
        [Route("isActive")]
        public async Task<bool> isActive()
        {
            bool retour = false;
            string userId;
            UserDB user = null;
            if (User.Claims.Count() > 0)
            {
                if (User.Claims.First(c => c.Type == "UserID") != null)
                {
                    userId = User.Claims.First(c => c.Type == "UserID").Value;
                    user = await _userManager.FindByIdAsync(userId);
                }

            }
            if (user != null)
            {

                if (user.EmailConfirmed && user.isActive)
                {
                    retour = true;
                }
            }
            return retour;

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

        public async Task<bool> isAlreadyCreatedAsync(string mail, string identifiant)
        {
            UserDB userAlreadyCreated = null;
            userAlreadyCreated = await _userManager.FindByEmailAsync(mail);
            if (userAlreadyCreated == null)
                userAlreadyCreated = await _userManager.FindByNameAsync(identifiant);
            if (userAlreadyCreated == null)
            {
                return false;
            }
            else
                return true;
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("Register")]
        //POST :/api/User/Register
        public async Task<string> Register(RegisterUserModel model)
        {
            var apiKey = Guid.NewGuid();
            ApiKey apiKeyDebug = null;

#if DEBUG
            apiKeyDebug = new ApiKey()
            {
                CreationDate = DateTime.Now,
                EndDate = DateTime.Now.AddYears(1),
                Key = Guid.NewGuid(),
                MaxAccount = 99
            };
#endif


            var user = new UserDB()
            {
                UserName = model.UserName,
                Email = model.UserEmail,
                ApiKey = apiKeyDebug,
                Langue = model.Langue,
                isActive = true
            };
            bool alreadyCreated = await isAlreadyCreatedAsync(model.UserEmail, model.UserName);
            if (alreadyCreated)
            {
                return JsonSerializer.Serialize("AlreadyCreated");
            }

            var result = await _userManager.CreateAsync(user, model.UserPassword);

            if (result.Succeeded)
            {


                await _signInManager.SignInAsync(user, isPersistent: false);
                var IdentityUser = await _userManager.FindByNameAsync(user.UserName);

                var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                string confirmationLink = Url.Action("ConfirmEmail",
               "User", new
               {
                   userid = user.Id,
                   token = token
               },
                protocol: HttpContext.Request.Scheme);

                var isSent = await SendMailAsync(IdentityUser.Email, confirmationLink);

#if DEBUG

                if (!await _roleManager.RoleExistsAsync("Administrateur"))
                    await _roleManager.CreateAsync(new RoleDB("Administrateur"));
                await _userManager.AddToRoleAsync(IdentityUser, "Administrateur");
#else
                      if (!await _roleManager.RoleExistsAsync("Utilisateur"))
                await _roleManager.CreateAsync(new RoleDB("Utilisateur"));
                await _userManager.AddToRoleAsync(IdentityUser, "Utilisateur");
#endif

                if (isSent)
                    return JsonSerializer.Serialize("MailSent");
                else
                    return JsonSerializer.Serialize("MailFailed");
            }

            return JsonSerializer.Serialize("RegisterError");
        }

        public async Task<bool> SendMailAsync(string toAdresse, string link)
        {
            MailjetClient client = new MailjetClient("1d0df2423ce013e7f969f535fd60172a", "849fdd5b2eee3ec31fedb5e2e2f1a70b")
            {
                Version = ApiVersion.V3_1,
            };
            MailjetRequest request = new MailjetRequest
            {
                Resource = Send.Resource,
            }
            .Property(Send.Messages, new JArray {
                new JObject {
                 {"From", new JObject {
                  {"Email", "no-reply@deepbot.eu"},
                  {"Name", "DeepBot"}
                  }},
                 {"To", new JArray {
                  new JObject {
                   {"Email", toAdresse},
                   {"Name", toAdresse}
                   }
                  }},
                 {"Subject", "Confirmation de votre compte DeepBot"},
                 {"TextPart", "Veuillez confirmer votre compte en cliquant sur le lien suivant : "+ link},
                 {"HTMLPart", "<h3>Bienvenue sur DeepBot !</h3><br /> Pour valider votre inscription veuillez cliquer sur le lien suivant : <a href="+link+">Lien de confirmation</a>!</h3><br /> Retrouvez nous sur le  <a href=\"https://www.mailjet.com/\">Forum</a> ou  <a href=\"https://www.mailjet.com/\">Discord</a> <br /> Bon booting !"}                 }
                });
            MailjetResponse response = await client.PostAsync(request);
            if (response.IsSuccessStatusCode)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ConfirmEmail(string userid, string token)
        {
            UserDB user = _userManager.FindByIdAsync(userid).Result;
            IdentityResult result = _userManager.ConfirmEmailAsync(user, token).Result;
            if (result == IdentityResult.Success)
            {

                return Redirect("https://localhost/login/" + "succes");
            }
            else
            {
                return Redirect("https://localhost/login");
            }
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

                if (role != null && user.EmailConfirmed && user.isActive)
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
                                    new Claim("ApiKey", user.ApiKey.Key.ToString())
                                }),

                            Expires = DateTime.UtcNow.AddDays(7),
                            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                        };
                        var tokenHandler = new JwtSecurityTokenHandler();
                        var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                        var token = tokenHandler.WriteToken(securityToken);
                        return Ok(new { token });
                    }
                    catch (Exception)
                    {

                        throw;
                    }


                }
                else if (role == null)
                {
                    return NotFound(new { message = "AccountProblemRole" });
                }
                else if (!user.EmailConfirmed)
                {
                    return NotFound(new { message = "MailNotConfirmed" });
                }
                else if (!user.isActive)
                {
                    return NotFound(new { message = "AccountBlocked" });
                }
                else
                {
                    return NotFound(new { message = "ErrorUnknown" });
                }
                //DAL_Log.Write("User", "Login", user.UserName, "Connection reussie");
            }
            else
                return NotFound(new { message = "IdOrPwdIncorrect" });
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
            List<Guid> listGroupId = new List<Guid>();
            List<Guid> listAccount = new List<Guid>();
            SideNav sidenav = new SideNav();
            sidenav.items = new List<SideNavItem>();

            foreach (var account in user.Accounts)
            {
                if (account.CurrentCharacter != null)
                {
                    if (account.CurrentCharacter.Fk_Group != Guid.Empty && _groups.FindIndex(o => o.Key == account.CurrentCharacter.Fk_Group) != -1 && !listGroupId.Contains(account.CurrentCharacter.Fk_Group))
                        listGroupId.Add(account.CurrentCharacter.Fk_Group);
                    else if (account.CurrentCharacter.Fk_Group == Guid.Empty)
                    {
                        SideNavItem item = new SideNavItem()
                        {
                            Id = account.CurrentCharacter.Key.ToString(),
                            isGroup = false,
                            Name = account.CurrentCharacter.Name,
                            State = ControllersModel.Enum.SideNavState.CONNECTED
                        };
                        sidenav.items.Add(item);
                    }
                }
            }
            foreach (var groupId in listGroupId)
            {
                GroupDB group = _groups.Find(o => o.Key == groupId) as GroupDB;
                SideNavItem item = new SideNavItem()
                {
                    Id = groupId.ToString(),
                    Name = group.Name,
                    isGroup = true,
                    State = ControllersModel.Enum.SideNavState.CONNECTED,
                    Children = new List<SideNavItem>()
                };

                foreach (var account in user.Accounts)
                {
                    if (account.CurrentCharacter != null)
                    {
                        if (account.CurrentCharacter.Fk_Group == groupId)
                        {
                            SideNavItem ChildItem = new SideNavItem()
                            {
                                Id = account.CurrentCharacter.Key.ToString(),
                                isGroup = false,
                                Name = account.CurrentCharacter.Name,
                                State = ControllersModel.Enum.SideNavState.CONNECTED
                            };
                            item.Children.Add(ChildItem);
                        }
                    }
                }
                sidenav.items.Add(item);
            }

            return sidenav;
        }



    }
}