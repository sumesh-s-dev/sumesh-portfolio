import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isDarkMode: false,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light")
      document.documentElement.setAttribute("data-theme", state.isDarkMode ? "dark" : "light")
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light")
      document.documentElement.setAttribute("data-theme", state.isDarkMode ? "dark" : "light")
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
