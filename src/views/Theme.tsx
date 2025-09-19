import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Reducer/rootReducer";
export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.Theme.darkMode);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "TOGGLE_THEME", payload: e.target.checked });
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
    }}
    >
      <h1>{darkMode ? "Tối" : "Sáng"}</h1>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
        />{" "}
        Dark Mode
      </label>
    </div>
  );
}
