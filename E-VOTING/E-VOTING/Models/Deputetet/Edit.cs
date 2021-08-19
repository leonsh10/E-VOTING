using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Deputetet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int deputetet_id { get; set; }

            public string Partia { get; set; }

            public string Emri { get; set; }

            public int? Numri { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var deputet = await _context.Deputet.FindAsync(request.deputetet_id);

                    if (deputet == null)
                        throw new Exception("Could not find Activity.");

                    deputet.Partia = request.Partia ?? deputet.Partia;
                    deputet.Emri = request.Emri ?? deputet.Emri;
                    deputet.Numri = request.Numri ?? deputet.Numri;

                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
