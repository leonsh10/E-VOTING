using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Biografia
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int IDBiografi { get; set; }


            public string Emri { get; set; }

            public string Mbiemri { get; set; }

            public string Partia { get; set; }

            public string Biografia { get; set; }

            public int? nrMandateve { get; set; }

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

                    biografia.Emri = request.Emri ?? biografia.Emri;
                    biografia.Mbiemri = request.Mbiemri ?? biografia.Mbiemri;
                    biografia.Partia = request.Partia ?? biografia.Partia;
                    biografia.Biografia = request.Biografia ?? biografia.Biografia;
                    biografia.nrMandateve = request.nrMandateve ?? biografia.nrMandateve;



                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
