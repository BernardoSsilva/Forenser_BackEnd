using ForenserBackend.Domain.entities;
using ForenserBackend.Domain.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;

namespace ForenserBackend.Infrastructure.repositories
{
    public class ReportRepository : IReportRepository
    {

        private readonly ForenserDbContext _context;

        public ReportRepository(ForenserDbContext context)
        {
            _context = context;
        }
        public async Task CreateNewReport(ReportEntity report)
        {
            await _context.AddAsync(report);
        }

        public async Task DeleteReport(string reportId)
        {
            var reportToDelete = await _context.Reports.FirstOrDefaultAsync(report => report.Id == reportId);
            if(reportToDelete is not null)
            {
                _context.Remove(reportToDelete);
            }
        }

        public async Task<List<ReportEntity>> GetAllReports()
        {
            return await _context.Reports.ToListAsync();
        }

        public async Task<ReportEntity> GetReportById(string reportId)
        {
            var report = await _context.Reports.FirstOrDefaultAsync(report => report.Id == reportId);
            if (report is null)
            {
                return null;
            }
            return report;
        }

        public void UpdateReport(ReportEntity reportNewData)
        {
            _context.Update(reportNewData);
        }
    }
}
