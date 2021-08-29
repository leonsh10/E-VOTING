using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Models.Votimet
{
    public class List
    {
        public class Query : IRequest<List<Votimi>> { }

        public class Handler : IRequestHandler<Query, List<Votimi>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Votimi>> Handle(Query request, CancellationToken cancellationToken)
            {
                var votimet = await _context.Votimi.ToListAsync();
                return votimet;
            }
        }
    }
}
