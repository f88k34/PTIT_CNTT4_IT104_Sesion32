import { User } from './User';
import { SET_USERS, UserActionTypes } from './Action';

const initialState: User[] = [
  {
    id: '1',
    userName: 'Đào Xuân Khánh1',
    gender: 'Nam',
    dateBirth: '2000-02-01',
    address: 'HY1'
  },
  {
    id: '2',
    userName: 'Đào Xuân Khánh2',
    gender: 'Nam',
    dateBirth: '2000-02-02',
    address: 'Hy2'
  },
];

export const usersReducer = (
  state: User[] = initialState,
  action: UserActionTypes
): User[] => {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    default:
      return state;
  }
};
