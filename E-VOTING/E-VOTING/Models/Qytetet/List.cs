using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Models.Qytetet
{
    public class List
    {
        public class Query : IRequest<List<Qyteti>> { }

        public class Handler : IRequestHandler<Query, List<Qyteti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Qyteti>> Handle(Query request, CancellationToken cancellationToken)
            {
                var qytetet = await _context.Qyteti.ToListAsync();
                return qytetet;
            }
        }
    }
}
