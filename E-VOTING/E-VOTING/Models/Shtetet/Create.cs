using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Shtetet
{
    public class Create
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
                    var shtete = new Shtete
                    {
                        shtetet_id = request.shtetet_id,
                        emri_shtetet = request.emri_shtetet,
                       

                    };
                    _context.Shtete.Add(shtete);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
