import { Router } from "express";
import {
  crateItemListController,
  deleteItemIdController,
  findItemIdController,
  updateItemListController,
} from "../controllers/list.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/autToken.middleware";
import { verifyPatchAndDeleteMiddleware } from "../middlewares/updateAndDelete.middleware";

export const listRouter = Router();

listRouter.post(
  "/:id",
  verifyTokenValidationMiddleware,
  crateItemListController
);
listRouter.patch(
  "/:id",
  verifyTokenValidationMiddleware,verifyPatchAndDeleteMiddleware,
  updateItemListController
);
listRouter.get("/:id", verifyTokenValidationMiddleware, findItemIdController);
listRouter.delete(
  "/:id",
  verifyTokenValidationMiddleware,verifyPatchAndDeleteMiddleware,
  deleteItemIdController
);
