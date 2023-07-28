import { Request, Response } from "express";
import { addItemToList, updateItemList } from "../services/list.service";

export async function crateItemListController(req: Request, res: Response) {
  const { id } = req.params;
  const itemList = await addItemToList(id, req.body);

  res.status(201).json(itemList);
}

export async function updateItemListController(req: Request, res: Response) {
  const { id } = req.params;
  const updateitemList = await updateItemList(id, req.body);

  res.status(200).json(updateitemList);
}
