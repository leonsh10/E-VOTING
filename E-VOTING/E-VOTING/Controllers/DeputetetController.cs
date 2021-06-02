using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Controllers
{
    public class DeputetetController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
