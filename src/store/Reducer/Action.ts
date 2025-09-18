import { User } from './User';

export const SET_USER = 'SET_USER';
export const SET_USERS = 'SET_USERS';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: Partial<User>;
}

export interface SetUsersAction {
  type: typeof SET_USERS;
  payload: User[];
}

export type UserActionTypes = SetUserAction | SetUsersAction;

export const setUser = (user: Partial<User>): SetUserAction => ({
  type: SET_USER,
  payload: user
});

export const setUsers = (users: User[]): SetUsersAction => ({
  type: SET_USERS,
  payload: users,
});
