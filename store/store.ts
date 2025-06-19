import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "./slices/contactSlice"
import themeReducer from "./slices/themeSlice"

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
