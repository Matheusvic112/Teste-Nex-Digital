import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";
import { AppError } from "../errors";

export const verifyEmailMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) {
    throw new AppError("Email is required", 400);
  }

  const emailFind = await User.findOne({ where: { email } });

  if (emailFind) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
