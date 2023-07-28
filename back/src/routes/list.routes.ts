import { Router } from "express";
import {
  crateItemListController,
  updateItemListController,
} from "../controllers/list.controller";

export const listRouter = Router();

listRouter.post("/:id", crateItemListController);
listRouter.patch("/:id", updateItemListController);
