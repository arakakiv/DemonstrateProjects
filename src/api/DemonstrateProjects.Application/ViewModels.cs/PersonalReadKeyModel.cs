namespace DemonstrateProjects.Application.ViewModels;

public class PersonalReadKeyModel
{
    public Guid Key { get; set; }
    public DateTimeOffset ExpiresWhen { get; set; }
}