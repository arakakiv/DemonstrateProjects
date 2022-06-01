using DemonstrateProjects.Application.ViewModels;
using DemonstrateProjects.Application.InputModels;

namespace DemonstrateProjects.Application.Services.Interfaces;

public interface IProjectService
{
    Task AddAsync(Guid UserId, NewProjectModel model);

    Task<IQueryable<ProjectModel>> GetFromUserAsync(Guid userId);
    Task<ProjectModel?> GetAsync(Guid userId, int index);

    Task EditAsync(Guid userId, int index, EditProjectModel model);
    Task DeleteAsync(Guid userId, int index);
}