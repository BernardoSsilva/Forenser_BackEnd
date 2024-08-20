using ForenserBackend.Domain.RepositoriesInterfaces;
using ForenserBackend.Infrastructure.repositories;
using Microsoft.Extensions.DependencyInjection;

namespace ForenserBackend.Infrastructure
{
    public static class DependencyInjectionExtension
    {
        public static void AddInfrastrucuture(this IServiceCollection service)
        {
            AddRepositories(service);
        }

        private static void AddRepositories(IServiceCollection service)
        {
            service.AddScoped<IImageRepository, ImageRepository>();
            service.AddScoped<IUserRepository, UsersRepository>();
            service.AddScoped<IVehiclesRepository, VehiclesRepository>();
            service.AddScoped<IReportRepository, ReportRepository>();
            service.AddScoped<IOccurenceRepository, OccurenceRepository>();
            service.AddScoped<IServiceScheduleRepository, ServiceScheduleRepository>();
        }
    }
}
