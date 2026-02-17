import { ENV } from "./_core/env";

interface AirtableApplicationData {
  fullName: string;
  email: string;
  phone?: string | null;
  linkedin?: string | null;
  founderType: string;
  communities: string[];
  notes?: string | null;
}

const FOUNDER_TYPE_LABELS: Record<string, string> = {
  exited_founder: "Exited Founder",
  pef_member: "PEF Member",
  superfounders_member: "Superfounders Member",
  technical_founder: "Technical Founder",
  other: "Other",
};

const COMMUNITY_LABELS: Record<string, string> = {
  superfounders: "Superfounders",
  pef: "PEF",
  pef_ultra: "PEF Ultra",
  yc: "Y Combinator",
  "500_startups": "500 Startups",
  antler: "Antler",
  founders_institute: "Founders Institute",
  startx: "StartX",
  inception: "Inception",
  betaworks: "Betaworks",
  other: "Other",
};

/**
 * Parse the unknown field name from an Airtable UNKNOWN_FIELD_NAME error response.
 * Returns the field name if found, or null otherwise.
 */
function parseUnknownFieldName(errorBody: string): string | null {
  try {
    const parsed = JSON.parse(errorBody);
    if (parsed?.error?.type === "UNKNOWN_FIELD_NAME") {
      // Message format: 'Unknown field name: "FieldName"'
      const match = parsed.error.message?.match(/Unknown field name:\s*"([^"]+)"/);
      return match ? match[1] : null;
    }
  } catch {
    // Not valid JSON, ignore
  }
  return null;
}

/**
 * Send a POST request to Airtable to create a record.
 * Returns the response and body text for inspection.
 */
async function postToAirtable(
  url: string,
  token: string,
  fields: Record<string, unknown>
): Promise<{ ok: boolean; status: number; body: string; data?: any }> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  const body = await response.text();
  let data: any;
  try {
    data = JSON.parse(body);
  } catch {
    // body is not JSON
  }

  return { ok: response.ok, status: response.status, body, data };
}

/**
 * Create an Airtable record with automatic retry for unknown fields.
 * If a field doesn't exist in the table, it's removed and the request is retried.
 * This allows the form to work even if columns are added or removed from Airtable.
 * Maximum 5 retries to prevent infinite loops.
 */
export async function createAirtableRecord(
  data: AirtableApplicationData
): Promise<{ id: string; skippedFields?: string[] }> {
  const { airtableApiToken, airtableBaseId, airtableTableId } = ENV;

  if (!airtableApiToken || !airtableBaseId || !airtableTableId) {
    throw new Error("Airtable configuration is missing");
  }

  const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}`;

  const founderTypeLabel =
    FOUNDER_TYPE_LABELS[data.founderType] || data.founderType;

  const communityLabels = data.communities
    .map((c) => COMMUNITY_LABELS[c] || c)
    .filter(Boolean);

  const fields: Record<string, unknown> = {
    Name: data.fullName,
    Email: data.email,
    "Founder Type": founderTypeLabel,
  };

  if (data.phone) {
    fields["Phone"] = data.phone;
  }

  if (data.linkedin) {
    fields["LinkedIn"] = data.linkedin;
  }

  if (communityLabels.length > 0) {
    fields["Communities"] = communityLabels;
  }

  if (data.notes) {
    fields["Notes"] = data.notes;
  }

  const skippedFields: string[] = [];
  const MAX_RETRIES = 5;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const result = await postToAirtable(url, airtableApiToken, fields);

    if (result.ok) {
      return {
        id: result.data?.id ?? "unknown",
        ...(skippedFields.length > 0 ? { skippedFields } : {}),
      };
    }

    // Check if the error is about an unknown field
    if (result.status === 422) {
      const unknownField = parseUnknownFieldName(result.body);
      if (unknownField && fields[unknownField] !== undefined) {
        console.log(
          `[Airtable] Field "${unknownField}" not found in table, removing and retrying (attempt ${attempt + 1}/${MAX_RETRIES})`
        );
        delete fields[unknownField];
        skippedFields.push(unknownField);
        continue;
      }
    }

    // Non-recoverable error
    throw new Error(
      `Airtable API error (${result.status}): ${result.body}`
    );
  }

  throw new Error(
    `Airtable: exceeded max retries (${MAX_RETRIES}). Skipped fields: ${skippedFields.join(", ")}`
  );
}

/**
 * Verify the Airtable connection by listing records (limit 1).
 */
export async function verifyAirtableConnection(): Promise<boolean> {
  const { airtableApiToken, airtableBaseId, airtableTableId } = ENV;

  if (!airtableApiToken || !airtableBaseId || !airtableTableId) {
    return false;
  }

  const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}?maxRecords=1`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${airtableApiToken}`,
    },
  });

  return response.ok;
}
