using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Register
{
    public class Delete
    {
        /*
        public class Command : IRequest
        {
            public int votuesi_id { get; set; }
            public string username { get; set; }

            public int nrLeternjoftimit { get; set; }

            public string email { get; set; }

            public string Password { get; set; }
            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var votuesi = await _context.Votuesit.FindAsync(request.votuesi_id);

                    if (votuesi == null)
                        throw new Exception("Could not find Activity.");


                    _context.Remove(votuesi);


                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
      
        }
    */
        }
}
