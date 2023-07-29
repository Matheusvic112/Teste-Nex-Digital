import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppError } from "../errors";
import { List } from "../models/list";

export const verifyPatchAndDeleteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(" ")[1];

  if (!token) {
    return next(new AppError("Missing token.", 401));
  }

  const decoded: JwtPayload = jwt.verify(
    token,
    process.env.SECRET_KEY as string
  ) as JwtPayload;
  
  const userId = decoded.sub;
  const listId = req.params.id;

  const list = await List.findByPk(listId);

  if (!list) {
    return next(new AppError("List not found", 404));
  }

  if (list.userId !== userId) {
    return next(new AppError("You are not the owner of this list", 403));
  }

  return next();
};
