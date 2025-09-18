// src/store/reducers/authReducer.ts
export interface User {
  email: string;
  password: string;
}

const initialState: User = {
  email: "",
  password: "",
};

export const authReducer = (
  state: User = initialState,
  action: any
): User => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
