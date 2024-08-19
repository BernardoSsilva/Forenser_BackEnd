using ForenserBackend.Domain.entities;

namespace ForenserBackend.Domain.RepositoriesInterfaces
{
    public interface IVehiclesInterface
    {
        public Task RegisterVehicle(VehicleEntity vehicle);
        public Task UpdateVehicleData(VehicleEntity vehicle);
        public Task UnregisterVehicle(string vehicleId);

        public Task<VehicleEntity> GetVehicleById(string vehicleId);
        public Task<List<VehicleEntity>> GetAllVehicles();
    }
}
