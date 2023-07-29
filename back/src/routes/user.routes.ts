import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findUserController,
  findUserIdController,
  updateController,
} from "../controllers/user.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/autToken.middleware";
import { verifyEmailMiddlewares } from "../middlewares/email.middleware";
import { verifyPatchAndDeleteMiddleware } from "../middlewares/updateAndDelete.middleware";
import { YupVerification } from "../schemas/serializer.schemas";
import { UserSchema, UserUpdateSchema } from "../schemas/userAndList";

export const userRouter = Router();

userRouter.post(
  "",
  YupVerification(UserSchema),
  verifyEmailMiddlewares,
  createUserController
);
userRouter.get("", verifyTokenValidationMiddleware, findUserController);
userRouter.get("/:id", verifyTokenValidationMiddleware, findUserIdController);
userRouter.patch(
  "/:id",
  YupVerification(UserUpdateSchema),
  verifyTokenValidationMiddleware,
  verifyPatchAndDeleteMiddleware,
  updateController
);
userRouter.delete(
  "/:id",
  verifyTokenValidationMiddleware,
  verifyPatchAndDeleteMiddleware,
  deleteUserController
);
