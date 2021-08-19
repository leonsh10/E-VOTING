using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Models.Kontakti
{
    public class List
    {
        public class Query : IRequest<List<Contact>> { }

        public class Handler : IRequestHandler<Query, List<Contact>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Contact>> Handle(Query request, CancellationToken cancellationToken)
            {
                var Contact = await _context.Contact.ToListAsync();
                return Contact;
            }
        }
    }
}
