using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace E_VOTING.Models
{
    public class Qyteti
    {
        [Key]
        public int IDQyteti { get; set; }

        public string Shteti { get; set; }

        public string EmriQytetit { get; set; }
    }
}
