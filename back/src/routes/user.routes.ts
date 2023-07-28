import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findUserController,
  findUserIdController,
  updateController,
} from "../controllers/user.controller";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", findUserController);
userRouter.get("/:id", findUserIdController);
userRouter.patch("/:id", updateController);
userRouter.delete("/:id", deleteUserController);
