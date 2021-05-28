using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Models
{
    public class ApplicationUserModel
    {
        public string userName { get; set; }
        public int nrLeternjoftimit { get; set; }
        public string email { get; set; }
       
        public string Password { get; internal set; }
    }
}
