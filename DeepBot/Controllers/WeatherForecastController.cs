using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeepBot.Data.Database;
using DeepBot.Data.Driver;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DeepBot.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var account = new AccountDB();



            
            account.AnkamaNickName = "testNickName";
            account.AnkamaPseudo = "testAnkamaPseudo";
            account.ConnectedHour = TimeSpan.FromSeconds(3600);
            account.MaxCharacter = 16;
            account.Username = "testUserName";
            account.Password = "testPwd";

            var character = new CharacterDB(account);
            character.AccountId = account.AccountId;
            character.CharacterAccount = account;
            character.CharacterName = " testcharactername";
            character.CharacterKamas = 15000;

            account.Insert();
            character.Insert();

            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
