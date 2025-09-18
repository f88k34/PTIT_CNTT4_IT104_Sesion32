// src/store/reducers/themeReducer.ts
const savedTheme = localStorage.getItem("darkMode") === "true";

const initialState = {
  darkMode: savedTheme, // mặc định lấy từ localStorage (nếu có)
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      localStorage.setItem("darkMode", String(action.payload)); // lưu vào localStorage
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
