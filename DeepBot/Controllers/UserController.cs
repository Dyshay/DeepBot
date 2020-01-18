using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DeepBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        //private UserManager<User> _userManager;
        //private SignInManager<User> _signInManager;
        //private RoleManager<Roles> _roleManager;
        //private readonly ApplicationSettings _appSettings;
        ////private ContextDB _contextDB;

        //public UserController(UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<Roles> roleManager, IOptions<ApplicationSettings> appSettings, ContextDB contextDB)
        //{
        //    _userManager = userManager;
        //    _signInManager = signInManager;
        //    _appSettings = appSettings.Value;
        //    _contextDB = contextDB;
        //    _roleManager = roleManager;
        //}

    }
}