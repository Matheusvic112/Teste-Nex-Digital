import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required").min(3,"first name must be 3 caracterers"),
  last_name: Yup.string().required("last name is required").min(3,"last name must be 3 caracterers"),
  email: Yup.string().required("Email required").min(5,"Email must be 5 caracterers"),
  password: Yup.string()
    .min(10, "Passowrd must be 10 characters")
    .required("Password is required"),
    
});

export const UserUpdateSchema= Yup.object().shape({
  password: Yup.string().min(10, "Passowrd must be 10 characters"),
  first_name: Yup.string().min(3,"first name must be 3 caracterers"),
  last_name: Yup.string().min(3,"last name must be 3 caracterers"),
  email: Yup.string().min(5,"email must be 5 caracterers"),
})

export const ListSchema = Yup.object().shape({
  product: Yup.string().required("Product is required").min(3,"Product must be 3 caracterers"),
  amount: Yup.number().required("Amount is required").min(1,"Amount must be 1 "),
});

export const ListUpdateSchema = Yup.object().shape({
  product: Yup.string().min(3,"").min(3,"Product must be 3 caracterers"),
  amount: Yup.number().min(1,"Amount must be 1 "),
});
