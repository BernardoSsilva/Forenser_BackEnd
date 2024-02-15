import { CreateUserDto } from "./dtos/create.user.dto";
import { UserService } from "./user.service";
import * as bcrypt from "bcrypt"

export class UserController {
    constructor( private userService: UserService){}

    async createUser(createUserDto: CreateUserDto){
        const { name, email,cpf , password, phoneNumber, bornDate } = createUserDto
        const hashPassword = bcrypt.hash(password, 10)

        return await this.userService.createUser({name, email, hashPassword, cpf, phoneNumber, bornDate})
    }
}