
const savedTheme = localStorage.getItem("darkMode") === "true";

const initialState = {
  darkMode: savedTheme,
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      localStorage.setItem("darkMode", String(action.payload));
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
