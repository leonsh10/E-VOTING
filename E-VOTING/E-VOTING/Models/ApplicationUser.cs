using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string username { get; set; }
    }
}
