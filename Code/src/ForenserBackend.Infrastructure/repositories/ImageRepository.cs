using ForenserBackend.Domain.entities;
using ForenserBackend.Domain.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;

namespace ForenserBackend.Infrastructure.repositories
{
    public class ImageRepository : IImageRepository
    {

        private readonly ForenserDbContext _dbContext;

        public ImageRepository(ForenserDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<ImageEntity>> GetAllImages()
        {
            return await _dbContext.Images.AsNoTracking().ToListAsync();
        }

        public async Task<ImageEntity> GetImageById(string imageId)
        {
            return await _dbContext.Images.AsNoTracking().FirstOrDefaultAsync(image => image.Id == imageId);
        }

        public async Task RegisterImage(ImageEntity image)
        {
            await _dbContext.AddAsync(image);

        }

        public async Task UnregisterImage(string imageId)
        {
            var imageToRemove = await _dbContext.Images.FirstOrDefaultAsync(image => image.Id == imageId);
            _dbContext.Remove(imageToRemove);

        }
    }
}
