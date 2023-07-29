import { Router } from "express";
import {
  crateItemListController,
  deleteItemIdController,
  findItemIdController,
  updateItemListController,
} from "../controllers/list.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/autToken.middleware";
import { verifyPatchAndDeleteMiddleware } from "../middlewares/updateAndDelete.middleware";
import { YupVerification } from "../schemas/serializer.schemas";
import { ListSchema, UserUpdateSchema } from "../schemas/userAndList";

export const listRouter = Router();

listRouter.post(
  "/:id",
  YupVerification(ListSchema),
  verifyTokenValidationMiddleware,
  crateItemListController
);
listRouter.patch(
  "/:id",
  YupVerification(UserUpdateSchema),
  verifyTokenValidationMiddleware,
  verifyPatchAndDeleteMiddleware,
  updateItemListController
);
listRouter.get("/:id", verifyTokenValidationMiddleware, findItemIdController);
listRouter.delete(
  "/:id",
  verifyTokenValidationMiddleware,
  verifyPatchAndDeleteMiddleware,
  deleteItemIdController
);
