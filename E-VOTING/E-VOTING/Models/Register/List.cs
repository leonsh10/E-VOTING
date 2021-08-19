using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Models.Register
{
    public class List
    {
        public class Query : IRequest<List<Votuesit>> { }

        public class Handler : IRequestHandler<Query, List<Votuesit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Votuesit>> Handle(Query request, CancellationToken cancellationToken)
            {
                var votuesi = await _context.Votuesit.ToListAsync();
                return votuesi;
            }
        }
    }
}
