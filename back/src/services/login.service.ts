import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../errors";
import { User } from "../models/User";

interface iLogin {
  email: string;
  password: string;
}
export const loginUserService = async (login: iLogin) => {
  const { password, email } = login;
  const loginUser = await User.findOne({
    where: { email },
    attributes: ["email", "password", "id"],
  });

  if (!loginUser) {
    throw new AppError("wrong email");
  }

  const decodPass = await compare(password, loginUser.password);

  if (!decodPass) {
    throw new AppError("Wrong password");
  }

  const token = jwt.sign(
    { id: loginUser.id },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: loginUser.id }
  );

  return { token };
};
