import { Optional } from "sequelize";
import { AppError } from "../errors";
import { User } from "../models/User";
import { List } from "../models/list";

interface iUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export async function addUser(newUser: Optional<iUser, keyof iUser>) {
  const createNewUser = await User.create(newUser);
  const { password, ...userResponse } = createNewUser.toJSON();
  return userResponse;
}

export async function findUser() {
  return await User.findAll();
}

export async function findUserId(idUser: string) {
  const user = await User.findByPk(idUser, {
    attributes: {
      exclude: ["password"],
    },
    include: {
      model: List,
      as: "list",
    },
  });
  if (!user) {
    throw new AppError("User not found");
  }
  return user;
}
export async function updateUser(
  idUser: string,
  newUser: Optional<iUser, keyof iUser>
) {
  const findUser = await User.findByPk(idUser);
  if (!findUser) {
    throw new AppError("User not found");
  }
  await findUser.update(newUser);

  return { ...findUser.toJSON(), password: undefined };
}

export async function deleteUser(idUser: string) {
  const user = await User.findByPk(idUser);

  if (!user) {
    throw new AppError("User not found");
  }
  user.destroy();
  return user;
}
