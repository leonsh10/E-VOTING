using system;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E-VOTING.Models {
public class ApplicationUser : IdentityUser
{
	public string username { get; set; };
}

}