const slackUrls = {
  successUrl:
    "https://hooks.slack.com/services/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",
  errorUrl:
    "https://hooks.slack.com/services/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",
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
