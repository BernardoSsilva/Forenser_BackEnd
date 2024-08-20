using ForenserBackend.Domain.entities;
using ForenserBackend.Domain.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;

namespace ForenserBackend.Infrastructure.repositories
{
    public class OccurenceRepository : IOccurenceRepository
    {
        private readonly ForenserDbContext _context;

        public OccurenceRepository(ForenserDbContext context)
        {
            _context = context;
        }
        public async Task CreateNewOccurence(OccurrenceEntity occurence)
        {
            await _context.AddAsync(occurence);
        }

        public async Task DeleteOccurence(string occurenceId)
        {
            var occurrenceToDelete = await _context.Occurrences.FirstOrDefaultAsync(occurrence => occurrence.Id == occurenceId);
            _context.Remove(occurrenceToDelete);
        }

        public async Task<List<OccurrenceEntity>> GetAllOccurences()
        {
            return await _context.Occurrences.AsNoTracking().ToListAsync();
        }

        public async Task<OccurrenceEntity> GetOccurenceDetailsById(string occurenceId)
        {
            return await _context.Occurrences.AsNoTracking().FirstOrDefaultAsync(occurrence => occurrence.Id == occurenceId);
        }

        public void UpdateOccurence(OccurrenceEntity occurenceNewData)
        {
            _context.Update(occurenceNewData);
        }
    }
}
