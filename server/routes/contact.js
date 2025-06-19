const express = require("express")
const { body, validationResult } = require("express-validator")
const Contact = require("../models/Contact")

const router = express.Router()

// Validation rules
const contactValidation = [
  body("name").trim().isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email address"),
  body("subject").trim().isLength({ min: 5, max: 200 }).withMessage("Subject must be between 5 and 200 characters"),
  body("message").trim().isLength({ min: 10, max: 1000 }).withMessage("Message must be between 10 and 1000 characters"),
]

// POST /api/contact - Submit contact form
router.post("/", contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      })
    }

    const { name, email, subject, message } = req.body

    // Create new contact
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip,
    })

    await contact.save()

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        createdAt: contact.createdAt,
      },
    })
  } catch (error) {
    console.error("Contact submission error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
      error: process.env.NODE_ENV === "development" ? error.message : "Internal server error",
    })
  }
})

// GET /api/contact - Get all contacts (for admin)
router.get("/", async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit

    const contacts = await Contact.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).select("-ipAddress") // Don't expose IP addresses

    const total = await Contact.countDocuments()

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Fetch contacts error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: process.env.NODE_ENV === "development" ? error.message : "Internal server error",
    })
  }
})

// GET /api/contact/stats - Get contact statistics
router.get("/stats", async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments()
    const newContacts = await Contact.countDocuments({ status: "new" })
    const readContacts = await Contact.countDocuments({ status: "read" })
    const repliedContacts = await Contact.countDocuments({ status: "replied" })

    res.json({
      success: true,
      data: {
        total: totalContacts,
        new: newContacts,
        read: readContacts,
        replied: repliedContacts,
      },
    })
  } catch (error) {
    console.error("Contact stats error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact statistics",
    })
  }
})

module.exports = router
