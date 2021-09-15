using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace E_VOTING.Models
{
    public class Biografi
    {
        [Key]
        public int IDBiografi { get; set; }

        public string Emri { get; set; }

        public string Mbiemri { get; set; }
        public string Partia { get; set; }
        public string Biografia { get; set; }

        public int nrMandateve { get; set; }

    }
}
