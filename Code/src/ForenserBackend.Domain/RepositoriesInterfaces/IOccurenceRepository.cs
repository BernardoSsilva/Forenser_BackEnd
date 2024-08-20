using ForenserBackend.Domain.entities;

namespace ForenserBackend.Domain.RepositoriesInterfaces
{
    public interface IOccurenceRepository
    {
        public Task CreateNewOccurence(OccurrenceEntity occurence);
        public void UpdateOccurence(OccurrenceEntity occurenceNewData);
        public Task DeleteOccurence(string occurenceId);

        public Task<OccurrenceEntity> GetOccurenceDetailsById(string occurenceId);

        public Task<List<OccurrenceEntity>> GetAllOccurences();



    }
}
