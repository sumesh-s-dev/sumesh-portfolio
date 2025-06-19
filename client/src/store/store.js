import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "./slices/contactSlice"
import themeReducer from "./slices/themeSlice"

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
})

export default store
