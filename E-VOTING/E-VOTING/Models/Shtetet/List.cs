using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;


namespace E_VOTING.Models.Shtetet
{
    public class List
    {
        public class Query : IRequest<List<Shtete>> { }

        public class Handler : IRequestHandler<Query, List<Shtete>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Shtete>> Handle(Query request, CancellationToken cancellationToken)
            {
                var shtete = await _context.Shtete.ToListAsync();
                return shtete;
            }
        }
    }
}
