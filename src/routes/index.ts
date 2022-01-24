import { Router } from "express";
import { usersRouter } from "./routes.user";

const router = Router();

router.use("/users", usersRouter);


export {router}