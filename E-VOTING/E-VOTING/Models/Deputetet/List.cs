using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Models.Deputetet
{
    public class List
    {
        public class Query : IRequest<List<Deputet>> { }

        public class Handler : IRequestHandler<Query, List<Deputet>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Deputet>> Handle(Query request, CancellationToken cancellationToken)
            {
                var Deputet = await _context.Deputet.ToListAsync();
                return Deputet;
            }
        }
    }
}
