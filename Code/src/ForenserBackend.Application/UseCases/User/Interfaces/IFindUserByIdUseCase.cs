using ForenserBackend.Communication.Response.Detailed;

namespace ForenserBackend.Application.UseCases.User.Interfaces
{
    public interface IFindUserByIdUseCase
    {
        Task<DetailedUserResponseJson> GetUserDetailsById(string id);
    }
}
