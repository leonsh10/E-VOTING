using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Biografia
{
    public class Create
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
                    var biografia = new Biografi
                    {
                        IDBiografi = request.IDBiografi,
                        Emri = request.Emri,
                        Mbiemri = request.Mbiemri,
                        Partia = request.Partia,
                        Biografia = request.Biografia,
                        nrMandateve = request.nrMandateve,

                    };
                    _context.Biografi.Add(biografia);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
