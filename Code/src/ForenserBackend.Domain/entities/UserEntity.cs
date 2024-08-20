namespace ForenserBackend.Domain.entities
{
    public class UserEntity
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string UserName { get; set; }
        public required string CPF { get; set; }
        public required DateTime BornDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public required string UserEmail { get; set; }
        public required string Password { get; set; }
        public List<string> ContactPhonesNumbers { get; set; } = [];

        public ICollection<ImageEntity> Images { get; }
        public ICollection<OccurrenceEntity> Occurrences { get;} 

        public ICollection<ReportEntity> Reports { get; } 

        public ICollection<ServiceScheduleEntity> Schedules { get; } 

        public ICollection<VehicleEntity> Vehicles { get;} 



    }
}
