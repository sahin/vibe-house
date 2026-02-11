import { ENV } from "./_core/env";

/**
 * Admin user IDs who should receive notifications on form submissions.
 */
const ADMIN_OPEN_IDS = [
  "9KKufeR9VubRandTZ6inrz", // Sahin
  "mrmkaW2CjMpdjabqiaaGP7", // Omer
];

type NotificationPayload = {
  title: string;
  content: string;
};

function buildEndpointUrl(baseUrl: string): string {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return new URL(
    "webdevtoken.v1.WebDevService/SendNotification",
    normalizedBase
  ).toString();
}

/**
 * Sends a notification to a specific user by openId.
 * Returns true if accepted, false on failure.
 */
async function notifyUser(
  openId: string,
  payload: NotificationPayload
): Promise<boolean> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    console.warn("[Notification] Forge API not configured, skipping notification");
    return false;
  }

  const endpoint = buildEndpointUrl(ENV.forgeApiUrl);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "content-type": "application/json",
        "connect-protocol-version": "1",
      },
      body: JSON.stringify({
        title: payload.title,
        content: payload.content,
        openId,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Failed to notify user ${openId} (${response.status})${detail ? `: ${detail}` : ""}`
      );
      return false;
    }

    console.log(`[Notification] Sent to user ${openId}: ${payload.title}`);
    return true;
  } catch (error) {
    console.warn(`[Notification] Error notifying user ${openId}:`, error);
    return false;
  }
}

/**
 * Sends a notification to all admin users.
 * Fires all requests in parallel. Returns true if at least one succeeded.
 */
export async function notifyAdmins(
  payload: NotificationPayload
): Promise<boolean> {
  const results = await Promise.allSettled(
    ADMIN_OPEN_IDS.map((openId) => notifyUser(openId, payload))
  );

  const anySucceeded = results.some(
    (r) => r.status === "fulfilled" && r.value === true
  );

  return anySucceeded;
}
