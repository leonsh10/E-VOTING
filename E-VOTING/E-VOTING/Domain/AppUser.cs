using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Domain
{
    public class AppUser : IdentityUser
    {
        public string nrLeternjofimit
        { get; set; }

        //public string UserName
        //{ get; set; }

        //public string Email
        //{ get; set; }

    }
}
