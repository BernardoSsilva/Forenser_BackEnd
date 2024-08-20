using ForenserBackend.Domain.Enums;

namespace ForenserBackend.Domain.entities
{
    public class OccurrenceEntity
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string UserId { get; set; }

        public required string OcourencyStreet { get; set; }
        public required string OcourencyCity { get; set; }

        public required Ufs OcourencyState { get; set; }

        public  string OcourencyDescription { get; set; } = string.Empty;

        public required DateTime OcourencyDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime LastUpdatedAt { get; set; } 

        public required OccurrenceType Type { get; set; }

        public List<string> ObjectList { get; set; } = [];

        public List<string> Vitms { get; set; } = [];
       
        public List<string> WitnessList { get; set; } = [];
        public List<string> ReferencePoints { get; set; } = [];

        public UserEntity User { get; set; }
        public ICollection<ImageEntity> Images { get; } 
        public ICollection<VehicleEntity> Vehicles { get;  } 

    }
}
