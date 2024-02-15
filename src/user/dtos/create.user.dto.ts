export class CreateUserDto {
  name!: string;
  email!: string;
  password!: string;
  phoneNumber!: string;
  cpf!: string;
  bornDate!: Date;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }

}


