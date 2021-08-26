using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Models.Homee
{
    public class List
    {
        public class Query : IRequest<List<Home>> { }

        public class Handler : IRequestHandler<Query, List<Home>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Home>> Handle(Query request, CancellationToken cancellationToken)
            {
                var home = await _context.Home.ToListAsync();
                return home;
            }
        }
    }
}
