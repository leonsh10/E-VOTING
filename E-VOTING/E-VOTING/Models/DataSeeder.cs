using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace E_VOTING.Models
{
    public static class DataSeeder
    {
        public static async void SeedUsersAndRoles(this IApplicationBuilder app)
        {
            var context = app.ApplicationServices.GetService<IdentityDbContext>();
            UserWithRoles[] usersWithRoles = {
                new UserWithRoles("Admin"),//user and optional roles and password you want to seed 
                new UserWithRoles("Basic"),
            
            };

            foreach (var userWithRoles in usersWithRoles)
            {
                foreach (string role in userWithRoles.Roles)
                    if (!context.Roles.Any(r => r.Name == role))
                    {
                        var roleStore = new RoleStore<IdentityRole>(context);
                        await roleStore.CreateAsync(new IdentityRole(role));
                    }
           //     var ExistingUser = context.Users.FirstOrDefault(p => p.Email == userWithRoles.User.Email);
                //if (ExistingUser == null) //the following syntax: !context.Users.FirstOrDefault(p => p.NormalizedUserName == userWithRoles.User.NormalizedUserName)) 
                                          //provokes execption:(ExecuteReader requires an open and available Connection.) 
             //       await new UserStore<IdentityUser>(context).CreateAsync(userWithRoles.User);
               // await app.AssignRoles(userWithRoles); //assign also to existing users.
            }
       
            //context.SaveChangesAsync();
        }

        //public static async Task<IdentityResult> AssignRoles(this IApplicationBuilder app, UserWithRoles uWR)
        //{
          //  UserManager<IdentityUser> _userManager = app.ApplicationServices.GetService<UserManager<IdentityUser>>();
            //IdentityUser user = await _userManager.FindByEmailAsync(uWR.User.Email);
          //  var result = await _userManager.AddToRolesAsync(user, uWR.Roles);
            //return result;
        //}
    }
    public class UserWithRoles
    {
        private IdentityUser user;
        public IdentityUser User { get { return user; } }
        public string[] Roles { get; set; }
        public UserWithRoles(string name, string[] roles = null, string password = "secret")
        {
            if (roles != null)
                Roles = roles;
            else
                Roles = new string[] { };
            user = new IdentityUser
            {
                Email = name + "@gmail.com",
                NormalizedEmail = name.ToUpper() + "@GMAIL.COM",
                UserName = name,
                NormalizedUserName = name.ToUpper(),
                PhoneNumber = "+1312341234",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true,
                SecurityStamp = Guid.NewGuid().ToString("D"),
            };
            user.PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(user, password);
        }
    }
}

