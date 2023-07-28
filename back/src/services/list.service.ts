import { User } from "../models/User";
import { List } from "../models/list";


interface iList{
  product:string
  amount:number
}

export async function addItemToList(userId: string, newItem: Partial<iList>) {
  const IdUser = await User.findByPk(userId);

  if (!IdUser) {
    throw new Error("User not found");
  }
  const newList = await List.create({
    ...newItem,
    userId: IdUser.id,
  });

  return newList;

}

export async function updateItemList(idItem:string ,newItem: Partial<iList>) {
  const idList = await List.findByPk(idItem)

  if(!idList){
    throw new Error("Item not found");

  }

  await idList.update(newItem);

  return idList;
}