using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.FileProviders;
using E_VOTING.Persistence;
using Microsoft.EntityFrameworkCore;
using MediatR;
using FluentValidation.AspNetCore;
using System.Configuration;

namespace E_VOTING.Extensions
{
    public static class ApplicationServiceExtensions
    {
        //public static IConfiguration Configuration { get; }
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
            IConfiguration config)
        {
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlServer(config.GetConnectionString("IdentityConnection"));
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "E_VOTING", Version = "v1" });
            });

            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod()
                 .AllowAnyHeader());
            });

           // services.AddMediatR(typeof(List.Handler).Assembly);
           // services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            return services;
        }
    }
}
