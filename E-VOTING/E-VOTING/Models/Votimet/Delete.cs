using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Votimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int IDVota { get; set; }

            public string Partia { get; set; }

            public string DeputetiPare { get; set; }

            public string DeputetiDyte { get; set; }

            public string DeputetiTrete { get; set; }

            public string DeputetiKatert { get; set; }

            public string DeputetiPeste { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var votimet = await _context.Votimi.FindAsync(request.IDVota);

                    if (votimet == null)
                        throw new Exception("Could not find Activity.");


                    _context.Remove(votimet);


                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
