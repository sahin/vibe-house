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

export async function createAirtableRecord(
  data: AirtableApplicationData
): Promise<{ id: string }> {
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

  // Set status to "Todo" for new submissions
  fields["Status"] = "Todo";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${airtableApiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Airtable API error (${response.status}): ${errorBody}`
    );
  }

  const result = await response.json();
  return { id: result.id };
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
