using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Votimet
{
    public class Edit
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

                    votimet.Partia = request.Partia ?? votimet.Partia;
                    votimet.DeputetiPare = request.DeputetiPare ?? votimet.DeputetiPare;
                    votimet.DeputetiDyte = request.DeputetiDyte ?? votimet.DeputetiDyte;
                    votimet.DeputetiTrete = request.DeputetiTrete ?? votimet.DeputetiTrete;
                    votimet.DeputetiKatert = request.DeputetiKatert ?? votimet.DeputetiKatert;
                    votimet.DeputetiPeste = request.DeputetiPeste ?? votimet.DeputetiPeste;


                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
