import { prisma } from "./../../prisma/client/prisma.client";

export interface CreateUserInterface {
  name: string;
  email: string;
  hashPassword: string;
  phoneNumber: string;
  cpf: string;
}
export class UserService {
  async createUser(createUserData: CreateUserInterface) {
    try {
  
      const userAlreadyExists = await prisma.user.findUnique({
        where: {
          email: createUserData.email,
          phoneNumber: createUserData.phoneNumber,
          cpf: createUserData.cpf,
        },
      });

      if (userAlreadyExists) {
        return { status: 409, message: "User already exists" };
      }

      const createUser = await prisma.user.create({
        data: {
          name: createUserData.name,
          password: createUserData.hashPassword,
          email: createUserData.email,
          phoneNumber: createUserData.phoneNumber,
          cpf: createUserData.cpf,
        },
      });

      if (!createUser) {
        return { status: 400, message: "Bad Request" };
      }
      const jsonBody = JSON.stringify(createUser);
      return { status: 201, body: jsonBody };
    } catch (err) {
      return { status: 400, body: "Bad Request error" };
    }
  }

  async getAllUsers(){
    try{
      const result = await prisma.user.findMany();

      if(!result){
        return { status: 404, body:"Bad Request error"};
      }else if(result.length == 0){
        return {status: 204, body:"Empty response"}
      }
      return {status: 200, body:result}
    }catch(err){
      console.log(err)
      return{ status: 400, body: "Bad Request"}
    }
  }
}
