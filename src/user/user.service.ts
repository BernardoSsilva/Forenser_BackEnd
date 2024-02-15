import { prisma } from "./../../prisma/client/prisma.client";

export interface CreateUserInterface {
  name: string;
  email: string;
  hashPassword: string;
  phoneNumber: string;
  cpf: string;
  bornDate: Date;
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
          bornDate: createUserData.bornDate,
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
}
