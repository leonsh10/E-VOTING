using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Models
{
    public class Votimi
    {
        public int IDVota { get; set; }

        public string Partia { get; set; }

        public string DeputetiPare { get; set; }

        public string DeputetiDyte { get; set; }

        public string DeputetiTrete { get; set; }

        public string DeputetiKatert { get; set; }

        public string DeputetiPeste { get; set; }
    }
}
