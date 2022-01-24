import { Router } from "express";
import { CreateUserController } from "../modules/services/CreateUserController";
const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle)


export {usersRouter}
