#!/usr/bin/env node
/**
 * Smoke-check the deployed SF Vibe House custom domain without creating data.
 * Usage: node scripts/smoke-sfvibehouse.mjs [--commit <7+ hex chars>]
 */

const origin = "https://www.sfvibehouse.com";
const expectedBase = "appqVucbI0ROcWtt5";
const expectedTable = "tblPBZuARXwzRFoN7";
const commitIndex = process.argv.indexOf("--commit");
const expectedCommit = commitIndex > -1 ? process.argv[commitIndex + 1] : null;
if (commitIndex > -1 && !/^[a-f0-9]{7,40}$/i.test(expectedCommit ?? "")) {
  throw new Error("--commit needs a 7–40 character git hash");
}

const headers = { "User-Agent": "Mozilla/5.0 (compatible; SFVibeHouseSmoke/1.0)" };

async function check(path, options = {}) {
  const response = await fetch(`${origin}${path}`, {
    ...options,
    headers: { ...headers, ...options.headers },
    signal: AbortSignal.timeout(15000),
  });
  const body = await response.text();
  return { response, body };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function main() {
  const { response: home, body: html } = await check("/");
  assert(home.status === 200 && html.includes("Vibe House"), `Home failed: HTTP ${home.status}`);
  const deployedCommit = html.match(/<meta name="commit" content="([a-f0-9]+)"/i)?.[1];
  assert(deployedCommit, "Home has no release commit marker");
  if (expectedCommit) {
    assert(expectedCommit.startsWith(deployedCommit) || deployedCommit.startsWith(expectedCommit),
      `Deployed ${deployedCommit} does not match expected ${expectedCommit}`);
  }
  console.log(`PASS home; deployed commit ${deployedCommit}`);

  for (const route of ["/events-series", "/brand", "/accommodation"]) {
    const { response, body } = await check(route);
    assert(response.status === 200 && body.includes("Vibe House"),
      `${route} failed: HTTP ${response.status}`);
    console.log(`PASS ${route}`);
  }

  const { response: health, body: healthBody } = await check("/api/trpc/application.airtableHealth");
  assert(health.status === 200, `Airtable health endpoint failed: HTTP ${health.status}`);
  const connection = JSON.parse(healthBody)?.result?.data?.json;
  assert(connection?.connected === true && connection?.baseId === expectedBase &&
    connection?.tableId === expectedTable,
    `Airtable health does not match the Members table (connected=${connection?.connected})`);
  console.log("PASS Airtable Members connectivity");

  // Invalid input must be rejected by the actual backend; it cannot create a record.
  const { response: invalid, body: invalidBody } = await check(
    "/api/trpc/application.submit?batch=1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 0: { json: { fullName: "", email: "invalid", founderType: "other" } } }),
    }
  );
  const error = JSON.parse(invalidBody)?.[0]?.error?.json;
  assert(invalid.status === 400 && error?.data?.code === "BAD_REQUEST" &&
    error?.data?.path === "application.submit" && error?.message?.includes("fullName"),
    `Form validation did not reach the expected backend (HTTP ${invalid.status})`);
  console.log("PASS form proxy/validation (no record created)");
  console.log("Production smoke test passed. This read-only test does not prove a new write to Airtable.");
}

main().catch(error => {
  console.error(`FAIL production smoke test: ${error.message}`);
  process.exitCode = 1;
});
