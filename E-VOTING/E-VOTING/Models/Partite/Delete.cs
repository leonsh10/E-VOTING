using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Partite
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int partit_id { get; set; }


            public string emri_Partis { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var partit = await _context.Partit.FindAsync(request.partit_id);

                    if (partit == null)
                        throw new Exception("Could not find Activity.");


                    _context.Remove(partit);


                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
