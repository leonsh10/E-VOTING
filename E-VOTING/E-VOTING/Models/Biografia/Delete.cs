using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Biografia
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int IDBiografi { get; set; }


            public string Emri { get; set; }

            public string Mbiemri { get; set; }

            public string Partia { get; set; }

            public string Biografia { get; set; }

            public int nrMandateve { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var biografia = await _context.Biografi.FindAsync(request.IDBiografi);

                    if (biografia == null)
                        throw new Exception("Could not find Activity.");


                    _context.Remove(biografia);


                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
