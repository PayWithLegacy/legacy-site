import type { LeadBody, DealTrackerLead } from "./types";
import { NextRequest, NextResponse } from "next/server";
import { DEAL_TRACKER_API_KEY } from "@/utils/env";
import { postSlackMessage } from "@/utils/slack";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: LeadBody = await request.json();
    await postToDealTracker(body);
    await postSlackMessage(
      `New lead posted to Deal Tracker: ${JSON.stringify(body)}`,
      "successUrl"
    );
    return NextResponse.json("Success!", { status: 200 });
  } catch (error: any) {
    await postSlackMessage(
      `Error posting lead to Deal Tracker: ${error.message}`,
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
      headers: { "Content-Type": "application/json" },
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
  const responseBody = await response.json();
  console.log(responseBody); //TODO: delete this line after we find the response
  return response.json();
}
