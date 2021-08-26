using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Homee
{
    public class Create
    {
        public class Command : IRequest
        {
            public int idHome { get; set; }

            public string Titulli { get; set; }

            public string Content { get; set; }


            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var home = new Home
                    {
                        idHome = request.idHome,
                        Titulli = request.Titulli,
                        Content = request.Content,

                    };
                    _context.Home.Add(home);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
