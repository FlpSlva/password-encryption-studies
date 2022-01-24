import { Router } from "express";
import { createUsersRouter } from "./createUsers/create.routes.user";
import { listUserRoutes } from "./listUsers/list.routes.user";

const router = Router();

router.use("/users", createUsersRouter);
router.use("/users", listUserRoutes);

export {router}