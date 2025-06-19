import type { LeadBody, DealTrackerLead } from "./types";
import { NextRequest, NextResponse } from "next/server";
import { DEAL_TRACKER_API_KEY } from "@/utils/env";
import { postSlackMessage } from "@/utils/slack";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body: LeadBody = await request.json();
  try {
    const response = await postToDealTracker(body);
    if (response?.Response === "Api Authorization Failed.") {
      throw new Error("API authorization to DealTracker failed");
    }
    await postSlackMessage(
      `New lead posted to Deal Tracker:\n` +
        `*Lead Details*:\n` +
        Object.entries(body)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n"),
      "successUrl"
    );
    return NextResponse.json("Success!", { status: 200 });
  } catch (error: any) {
    await postSlackMessage(
      `*Error posting lead to Deal Tracker*: ${error.message}\n` +
        Object.entries(body)
          .map(([key, value]) => `*${key}*: ${value}`)
          .join("\n"),
      "errorUrl"
    );
    return NextResponse.json("Failure!", { status: 500 });
  }
}
// TODO: figure out response type
async function postToDealTracker(leadBody: LeadBody): Promise<any> {
  const response = await fetch(
    `https://contacts.dealtracker.us/dtapi/lead/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: DEAL_TRACKER_API_KEY,
      },
      body: JSON.stringify({
        apiKey: DEAL_TRACKER_API_KEY,
        business_corporate_name: leadBody.legal_name,
        business_dba_name: leadBody.dba_name,
        first_name: leadBody.first_name,
        last_name: leadBody.last_name,
        email: leadBody.email,
        phone1: leadBody.phone,
      } as DealTrackerLead),
    }
  );
  const responseCode = response.status;
  if (responseCode !== 200) {
    const errorMessage = await response.text();
    throw new Error(`Failed to post to Deal Tracker: ${errorMessage}`);
  }
  return response.json();
}
