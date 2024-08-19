﻿using ForenserBackend.Domain.Enums;

namespace ForenserBackend.Domain.entities
{
    public class ReportEntity
    {
        public string Id { get; set; } = Guid.NewGuid().ToString(); 
        public required string Title { get; set; }
        public required string Description { get; set; }
        public string PostalCode { get; set; } = string.Empty;

        public required Ufs State { get; set; }

        public required string Street { get; set; }
    
        public required string ReportedPeopleName { get; set; }
        public required string City { get; set; }

        public required DateTime ReportingDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public required string ContactPhone { get; set; }
    }

}
