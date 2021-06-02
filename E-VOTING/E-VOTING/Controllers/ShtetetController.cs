using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace E_VOTING.Controllers
{
    public class ShtetetController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
