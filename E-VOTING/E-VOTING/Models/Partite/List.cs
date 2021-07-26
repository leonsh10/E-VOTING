using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;


namespace E_VOTING.Models.Partite
{
    public class List
    {
        public class Query : IRequest<List<Partit>> { }

        public class Handler : IRequestHandler<Query, List<Partit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Partit>> Handle(Query request, CancellationToken cancellationToken)
            {
                var partit = await _context.Partit.ToListAsync();
                return partit;
            }
        }
    }
}
