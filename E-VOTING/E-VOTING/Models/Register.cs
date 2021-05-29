using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Models
{
    public class Register
    {
        public int votuesi_id { get; set; }
        public string username { get; set; }
        [Required]
        public int nrLeternjoftimit { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string Password { get; set; }
        
    
    }
}
