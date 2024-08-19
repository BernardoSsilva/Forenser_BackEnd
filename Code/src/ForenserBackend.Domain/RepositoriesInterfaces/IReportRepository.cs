using ForenserBackend.Domain.entities;

namespace ForenserBackend.Domain.RepositoriesInterfaces
{
    public interface IReportRepository
    {

        public Task CreateNewReport(ReportEntity report);
        public Task DeleteReport(string reportId);
        public Task UpdateReport(ReportEntity reportNewData);

        public Task<ReportEntity> GetReportById(string reportId);
        public Task<List<ReportEntity>> GetAllReports();
    }
}
