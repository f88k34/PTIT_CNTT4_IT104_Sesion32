
interface User {
  id: number;
  name: string;
}

interface StudentState {
  users: User[];
}

const initialState: StudentState = {
  users: [
    { id: 1, name: "Minh Thu" },
    { id: 2, name: "Minh Huyền" },
    { id: 3, name: "Thành Đạt" },
  ],
};
type StudentAction =
  | { type: "ADD"; payload: User }
  | { type: "EDIT"; payload: User }
  | { type: "DELETE"; payload: number };
export const reducerStudent = (
  state: StudentState = initialState,
  action: StudentAction
): StudentState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "EDIT":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };

    case "DELETE":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };

    default:
      return state;
  }
};
