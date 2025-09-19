import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

export default function Counter() {
  const result = useSelector((state: RootState) => state.counts);
  const dispatch = useDispatch<AppDispatch>();
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const reduce = () => {
    dispatch({ type: "REDUCE" })
  };
  return (
    <div>
      <h1>Ứng dụng Counter</h1>
      <p>Giá trị count: {result.count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={reduce}>Giảm</button>
    </div>
  );
}
