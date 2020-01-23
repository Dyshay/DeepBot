using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.ControllersModel
{
    public class UserModel
    {
    }

    public class RegisterUserModel
    {
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }

    }
    public class LoginUserModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class SetProfilModel
    {
        public string UserId { get; set; }
        public string RoleId { get; set; }
    }
}
