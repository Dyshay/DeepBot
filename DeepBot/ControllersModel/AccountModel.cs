using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeepBot.Data.Enums;
using DeepBot.Data.Model;
using static DeepBot.ControllersModel.CharacterModel;

namespace DeepBot.ControllersModel
{
    public class AccountModel
    {

        public class CreateAccountModel
        {
            public string AccountName { get; set; }
            public string Password { get; set; }
            public CreateCharacterModel CurrentCharacter { get; set; }
            public int ServerId { get; set; }
            public bool IsBan { get; set; }
            public List<CreateCharacterModel> Characters { get; set; }
            public AccountState State { get; set; }

        }
    }
}
