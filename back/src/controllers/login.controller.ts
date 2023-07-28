import { loginUserService } from "../services/login.service";
import { Request, Response } from "express";



export async function loginController(req: Request, res: Response) {
  const login = await loginUserService(req.body);
  res.status(200).send(login);
}
