
import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  return localStorage.getItem("theme") || "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialTheme(),
    them: getInitialTheme() === "dark"
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.them = state.mode === "dark";
      localStorage.setItem("theme", state.mode);
      document.documentElement.setAttribute("data-theme", state.mode);
      
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;