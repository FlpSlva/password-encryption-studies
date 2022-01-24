import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/repositories/implementations/UsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)