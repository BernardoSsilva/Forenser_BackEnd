using ForenserBackend.Domain.entities;
using ForenserBackend.Domain.RepositoriesInterfaces;
using ForenserBackend.Exception.HttpErrors;
using Microsoft.EntityFrameworkCore;

namespace ForenserBackend.Infrastructure.repositories
{
    public class OccurrenceRepository : IOccurenceRepository
    {
        private readonly ForenserDbContext _context;

        public OccurrenceRepository(ForenserDbContext context)
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
            if (occurrenceToDelete is null)
            {
                throw new NotFoundException("Occurrence not found");
            }
            _context.Remove(occurrenceToDelete);
        }

        public async Task<List<OccurrenceEntity>> GetAllOccurences()
        {
            return await _context.Occurrences.AsNoTracking().ToListAsync();
        }

        public async Task<OccurrenceEntity> GetOccurenceDetailsById(string occurenceId)
        {
            var occurrence = await _context.Occurrences.AsNoTracking().FirstOrDefaultAsync(occurrence => occurrence.Id == occurenceId);
            if (occurrence is null)
            {
                throw new NotFoundException("Occurrence not found");
            }
            return occurrence;
        }

        public void UpdateOccurence(OccurrenceEntity occurenceNewData)
        {
            _context.Update(occurenceNewData);
        }
    }
}
