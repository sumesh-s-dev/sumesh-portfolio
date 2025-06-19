import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactState {
  isSubmitting: boolean
  submitSuccess: boolean
  error: string | null
  contacts: ContactForm[]
}

const initialState: ContactState = {
  isSubmitting: false,
  submitSuccess: false,
  error: null,
  contacts: [],
}

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (formData: ContactForm, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error")
    }
  },
)

// Async thunk for fetching contacts (admin feature)
export const fetchContacts = createAsyncThunk("contact/fetchContacts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/contact")
    if (!response.ok) {
      throw new Error("Failed to fetch contacts")
    }
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : "Unknown error")
  }
})

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.isSubmitting = false
      state.submitSuccess = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true
        state.error = null
        state.submitSuccess = false
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isSubmitting = false
        state.submitSuccess = true
        state.error = null
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false
        state.error = action.payload as string
        state.submitSuccess = false
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload
      })
  },
})

export const { resetContactState } = contactSlice.actions
export default contactSlice.reducer
