import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk("contact/submitForm", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to submit contact form")
  }
})

// Async thunk for fetching contacts (admin feature)
export const fetchContacts = createAsyncThunk("contact/fetchContacts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/contact`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch contacts")
  }
})

const initialState = {
  isSubmitting: false,
  submitSuccess: false,
  error: null,
  contacts: [],
  stats: {
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
  },
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.isSubmitting = false
      state.submitSuccess = false
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Submit contact form
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true
        state.error = null
        state.submitSuccess = false
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.isSubmitting = false
        state.submitSuccess = true
        state.error = null
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false
        state.error = action.payload
        state.submitSuccess = false
      })
      // Fetch contacts
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload.data
      })
  },
})

export const { resetContactState, clearError } = contactSlice.actions
export default contactSlice.reducer
