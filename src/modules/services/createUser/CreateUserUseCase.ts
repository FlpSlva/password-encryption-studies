import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../errors/AppError";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private createUserUseCase: IUsersRepository
    ) {}

    async execute({email, name, password}: ICreateUserDTO): Promise<void> {

        const EmailAlreadyExists = await this.createUserUseCase.findByEmail(email)

        if(EmailAlreadyExists){
            throw new AppError("User Already Exists !", 400)
        }

        const passwordHash = await hash(password, 8)

        await this.createUserUseCase.create({
            email,
            name,
            password: passwordHash
        })
    }
}

export {CreateUserUseCase}