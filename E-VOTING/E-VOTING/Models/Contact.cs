using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Models
{
    public class Contact
    {
        [Key]
        public int id_contact { get; set; }

        public string emri { get; set; }

        public string email { get; set; }
        public string nrtelefonit { get; set; }

        public string mesazhi { get; set; }

    }
}
