
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        //[RegularExpression("^[0-9]{10}$", ErrorMessage ="Duhet te kete 10 numra")]
        public string nrLeternjofimit { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        
        public string Password { get; set; }


    }
}
