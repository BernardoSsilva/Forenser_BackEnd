using Microsoft.Extensions.DependencyInjection;

namespace ForenserBackend.Application
{
    public static class DependencyInjectionExtension
    {
        public static void AddApplication(this IServiceCollection service)
        {
            AddAutoMapper(service);
        }

        public static void AddAutoMapper(IServiceCollection service)
        {
            service.AddAutoMapper(typeof(AutoMapper));
        }
    }
}
