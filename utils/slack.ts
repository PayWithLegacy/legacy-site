const slackUrls = {
  successUrl: "",
  errorUrl: "",
} as const;

export async function postSlackMessage(
  message: string,
  urlKey: keyof typeof slackUrls
) {
  try {
    await fetch(slackUrls[urlKey], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
    });
  } catch (_: any) {
    console.error("Failed to post message to Slack");
  }
}
