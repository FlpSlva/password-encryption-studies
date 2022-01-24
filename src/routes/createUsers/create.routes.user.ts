import { Router } from "express";
import { CreateUserController } from "../../modules/services/createUser/CreateUserController";

const createUsersRouter = Router();

const createUserController = new CreateUserController();

createUsersRouter.post("/create", createUserController.handle)


export {createUsersRouter}
