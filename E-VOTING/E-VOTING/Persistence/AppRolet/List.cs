using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using E_VOTING.Persistence;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace E_VOTING.Persistence.AppRolet
{
    public class List
    {
        public class Query : IRequest<List<IdentityRole>> { }

        public class Handler : IRequestHandler<Query, List<IdentityRole>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<IdentityRole>> Handle(Query request, CancellationToken cancellationToken)
            {
                var roles = await _context.IdentityRole.ToListAsync();
                return roles;
            }
        }
    }
}
