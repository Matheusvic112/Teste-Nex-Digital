import { User } from "../../models/User";
import { Request } from "express";

declare global {
  namespace Express {
    interface Request extends Request {
      token: string;
      user:any;
    }
  }
}