import { Router } from "express";
import {
  crateItemListController,
  deleteItemIdController,
  findItemIdController,
  updateItemListController,
} from "../controllers/list.controller";

export const listRouter = Router();

listRouter.post("/:id", crateItemListController);
listRouter.patch("/:id", updateItemListController);
listRouter.get("/:id", findItemIdController);
listRouter.delete("/:id", deleteItemIdController)
