import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Reducer/rootReducer';

export default function Profile() {
  const user = useSelector((state: RootState) => state.currentUser);

  return (
    <div>
      <h2>Thông tin người dùng hiện tại</h2>
      <p>ID: {user.id}</p>
      <p>Họ và tên: {user.userName}</p>
      <p>Giới tính: {user.gender}</p>
      <p>Ngày sinh: {user.dateBirth}</p>
      <p>Địa chỉ: {user.address}</p>
    </div>
  );
}