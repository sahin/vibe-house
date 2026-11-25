import { useEffect, useState } from "react";

/**
 * Upcoming events for the "Next event" cards on the Events series page.
 * The page reads them live from the worker's /api/luma-events (the Luma calendar feed). The list
 * below is the built-in fallback, copied from the Luma calendar (luma.com/sfvibehouse) on
 * EVENTS_CHECKED, used until the live answer arrives or when it can't be reached. Times are UTC.
 * Rule from the design: past events are never shown. An event drops off once its end time has
 * passed and the next one in the same series takes its place, so a stale copy can run out of
 * events but never shows a past one.
 */
export const EVENTS_CHECKED = "2026-11-25";

export type LumaEvent = {
  name: string;
  start: string;
  end: string;
  url: string;
};

export const EVENTS: LumaEvent[] = [
  {
    name: "AWS x SFVibehouse 2— Technical Thursdays",
    start: "2026-12-11T01:30:00.000Z",
    end: "2026-12-11T05:00:00.000Z",
    url: "https://luma.com/technical-thursday",
  },
  {
    name: "Vibe Night Demos (#33)",
    start: "2026-12-12T02:00:00.000Z",
    end: "2026-12-12T05:00:00.000Z",
    url: "https://luma.com/sfvibehouse",
  },
  {
    name: "Legal AI Vibe Lab #7: Agents, Workflows, and the Future of Legal Work",
    start: "2026-12-17T02:00:00.000Z",
    end: "2026-12-17T06:00:00.000Z",
    url: "https://luma.com/legal-ai",
  },
  {
    name: "Vibe Night Demos (#34)",
    start: "2026-12-19T02:00:00.000Z",
    end: "2026-12-19T05:00:00.000Z",
    url: "https://luma.com/sfvibehouse-tau-robotics",
  },
];

export type SeriesSlug =
  | "truth-tuesday"
  | "wealth-wednesday"
  | "technical-thursday"
  | "future-fridays"
  | "founder-friday-breakfasts";

const SERIES_MATCH: [SeriesSlug, RegExp][] = [
  ["truth-tuesday", /truth tuesday/i],
  ["wealth-wednesday", /wealth wednesday/i],
  ["technical-thursday", /technical thursday/i],
  ["future-fridays", /vibe night|future friday/i],
  ["founder-friday-breakfasts", /founder friday|breakfast/i],
];

function seriesOf(name: string): SeriesSlug | null {
  for (const [slug, re] of SERIES_MATCH) if (re.test(name)) return slug;
  return null;
}

/** The next event of `series` that has not ended yet at `now`, or null. */
export function nextEventFor(
  series: SeriesSlug,
  now: number,
  events: LumaEvent[] = EVENTS
): LumaEvent | null {
  return (
    events
      .filter(e => new Date(e.end).getTime() > now && /^https:\/\//.test(e.url))
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .find(e => seriesOf(e.name) === series) ?? null
  );
}

/** "Thu, Dec 10, 5:30 PM PT" */
export function whenText(iso: string): string {
  try {
    return (
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date(iso)) + " PT"
    );
  } catch {
    return new Date(iso).toDateString();
  }
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "November 25, 2026" */
export function checkedText(date: string = EVENTS_CHECKED): string {
  const [y, m, d] = date.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}

/** lovie.co forwards only /about/location/* to this site, so the API sits under that prefix there. */
function lumaEventsUrl(): string {
  return /(^|\.)lovie\.co$/.test(window.location.hostname)
    ? "/about/location/api/luma-events"
    : "/api/luma-events";
}

function isLumaEvent(e: unknown): e is LumaEvent {
  const v = e as Record<string, unknown>;
  return (
    !!v &&
    typeof v.name === "string" &&
    typeof v.start === "string" &&
    typeof v.end === "string" &&
    typeof v.url === "string" &&
    v.url.startsWith("https://luma.com/")
  );
}

/** Live events from Luma, starting from (and falling back to) the built-in copy. */
export function useLumaEvents(): { events: LumaEvent[]; checked: string } {
  const [data, setData] = useState({ events: EVENTS, checked: EVENTS_CHECKED });
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(lumaEventsUrl(), {
      signal: ctrl.signal,
      headers: { Accept: "application/json" },
    })
      .then(r =>
        r.ok ? r.json() : Promise.reject(new Error(String(r.status)))
      )
      .then((d: { checked?: unknown; events?: unknown }) => {
        if (
          typeof d.checked === "string" &&
          /^\d{4}-\d{2}-\d{2}/.test(d.checked) &&
          Array.isArray(d.events) &&
          d.events.every(isLumaEvent)
        ) {
          setData({ events: d.events, checked: d.checked.slice(0, 10) });
        }
      })
      .catch(() => {
        // Keep the built-in copy; past events are still hidden at view time.
      });
    return () => ctrl.abort();
  }, []);
  return data;
}
