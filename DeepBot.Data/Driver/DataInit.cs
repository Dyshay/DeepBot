using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;

namespace DeepBot.Data.Database
{
    public static class DataInit
    {
        private static readonly string[] Roles = new string[] { "Administrateur", "Moderateur", "Utilisateur" };


        public static async Task SeedAndCreateRoles(IServiceProvider serviceProvider)
        {

            if (Driver.Database.CountRole() == 0)
            {
                var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                foreach (var item in Roles)
                {
                    await roleManager.CreateAsync(new IdentityRole(item));
                }
            }
        }
    }
}
