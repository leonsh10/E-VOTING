using E_VOTING.Domain;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_VOTING.Persistence.AppRolet;

namespace E_VOTING.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly RoleManager<IdentityRole> _roleManager;

        private readonly IMediator _mediator;
        public RoleController(RoleManager<IdentityRole> roleManager, IMediator mediator)
        {
            _roleManager = roleManager;
            _mediator = mediator;
        }

        

        [HttpGet]
        public async Task<ActionResult<List<IdentityRole>>> List()
        {
            return await _mediator.Send(new List.Query());
        }
        
    }
}
