﻿using E_VOTING.Persistence;
using MediatR;
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

            public int? nrLeternjoftimit { get; set; }

            public string Email { get; set; }

         

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var votuesi = await _context.Votuesit.FindAsync(request.Id);

                    if (votuesi == null)
                        throw new Exception("Could not find Activity.");


                    // votuesi.Id = request.Id;
                  //  votuesi.Id = votuesi.Id;

                    votuesi.nrLeternjoftimit = request.nrLeternjoftimit ?? votuesi.nrLeternjoftimit;
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