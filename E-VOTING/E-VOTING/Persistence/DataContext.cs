using E_VOTING.Domain;
using E_VOTING.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {

        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Value> Values { get; set; }
        public DbSet<Activity> Activities { get; set; }

        public DbSet<Contact> Contact { get; set; }

        public DbSet<Partit> Partit { get; set; }

        public DbSet<Deputet> Deputet { get; set; }

       public DbSet<Votuesit> Votuesit { get; set; }

        public DbSet<Shtete> Shtete { get; set; }
    }
}
