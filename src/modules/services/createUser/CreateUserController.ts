
import { container } from 'tsyringe'
import { CreateUserUseCase } from './CreateUserUseCase'
import {Response, Request } from 'express'


class CreateUserController {


    async handle(req: Request, res: Response): Promise<Response>{


        const {name, password, email} = req.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.execute({email, name, password});

        return res.status(201).json();

    }
}

export {CreateUserController}