using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Models.Biografia
{
    public class List
    {
        public class Query : IRequest<List<Biografi>> { }

        public class Handler : IRequestHandler<Query, List<Biografi>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Biografi>> Handle(Query request, CancellationToken cancellationToken)
            {
                var biografia = await _context.Biografi.ToListAsync();
                return biografia;
            }
        }
    }
}
