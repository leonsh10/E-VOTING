using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace E_VOTING.Models
{
    public class Partit
    {
        [Key]
        public int partit_id { get; set; }


        public string emri_Partis { get; set; }
    }
}
