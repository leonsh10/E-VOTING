using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace E_VOTING.Models
{
    public class Votuesit
    {

        [Key]
        public string Id { get; set; }
        public string UserName { get; set; }
        
        public string nrLeternjoftimit { get; set; }
       
        public string Email { get; set; }
        
        public string Password { get; set; }
        
    
    }
}
