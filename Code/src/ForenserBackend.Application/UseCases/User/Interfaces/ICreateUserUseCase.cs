using ForenserBackend.Communication.Requests;

namespace ForenserBackend.Application.UseCases.User.Interfaces
{
    public interface ICreateUserUseCase
    {
        Task RegisterUser(UserRequestJson userRequest);
    }
}
