import { Router ,Request , Response} from "express";
import { User } from "../models/User";
import { List } from "../models/list";

export const userRouter = Router();

//teste
userRouter.post("/user", async (req: Request, res: Response) => {
  const newUser = await User.create(req.body);
  return res.status(201).json(newUser);
});

//teste
userRouter.post("/list", async (req: Request, res: Response) => {
  const newUser = await List.create(req.body);
  return res.status(201).json(newUser);
});
