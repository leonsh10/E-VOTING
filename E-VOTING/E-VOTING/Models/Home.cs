using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Models
{
    public class Home
    {
        [Key]
        public int idHome { get; set; }

        public string Titulli { get; set; }

        public string Content { get; set; }
    }
}
