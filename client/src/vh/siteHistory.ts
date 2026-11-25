/**
 * Change log and Rules pages, copied word for word from Sahin's "Vibe House SF" artifact
 * (its CHANGELOG and RULES lists, version 1795600258-4087). Newest day first.
 */
export type ChangeDay = {
  date: string;
  items: [section: string, change: string][];
};
export type RuleGroup = {
  category: string;
  rules: { title: string; text: string; example: string }[];
};

export const CHANGELOG: ChangeDay[] = [
  {
    date: "2026-11-25",
    items: [
      [
        "Everywhere",
        "Added Facebook (SF Vibe House) next to Instagram and LinkedIn, in the top menu and in the closing section of every page.",
      ],
      [
        "Everywhere",
        "In the top menu, the highlight behind a hovered link and the current page is now one tone darker than the page background (Seam) in place of white.",
      ],
      [
        "Everywhere",
        "Added Instagram and LinkedIn icons to the top menu, next to the “Join our next event” button. On phones they are hidden and the links stay in the closing section.",
      ],
      [
        "Everywhere",
        "Added Instagram (@sf.vibehouse) and LinkedIn (SF Vibe House) links to the dark closing section of every page, under the join buttons.",
      ],
    ],
  },
  {
    date: "2026-11-24",
    items: [
      ["Rules", "New rule: past events are never shown."],
      [
        "Events series",
        "Each of the five series boxes now shows its next event from the Luma calendar, with the date and an RSVP link. An event disappears once it has ended.",
      ],
      [
        "Everywhere",
        "Added a Rules page, linked from the footer next to the Change log.",
      ],
      [
        "Events series",
        "Added a banner under the intro that links to the Luma events page (luma.com/sfvibehouse).",
      ],
      [
        "Home",
        "The Inception choice in the join form now shows the name in text in place of its logo.",
      ],
      [
        "Home",
        "The Tiger 21, EO and YPO choices in the join form now show the name in text; their logos were removed.",
      ],
      [
        "Home",
        "Added Hampton to the communities choices in the join form, next to Long Angle. It shows as a name for now, without a logo.",
      ],
      [
        "Home",
        "Added Long Angle to the communities choices in the join form, where Longsdale used to be. It shows as a name for now, without a logo.",
      ],
      [
        "Home",
        "Removed Longsdale from the communities choices in the join form.",
      ],
      [
        "Home",
        "Removed Betaworks from the communities choices in the join form.",
      ],
      [
        "Home",
        "The third stat changed from “10 essays on the biological founder” to “300+ exited founders”.",
      ],
      [
        "Home",
        "The second stat changed from “31st edition of Future Fridays” to “50 events in 6 months”.",
      ],
      [
        "Home",
        "The first stat's label changed from “Weekly series” to “Series”.",
      ],
    ],
  },
  {
    date: "2026-11-19",
    items: [
      [
        "Home",
        "The “Why now” button left the headline area. The Why now section, with its “Read the full story” button, moved up to sit directly below the top of the page.",
      ],
      [
        "Home",
        "Removed the intro sentence beside the headline (“Bring the project you're building this week…”); the “Why now” button stays.",
      ],
      [
        "Home",
        "Removed the “Join our next event” button beside the headline; the same button is still in the top bar.",
      ],
    ],
  },
  {
    date: "2026-11-18",
    items: [
      [
        "Home",
        "The series names and descriptions on the five arches are now centered too, so each arch reads as one centered block.",
      ],
      [
        "Home",
        "The day names on the five arches are now centered under their icons.",
      ],
      [
        "Everywhere",
        "Added this Change log, linked from the footer of every page.",
      ],
      [
        "Home",
        "The day names on the five arches now sit on one line, and the arches are slightly taller.",
      ],
      [
        "Home",
        "Added an “As featured in The San Francisco Standard” badge above the headline, linking to the article.",
      ],
      [
        "Home",
        "The products stat now reads “Home wellness products, each chosen with intention”.",
      ],
      [
        "Home, Events series",
        "Future Fridays changed from the 23rd to the 31st edition everywhere it is mentioned.",
      ],
      [
        "Everywhere",
        "Created: the Vibe House SF design as a clickable website with five pages.",
      ],
    ],
  },
];

export const RULES: RuleGroup[] = [
  {
    category: "Events",
    rules: [
      {
        title: "Past events are never shown",
        text: "An event leaves the site as soon as its end time has passed, and the next upcoming one in the same series takes its place.",
        example:
          "Once Vibe Night Demos (#33) ends on December 11, the Future Fridays box shows #34 on December 18.",
      },
    ],
  },
];
