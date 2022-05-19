using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactCandidateTracker.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTracker : ControllerBase
    {
        private string _connectionString;

        public CandidateTracker(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getpendingcount")]
        public object GetPendingCount()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return new { count = repo.GetPendingCount() };
        }
        [HttpGet]
        [Route("getconfirmedcount")]
        public object GetConfirmedCount()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return new { count = repo.GetConfirmedCount() };
        }
        [HttpGet]
        [Route("getrefusedcount")]
        public object GetRefusedCount()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return new {count= repo.GetRefusedCount()};
        }
        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.AddCandidate(candidate);
        }
        [HttpGet]
        [Route("getpendingcandidates")]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetPendingCandidates();
        }
        [Route("getconfirmedcandidates")]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetConfirmedCandidates();
        }
        [Route("getrefusedcandidates")]
        public List<Candidate> GetRefusedCandidates()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetRefusedCandidates();
        }
        [HttpGet]
        [Route("getcandidatebyid")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpPost]
        [Route("addconfirmed")]
        public void AddConfirmed(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            candidate.Status =Status.Confirmed;
            repo.UpdateCandidate(candidate);
        }
        [HttpPost]
        [Route("addrefused")]
        public void AddRefused(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            candidate.Status = Status.Refused;
            repo.UpdateCandidate(candidate);
        }
    }
}
