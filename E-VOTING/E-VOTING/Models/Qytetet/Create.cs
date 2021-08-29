using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Qytetet
{
    public class Create
    {
        public class Command : IRequest
        {
            public int IDQyteti { get; set; }


            public string Shteti { get; set; }

            public string EmriQytetit { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var qytetet = new Qyteti
                    {
                        IDQyteti = request.IDQyteti,
                        Shteti = request.Shteti,
                        EmriQytetit = request.EmriQytetit,


                    };
                    _context.Qyteti.Add(qytetet);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
