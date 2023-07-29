import { Request, Response } from "express";
import {
  addItemToList,
  deleteItemId,
  findItensId,
  updateItemList,
} from "../services/list.service";

export async function crateItemListController(req: Request, res: Response) {
  const { id } = req.params;
  const itemList = await addItemToList(id, req.body);

  res.status(201).json(itemList);
}

export async function updateItemListController(req: Request, res: Response) {
  const { id } = req.params;
  const updateitemList = await updateItemList(id ,req.body);

  res.status(200).json(updateitemList);
}

export async function findItemIdController(req: Request, res: Response) {
  const { id } = req.params;
  const findItemList = await findItensId(id);
  res.status(200).json(findItemList);
}

export async function deleteItemIdController(req: Request, res: Response) {
  const { id } = req.params;
  await deleteItemId(id);

  res.status(204).send();
}
