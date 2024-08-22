using ForenserBackend.Communication.Requests;

namespace ForenserBackend.Application.UseCases.User.Interfaces
{
    public interface IUpdateUserUseCase
    {
        Task UpdateUser(String userToken, UserRequestJson newUserData);
    }
}
