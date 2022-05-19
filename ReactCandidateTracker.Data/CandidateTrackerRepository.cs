using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Data
{
   public class CandidateTrackerRepository
    {
        private readonly string _connectionString;

        public CandidateTrackerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Candidate> GetPendingCandidates()
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }
        public List<Candidate> GetConfirmedCandidates()
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }
        public List<Candidate> GetRefusedCandidates()
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Refused).ToList();
        }
        public int GetPendingCount()
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).Count();
        }
        public int GetConfirmedCount()
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).Count();
        }
        public int GetRefusedCount()
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Refused).Count();
        }
        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateTrackerContext(_connectionString);
            candidate.Status = Status.Pending;
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.Where(c => c.Id==id).FirstOrDefault();
        }
        public void UpdateCandidate(Candidate candidate)
        {
            using var context = new CandidateTrackerContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"Update Candidates set status={candidate.Status}  where Id={candidate.Id}");
            context.SaveChanges();
        }
    }
}
