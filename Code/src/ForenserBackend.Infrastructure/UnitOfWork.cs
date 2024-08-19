using ForenserBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForenserBackend.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {

        private readonly ForenserDbContext _dbContext;
        public UnitOfWork(ForenserDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task Commit()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
