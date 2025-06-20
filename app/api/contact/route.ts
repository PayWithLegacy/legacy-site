import { NextRequest, NextResponse } from "next/server";
import { postSlackMessage } from "../../../utils/slack";

export interface ContactBody {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.email || !body.comment) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create Slack message
    const slackMessage = `
🔔 *New Contact Form Submission* 🔔

*Name:* ${body.name}
*Phone:* ${body.phone}
*Email:* ${body.email}
*Message:*
${body.comment}

---
_Submitted from Contact Page_
    `.trim();

    // Send to Slack
    await postSlackMessage(slackMessage, "contactUrl");

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
