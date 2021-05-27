using system;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E-VOTING.Models
    {
    public class AuthenticationContext : IdentityDbContext
    {
         public AuthenticationContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<ApplicationUser> ApplicationUsers ( get; set;);
    }
}