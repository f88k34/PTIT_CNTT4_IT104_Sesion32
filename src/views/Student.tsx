import { useSelector } from "react-redux";
import type { RootState } from "../store/store"

export default function Student() {
  const users = useSelector((state: RootState) => state.students.users);

  return (
    <div>
      <h1>Quản lý sinh viên!</h1>
      <ul>
        {users.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
