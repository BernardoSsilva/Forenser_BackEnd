using ForenserBackend.Domain.entities;
using ForenserBackend.Domain.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;

namespace ForenserBackend.Infrastructure.repositories
{
    public class ServiceScheduleRepository : IServiceScheduleRepository
    {

        private readonly ForenserDbContext _dbContext;

        public ServiceScheduleRepository(ForenserDbContext context)
        {
            _dbContext = context;
        }
        public async Task<List<ServiceScheduleEntity>> GetAllScheduledServices()
        {
            return await _dbContext.ServiceSchedules.AsNoTracking().ToListAsync();
        }

        public async Task<ServiceScheduleEntity> GetServiceScheduleById(string scheduleId)
        {
            return await _dbContext.ServiceSchedules.AsNoTracking().FirstOrDefaultAsync(service => service.Id == scheduleId);
        }

        public async Task RegisterServiceSchedule(ServiceScheduleEntity service)
        {
            await _dbContext.AddAsync(service);
        }

        public async Task UnscheduleService(string scheduleId)
        {
            var scheduleToDelete = await _dbContext.ServiceSchedules.FirstOrDefaultAsync(schedule => schedule.Id == scheduleId);

            if (scheduleToDelete != null) {
                _dbContext.Remove(scheduleToDelete);
            }
            return;
        }

        public void UpdateSchedule(ServiceScheduleEntity serviceNewData)
        {
            _dbContext.Update(serviceNewData);
        }
    }
}
