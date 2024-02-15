import { CreateUserDto } from "./dtos/create.user.dto";

export class UserController {

    async createUser(createUserDto: CreateUserDto){
        const { name, email,cpf , password, phoneNumber, bornDate } = createUserDto

        return await this.userService.createUser()
    }
}