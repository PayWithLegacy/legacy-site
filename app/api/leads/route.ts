import { NextRequest, NextResponse } from "next/server";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Format the message for Slack
    const slackMessage = {
      text: "New Lead Submission",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎯 New Lead Submission",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*First Name:*\n${body.firstName || "N/A"}`,
            },
            {
              type: "mrkdwn",
              text: `*Last Name:*\n${body.lastName || "N/A"}`,
            },
            {
              type: "mrkdwn",
              text: `*Phone:*\n${body.phone || "N/A"}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${body.email || "N/A"}`,
            },
            {
              type: "mrkdwn",
              text: `*Website:*\n${body.website || "N/A"}`,
            },
          ],
        },
        {
          type: "divider",
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted at: ${new Date().toLocaleString()}`,
            },
          ],
        },
      ],
    };

    // Send to Slack
    if (!SLACK_WEBHOOK_URL) {
      console.error("SLACK_WEBHOOK_URL is not defined");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      console.error("Failed to send to Slack:", await slackResponse.text());
      return NextResponse.json(
        { error: "Failed to process lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
