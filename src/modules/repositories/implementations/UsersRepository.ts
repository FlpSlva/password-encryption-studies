import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";



class UsersRepository implements IUsersRepository{

    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }

    async create({email, name, password}: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({
            email,
            name,
            password

        })

        await this.repository.save(user)

       
    }
    async findByEmail(email: string): Promise<User> {
        
        const user = await this.repository.findOne({email})
        return user
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();

        return users
    }
    
}

export {UsersRepository}