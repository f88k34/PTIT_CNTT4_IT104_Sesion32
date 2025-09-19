import { User } from "../Reducer/AuthReduc";

export const registerUser = (user: User) => ({
  type: "REGISTER",
  payload: user,
});
