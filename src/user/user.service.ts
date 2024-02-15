import { prisma } from './../../prisma/client/prisma.client';
export class UserService{
    async createUser(createUserData: any){
        try{
            const createUser = await prisma.user.create(createUserData);
            if(!createUser){
                return { status: 401, message: "Error"}
            }
            return {status: 201, body: createUser}
        } catch(err){
            return {status: 400, body: "Bad Request error"}
        }
    }
}