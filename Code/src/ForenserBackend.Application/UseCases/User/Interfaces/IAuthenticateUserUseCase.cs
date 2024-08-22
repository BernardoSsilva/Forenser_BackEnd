using ForenserBackend.Communication.Requests;
using ForenserBackend.Communication.Response;


namespace ForenserBackend.Application.UseCases.User.Interfaces
{
    public interface IAuthenticateUserUseCase
    {
        Task<AuthenticationResponse> AuthenticateUser(AuthenticationRequestJson request);
    }
}
