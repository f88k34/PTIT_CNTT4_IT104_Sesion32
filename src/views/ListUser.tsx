import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Reducer/rootReducer';

export default function ListUser() {
  const users = useSelector((state: RootState) => state.users);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateBirth}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => {}}>Sửa</button>
                <button onClick={() => {}}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}