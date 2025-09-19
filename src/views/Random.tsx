import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRandom } from "../store/Reducer/Random";
import { RootState, AppDispatch } from "../store/store";

export default function Random() {
  const dispatch = useDispatch<AppDispatch>();
  const numbers = useSelector((state: RootState) => state.random ?? []);

  const handleRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum)
    dispatch(addRandom(randomNum));
  };
  return (
    <div>
      <h1>Random Number</h1>
      <button onClick={handleRandom}>Generate Random Number</button>
      <p>Trong consolog</p>
    </div>
  );
}
