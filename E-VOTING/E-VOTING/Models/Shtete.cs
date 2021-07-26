using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace E_VOTING.Models
{
    public class Shtete
    {
        [Key]
        public int shtetet_id { get; set; }

        public string emri_shtetet { get; set; }

}
}
