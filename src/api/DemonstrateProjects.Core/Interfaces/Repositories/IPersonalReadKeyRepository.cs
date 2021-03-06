using DemonstrateProjects.Core.Entities;

namespace DemonstrateProjects.Core.Interfaces.Repositories;

public interface IPersonalReadKeyRepository : IBaseRepository<Guid, PersonalReadKey>
{
    Task<IQueryable<PersonalReadKey>> GetByUserIdAsync(Guid userId);
    Task DeleteAllFromUserAsync(Guid userId);
}