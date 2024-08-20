using ForenserBackend.Domain.entities;
using ForenserBackend.Domain.Enums;

namespace ForenserBackend.Tests.EntitiesTests
{
    public class OccourrenceEntityTests
    {

        [Fact]
        public void OccurrenceEntity_ShouldInitializeWithDefaultValues()
        {
            // Act
            var occurrence = new OccurrenceEntity
            {
                
                OccurrenceCity = "test city",
                OccurrenceDate = DateTime.Now,
                OccurrenceState = Ufs.AC,
                OccurrenceStreet = " test street",
                Type = OccurrenceType.theft,
                UserId = Guid.NewGuid().ToString(),
                
            };

            // Assert
            Assert.NotNull(occurrence.Id);
            Assert.Equal(DateTime.UtcNow.Date, occurrence.CreatedAt.Date);
            Assert.Empty(occurrence.ObjectList);
            Assert.Empty(occurrence.Vitms);
            Assert.Empty(occurrence.WitnessList);
            Assert.Empty(occurrence.ReferencePoints);
            Assert.Equal(string.Empty, occurrence.OccurrenceDescription);
        }

        [Fact]
        public void OccurrenceEntity_ShouldRequireMandatoryFields()
        {
            // Arrange
            var occurrence = new OccurrenceEntity
            {
                UserId = "user123",
                OccurrenceStreet = "Main Street",
                OccurrenceCity = "Springfield",
                OccurrenceState = Ufs.SP,
                OccurrenceDate = new DateTime(2024, 8, 18),
                Type = OccurrenceType.cheat
            };

            // Assert
            Assert.Equal("user123", occurrence.UserId);
            Assert.Equal("Main Street", occurrence.OccurrenceStreet);
            Assert.Equal("Springfield", occurrence.OccurrenceCity);
            Assert.Equal(Ufs.SP, occurrence.OccurrenceState);
            Assert.Equal(new DateTime(2024, 8, 18), occurrence.OccurrenceDate);
            Assert.Equal(OccurrenceType.cheat, occurrence.Type);
        }

        [Fact]
        public void OccurrenceEntity_ShouldAllowAddingObjectsToList()
        {
            // Arrange
            var occurrence = new OccurrenceEntity
            {
                UserId = "user123",
                OccurrenceStreet = "Main Street",
                OccurrenceCity = "Springfield",
                OccurrenceState = Ufs.SP,
                OccurrenceDate = new DateTime(2024, 8, 18),
                Type = OccurrenceType.cheat
            }; ;

            // Act
            occurrence.ObjectList.Add("Wallet");
            occurrence.ObjectList.Add("Watch");

            // Assert
            Assert.Equal(2, occurrence.ObjectList.Count);
            Assert.Contains("Wallet", occurrence.ObjectList);
            Assert.Contains("Watch", occurrence.ObjectList);
        }

        [Fact]
        public void OccurrenceEntity_ShouldAllowAddingVitmsToList()
        {
            // Arrange
            var occurrence = new OccurrenceEntity
            {
                UserId = "user123",
                OccurrenceStreet = "Main Street",
                OccurrenceCity = "Springfield",
                OccurrenceState = Ufs.SP,
                OccurrenceDate = new DateTime(2024, 8, 18),
                Type = OccurrenceType.cheat
            }; ;

            // Act
            occurrence.Vitms.Add("John Doe");
            occurrence.Vitms.Add("Jane Smith");

            // Assert
            Assert.Equal(2, occurrence.Vitms.Count);
            Assert.Contains("John Doe", occurrence.Vitms);
            Assert.Contains("Jane Smith", occurrence.Vitms);
        }

        [Fact]
        public void OccurrenceEntity_ShouldAllowAddingWitnessesToList()
        {
            // Arrange
            var occurrence = new OccurrenceEntity
            {
                UserId = "user123",
                OccurrenceStreet = "Main Street",
                OccurrenceCity = "Springfield",
                OccurrenceState = Ufs.SP,
                OccurrenceDate = new DateTime(2024, 8, 18),
                Type = OccurrenceType.cheat
            }; ;

            // Act
            occurrence.WitnessList.Add("Witness One");
            occurrence.WitnessList.Add("Witness Two");

            // Assert
            Assert.Equal(2, occurrence.WitnessList.Count);
            Assert.Contains("Witness One", occurrence.WitnessList);
            Assert.Contains("Witness Two", occurrence.WitnessList);
        }

        [Fact]
        public void OccurrenceEntity_ShouldAllowAddingReferencePoints()
        {
            // Arrange
            var occurrence = new OccurrenceEntity
            {
                UserId = "user123",
                OccurrenceStreet = "Main Street",
                OccurrenceCity = "Springfield",
                OccurrenceState = Ufs.SP,
                OccurrenceDate = new DateTime(2024, 8, 18),
                Type = OccurrenceType.cheat
            }; ;

            // Act
            occurrence.ReferencePoints.Add("Near the park");
            occurrence.ReferencePoints.Add("Next to the grocery store");

            // Assert
            Assert.Equal(2, occurrence.ReferencePoints.Count);
            Assert.Contains("Near the park", occurrence.ReferencePoints);
            Assert.Contains("Next to the grocery store", occurrence.ReferencePoints);
        }
    }
}
