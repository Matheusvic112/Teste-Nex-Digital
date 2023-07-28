import { Request, Response } from "express";
import {
  addUser,
  deleteUser,
  findUser,
  findUserId,
  updateUser,
} from "../services/user.service";

export async function createUserController(req: Request, res: Response) {
  const newUser = await addUser(req.body);
  res.status(201).json(newUser);
}

export async function findUserController(req: Request, res: Response) {
  const user = await findUser();
  res.status(200).json(user);
}

export async function findUserIdController(req: Request, res: Response) {
  const { id } = req.params;
  const user = await findUserId(id);
  res.status(200).json(user);
}

export async function updateController(req: Request, res: Response) {
  const { id } = req.params;
  const user = await updateUser(id, req.body);
  res.status(200).json(user);
}

export async function deleteUserController(req: Request, res: Response) {
  const { id } = req.params;
  await deleteUser(id);
  res.status(204).send();
}
