using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Models
{
    public class Deputet
    {
        [Key]
        public int deputetet_id { get; set; }

        public string Partia { get; set; }

        public string Emri { get; set; }

        public int Numri { get; set; }

    }
}
