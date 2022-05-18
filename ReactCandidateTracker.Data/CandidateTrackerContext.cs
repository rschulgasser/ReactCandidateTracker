using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Data
{
   public class CandidateTrackerContext : DbContext
    {
        private readonly string _connectionString;

        public CandidateTrackerContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Candidate> Candidates { get; set; }
      

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
