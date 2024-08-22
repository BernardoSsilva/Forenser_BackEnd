namespace ForenserBackend.Application.UseCases.User.Interfaces
{
    public interface IDeleteUserUseCase
    {
        Task DeleteUser(string userToken);
    }
}
