// MongoDB setup script
// Run this in MongoDB shell or MongoDB Compass

// Create database\
use
portfolio

// Create contacts collection with validation
db.createCollection("contacts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "subject", "message"],
      properties: {
        name: {
          bsonType: "string",
          maxLength: 100,
          description: "Name is required and must be a string with max 100 characters",
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "Email is required and must be a valid email format",
        },
        subject: {
          bsonType: "string",
          maxLength: 200,
          description: "Subject is required and must be a string with max 200 characters",
        },
        message: {
          bsonType: "string",
          maxLength: 1000,
          description: "Message is required and must be a string with max 1000 characters",
        },
        createdAt: {
          bsonType: "date",
          description: "Creation timestamp",
        },
        status: {
          bsonType: "string",
          enum: ["new", "read", "replied"],
          description: "Contact status",
        },
      },
    },
  },
})

// Create indexes for better performance
db.contacts.createIndex({ email: 1 })
db.contacts.createIndex({ createdAt: -1 })
db.contacts.createIndex({ status: 1 })

// Insert sample data (optional)
db.contacts.insertOne({
  name: "John Doe",
  email: "john@example.com",
  subject: "Test Contact",
  message: "This is a test message to verify the contact form is working.",
  createdAt: new Date(),
  status: "new",
})

console.log("MongoDB setup completed successfully!")
