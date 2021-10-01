using E_VOTING.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Persistence
{
    public class Seed
    {
        /* public static async Task SeedRole(DataContext context, RoleManager<RoleManager> roleManager) {
             if (!roleManager.Roles.Any()) {
                 var roles = new List<RoleManager> {
                     new RoleManager{
                         Name = "Admin"
                     },
                     new RoleManager{
                         Name = "Basic"
                     }
                 };
                 foreach (var role in roles) {
                     await roleManager.CreateAsync(role);
                 }
                 context.RoleManager.AddRange(roles);
                 context.SaveChanges();
             }
         }
     }
 */
    }
}
