using E_VOTING.Domain;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.DTOs
{
    public class EditUser
    {
        public class Command : IRequest
        {
            public string Id { get; set; }
            public string UserName { get; set; }

            public string nrLeternjofimit { get; set; }

            public string Email { get; set; }

         

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;
               //private readonly UserManager<AppUser> _userManager;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    // var votuesi = await _userManager.FindByIdAsync();
                    var votuesi = await _context.AppUser.FindAsync(request.Id);
                    if (votuesi == null)
                        throw new Exception("Could not find Activity.");


                    // votuesi.Id = request.Id;
                    //  votuesi.Id = votuesi.Id;

                    votuesi.nrLeternjofimit = request.nrLeternjofimit ?? votuesi.nrLeternjofimit;
                    //votuesi.Id = request.Id ?? request.Id;
                    votuesi.UserName = request.UserName ?? votuesi.UserName;
                    votuesi.Email = request.Email ?? votuesi.Email;
                    


                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
