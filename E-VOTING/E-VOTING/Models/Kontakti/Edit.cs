using E_VOTING.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace E_VOTING.Models.Kontakti
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int id_contact { get; set; }

            public string emri { get; set; }

            public string email { get; set; }
            public string nrtelefonit { get; set; }

            public string mesazhi { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;

                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var contact = await _context.Contact.FindAsync(request.id_contact);

                    if (contact == null)
                        throw new Exception("Could not find Activity.");

                    contact.emri = request.emri ?? contact.emri;
                    contact.email = request.email ?? contact.email;
                    contact.nrtelefonit = request.emri ?? contact.nrtelefonit;
                    contact.mesazhi = request.emri ?? contact.mesazhi;

                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;
                    throw new Exception("Problem saving changes.");
                }
            }
        }
    }
}
