using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Deputetet
{
    public class Create
    {
        public class Command : IRequest
        {
            public int deputetet_id { get; set; }

            public string Partia { get; set; }

            public string Emri { get; set; }

            public int Numri { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var deputetet = new Deputet
                    {
                      deputetet_id=request.deputetet_id,
                      Partia=request.Partia,
                      Emri=request.Emri,
                      Numri=request.Numri

                    };
                    _context.Deputet.Add(deputetet);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
