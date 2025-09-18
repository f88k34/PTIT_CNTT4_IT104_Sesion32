import { User } from './User';
import { SET_USER, UserActionTypes } from './Action';

const initialState: User = {
  id: '1',
  userName: 'Đào Xuân Khánh',
  gender: 'Nam',
  dateBirth: '2000-02-01',
  address: 'Hy'
};

export const currentUserReducer = (
  state: User = initialState,
  action: UserActionTypes
): User => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};