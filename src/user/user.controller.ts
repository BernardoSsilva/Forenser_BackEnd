import { CreateUserDto } from "./dtos/create.user.dto";
import { UpdateUserDto } from "./dtos/update.user.dto";
import { UserService } from "./user.service";
import * as bcrypt from "bcrypt";

export class UserController {
  constructor(private userService: UserService) {}

  async createUser({ name, email, password, phoneNumber, cpf }: CreateUserDto) {
    const hashPassword = await bcrypt.hash(password, 10);
    

    return await this.userService.createUser({
      name,
      email,
      hashPassword,
      phoneNumber,
      cpf
    });
  }

  async getAllUsers(){
    return await this.userService.getAllUsers();
  }

  async getUserById(id: string){
    return await this.userService.getUserById(id)
  }

  async editUser(id:string,updateData:UpdateUserDto){
    let hashPassword
    if(updateData.password){
      hashPassword = await bcrypt.hash(updateData.password, 10)
      updateData.password = hashPassword
    }
    return await this.userService.updateUser(id, {...updateData})
  }
}
