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
using E_VOTING.Models.Activities;
using FluentValidation.AspNetCore;
using E_VOTING.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using E_VOTING.Models;
using Microsoft.AspNetCore.Identity;

namespace E_VOTING
{
    public class Startup
    {
       

        public Startup(IConfiguration configuration)
        {
            _config = configuration;
           
        }

       

        public IConfiguration _config { get; }

       
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddRoles<IdentityRole>();

            services.AddDbContext<DataContext>(opt =>
           {
                   opt.UseSqlite(_config.GetConnectionString("DefaultConnection"));
               // opt.UseSqlServer(_config.GetConnectionString("IdentityConnection"));
               
       

           });
            

            services.AddControllers(opt =>
            {
                
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                opt.Filters.Add(new AuthorizeFilter(policy));
            })
                .AddFluentValidation(config =>
            {
                config.RegisterValidatorsFromAssemblyContaining<Create>();
            });


            
            services.AddApplicationServices(_config);
            services.AddIdentityServices(_config);



            

            services.AddControllers();
           services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v2", new OpenApiInfo { Title = "E_VOTING", Version = "v2" });
            });

            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod()
                 .AllowAnyHeader());
            });

            services.AddMediatR(typeof(List.Handler).Assembly);

            services.AddControllersWithViews()
                .AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
                .Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
                = new DefaultContractResolver());

           
        }
        

        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.SeedUsersAndRoles();
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v2/swagger.json", "E_VOTING v2"));
           }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider
                (Path.Combine(Directory.GetCurrentDirectory(), "Photos")),
                RequestPath = "/Photos"

            });
        }
    }
}
