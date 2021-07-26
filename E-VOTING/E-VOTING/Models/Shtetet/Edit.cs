using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
namespace E_VOTING.Models.Shtetet
{
    public class Edit
    {
        public class Command : IRequest
        {

            public int shtetet_id { get; set; }

            public string emri_shtetet { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var shtete = await _context.Shtete.FindAsync(request.shtetet_id);

                    if (shtete == null)
                        throw new Exception("Could not find Activity.");

                
                    shtete.emri_shtetet = request.emri_shtetet ?? shtete.emri_shtetet;
                    

                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
