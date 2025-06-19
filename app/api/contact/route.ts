import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Contact } from "@/models/Contact"

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    })

    await contact.save()

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        contact: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectToDatabase()

    const contacts = await Contact.find({}).sort({ createdAt: -1 }).limit(10)

    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Failed to fetch contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
