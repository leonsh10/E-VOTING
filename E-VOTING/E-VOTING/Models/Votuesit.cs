﻿using Newtonsoft.Json;
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
        public int votuesi_id { get; set; }
        public string username { get; set; }
        
        public int nrLeternjoftimit { get; set; }
       
        public string email { get; set; }
        
        public string Password { get; set; }
        
    
    }
}