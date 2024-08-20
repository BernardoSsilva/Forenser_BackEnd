using ForenserBackend.Domain.entities;
using ForenserBackend.Domain.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;

namespace ForenserBackend.Infrastructure.repositories
{
    public class VehiclesRepository : IVehiclesRepository
    {
        private readonly ForenserDbContext _dbContext;

        public VehiclesRepository(ForenserDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<VehicleEntity>> GetAllVehicles()
        {
            return await _dbContext.Vehicles.AsNoTracking().ToListAsync();
        }

        public async Task<VehicleEntity> GetVehicleById(string vehicleId)
        {
            return await _dbContext.Vehicles.AsNoTracking().FirstOrDefaultAsync(vehicle => vehicle.Id == vehicleId);
        }

        public async Task RegisterVehicle(VehicleEntity vehicle)
        {
            await _dbContext.AddAsync(vehicle);
        }

        public async Task UnregisterVehicle(string vehicleId)
        {
            var vehicleToDelete = await _dbContext.Vehicles.FirstOrDefaultAsync(vehicle => vehicle.Id == vehicleId);

            if (vehicleToDelete is null) {
                return;
            }

            _dbContext.Remove(vehicleToDelete);
        }

        public void UpdateVehicleData(VehicleEntity vehicle)
        {
           _dbContext.Update(vehicle);
        }
    }
}
