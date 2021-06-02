using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using E_VOTING.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace E_VOTING.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShtetetController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;


        public ShtetetController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
              select shtetet_id, emri_shtetet
                 from dbo.Shtetet
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
        public JsonResult Post(Shtetet sht)
        {
            string query = @"
              insert into dbo.Shtetet
               (emri_shtetet)
                values  
                    (
                    '" + sht.emri_shtetet + @"'
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
            return new JsonResult("Added Succesfully");
        }
        [HttpPut]
        public JsonResult Put(Shtetet sht)
        {
            string query = @"
               update dbo.Shtetet set
               emri_shtetet = '" + sht.emri_shtetet + @"'
                where shtetet_id = " + sht.shtetet_id + @"
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
            return new JsonResult("Updated Succesfully");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Shtetet
                    where shtetet_id = " + id + @" 
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

            return new JsonResult("Deleted Successfully");
        }

        
    }
}
