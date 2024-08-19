using ForenserBackend.Domain.entities;
using Microsoft.EntityFrameworkCore;

namespace ForenserBackend.Infrastructure
{
    public class ForenserDbContext:DbContext
    {
        public ForenserDbContext(DbContextOptions<ForenserDbContext> options) : base(options)
        {

        }
        public DbSet<ImageEntity> Images { get; set; }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<ReportEntity> Reports { get; set; }
        public DbSet<VehicleEntity> Vehicles { get; set; }
        public DbSet<OccurrenceEntity> Occurrences { get; set; }
        public DbSet<ServiceScheduleEntity> ServiceSchedules { get; set; }

    }
}
