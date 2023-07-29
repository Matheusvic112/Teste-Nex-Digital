import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findUserController,
  findUserIdController,
  updateController,
} from "../controllers/user.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/autToken.middleware";
import { verifyPatchAndDeleteMiddleware } from "../middlewares/updateAndDelete.middleware";
import { verifyEmailMiddlewares } from "../middlewares/email.middleware";

export const userRouter = Router();

userRouter.post("",verifyEmailMiddlewares ,createUserController);
userRouter.get("", verifyTokenValidationMiddleware, findUserController);
userRouter.get("/:id", verifyTokenValidationMiddleware, findUserIdController);
userRouter.patch("/:id", verifyTokenValidationMiddleware,verifyPatchAndDeleteMiddleware, updateController);
userRouter.delete(
  "/:id",
  verifyTokenValidationMiddleware,verifyPatchAndDeleteMiddleware,
  deleteUserController
);
