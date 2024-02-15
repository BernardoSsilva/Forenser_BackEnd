export class CreateUserDto {
  name!: string;
  email!: string;
  password!: string;
  phoneNumber!: string;
  cpf!: string;
  bornDate!: Date;

  validate(): string[] | [] {
    const errors: string[] = [];
    const nameErrors = this.validateName(this.name);
    const emailErrors = this.validateEmail(this.email);
    const phoneNumberErrors = this.validatePhone(this.phoneNumber);
    const passwordErrors = this.validatePassword(this.password);
    const cpfErrors = this.validateCpf(this.cpf);

    if (nameErrors) errors.push(nameErrors);
    if (emailErrors) errors.push(emailErrors);
    if (phoneNumberErrors) errors.push(phoneNumberErrors);
    if (passwordErrors) errors.push(passwordErrors);
    if (cpfErrors) errors.push(cpfErrors);

    return errors;
  }

  private validateName(name: any): string | null {
    if (!name) return "name required";
    if (typeof name !== "string") return "name must be a string";
    return null;
  }

  private validateEmail(email: any): string | null {
    if (!email) return "email required";
    if (typeof email !== "string") return "email must be a string";
    return null;
  }

  private validatePassword(password: any): string | null {
    if (!password) return "password required";
    if (typeof password !== "string") return "password must be a string";
    if (password.length < 8) return "invalid password";
    return null;
  }

  private validatePhone(phoneNumber: any): string | null {
    if (!phoneNumber) return "phone number required";
    if (typeof phoneNumber !== "string") return "phone number must be a string";
    if (phoneNumber.length < 8) return "invalid phone number";
    return null;
  }

  private validateCpf(cpf: any): string | null {
    if (!cpf) return "cpf required";
    if (typeof cpf !== "string") return "cpf must be a string";
    return null;
  }
}
