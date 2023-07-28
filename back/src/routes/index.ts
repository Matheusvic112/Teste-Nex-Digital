import { Router ,Request , Response} from "express";
import { User } from "../models/User";
import { List } from "../models/list";
import { createUserController, deleteUserController, findUserController, findUserIdController, updateController } from "../controller/user.controller";

export const userRouter = Router();

userRouter.post("",createUserController ) 
userRouter.get("",findUserController ) 
userRouter.get("/:id", findUserIdController ) 
userRouter.patch("/:id", updateController)
userRouter.delete("/:id" , deleteUserController)




