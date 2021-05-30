using E_VOTING.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace E_VOTING.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public RegisterController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select votuesi_id, username,nrLeternjoftimit, email,Password               
                    from dbo.Login
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("IdentityConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Register reg)
        {
            string query = @"
                    insert into dbo.Login 
                    (username,nrLeternjoftimit,email,Password)
                    values 
                    (
                    '" + reg.username + @"'
                    ,'" + reg.nrLeternjoftimit + @"'
                    ,'" + reg.email + @"'
                    ,'" + reg.Password + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("IdentityConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Jeni regjistruar me sukses.");
        }
    }
}
