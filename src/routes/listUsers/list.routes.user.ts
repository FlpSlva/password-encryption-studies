import { Router } from "express";
import {ListUserController} from '../../modules/services/listUser/ListUserController'

const listUserRoutes = Router()
const listUserController = new ListUserController()


listUserRoutes.get("/list", listUserController.handle)

export {listUserRoutes}