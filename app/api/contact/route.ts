import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, phone, email, service, message } = data;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // Log form submission (replace with email/CRM integration in production)
    console.log("=== New Contact Form Submission ===");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Service:", service || "Not specified");
    console.log("Message:", message || "None");
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    return NextResponse.json(
      { success: true, message: "Thank you. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
