using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using E_VOTING.Models;
using E_VOTING.Models.Biografia;
using Microsoft.AspNetCore.Authorization;

namespace E_VOTING.Controller
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class BiografiController : ControllerBase
    {

        private readonly IMediator _mediator;
        public BiografiController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Biografi>>> List()
        {
            return await _mediator.Send(new List.Query());
        }


        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        {
            command.IDBiografi = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await _mediator.Send(new Delete.Command { IDBiografi = id });
        }

    }
}
