export async function postWebhook(
  url: string | undefined,
  payload: Record<string, unknown>
) {
  if (!url) {
    throw new Error("Webhook URL not configured.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(
      `Webhook request failed: ${response.status} ${response.statusText} ${details}`
    );
  }
}
