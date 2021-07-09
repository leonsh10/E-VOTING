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
    public class VotimiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;


        public VotimiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
              select IDVota, Partia, DeputetiPare, DeputetiDyte, DeputetiTrete, DeputetiKatert, DeputetiPeste
                 from dbo.Votimi
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
        public JsonResult Post(Votimi vot)
        {
            string query = @"
              insert into dbo.Votimi
               (Partia, DeputetiPare, DeputetiDyte, DeputetiTrete, DeputetiKatert, DeputetiPeste)
                values  
                    (
                    '" + vot.Partia + @"'
                    ,'" + vot.DeputetiPare + @"'
                    ,'" + vot.DeputetiDyte + @"'
                    ,'" + vot.DeputetiTrete + @"'
                    ,'" + vot.DeputetiKatert + @"'
                    ,'" + vot.DeputetiPeste + @"'
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
        public JsonResult Put(Votimi vot)
        {
            string query = @"
               update dbo.Votimi set
               Partia = '" + vot.Partia + @"'
               ,DeputetiPare = '" + vot.DeputetiPare + @"'
                ,DeputetiDyte = '" + vot.DeputetiDyte + @"'
                ,DeputetiTrete = '" + vot.DeputetiTrete + @"'
                ,DeputetiKatert = '" + vot.DeputetiKatert + @"'
                ,DeputetiPeste = '" + vot.DeputetiPeste + @"'
                where IDVota = " + vot.IDVota + @"
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
                    delete from dbo.Votimi
                    where IDVota = " + id + @" 
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


        [Route("GetAllPartite")]
        public JsonResult GetAllPartite()
        {
            string query = @"
                    select emri_Partis from dbo.Partit
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

        [Route("GetAllDeputetet")]
        public JsonResult GetAllDeputetet()
        {
            string query = @"
                    select deputetet_id from dbo.Deputetet
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
    }
}
