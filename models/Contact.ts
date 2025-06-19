import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [100, "Name cannot be more than 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
    trim: true,
    maxlength: [200, "Subject cannot be more than 200 characters"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    maxlength: [1000, "Message cannot be more than 1000 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["new", "read", "replied"],
    default: "new",
  },
})

export const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema)
