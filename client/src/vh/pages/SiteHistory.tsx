// Change log and Rules pages from Sahin's "Vibe House SF" artifact (its change-log and rules views).
// Markup mirrors the artifact's shell view; styling lives in ../vh.css.
import type { ReactNode } from "react";
import SEO from "@/components/SEO";
import SiteLayout, { A } from "../SiteLayout";
import { CHANGELOG, RULES } from "../siteHistory";

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

function Shell({
  label,
  title,
  lede,
  path,
  children,
}: {
  label: string;
  title: string;
  lede: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout closingTitle="Come build with us.">
      <SEO title={title} description={lede} path={path} />
      <main id="main">
        <section className="phero">
          <div className="container rv">
            <A className="crumb" href="/">
              ← Back to home
            </A>
            <span className="label">{label}</span>
            <h1 className="d1">{title}</h1>
            <p className="lede">{lede}</p>
          </div>
        </section>
        <section className="band linen">
          <div className="container">
            <div className="narrow clog">{children}</div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function ChangeLog() {
  return (
    <Shell
      label="Site history"
      title="Change log"
      lede="What changed on this site, day by day, newest first."
      path="/change-log"
    >
      {CHANGELOG.map(day => {
        const [y, m, d] = day.date.split("-");
        const n = day.items.length;
        return (
          <section className="clog-day" key={day.date}>
            <h2>
              {MONTHS[Number(m) - 1]} {Number(d)}, {y}{" "}
              <small>
                {n}
                {n === 1 ? " change" : " changes"}
              </small>
            </h2>
            <ul>
              {day.items.map(([section, change], i) => (
                <li key={i}>
                  <b>{section}</b>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </Shell>
  );
}

export function Rules() {
  const total = RULES.reduce((n, c) => n + c.rules.length, 0);
  return (
    <Shell
      label="Site rules"
      title="Rules"
      lede={`The patterns this site follows. ${total}${total === 1 ? " rule" : " rules"} so far.`}
      path="/rules"
    >
      {RULES.map(group => (
        <section className="clog-day" key={group.category}>
          <h2>
            {group.category}{" "}
            <small>
              {group.rules.length}
              {group.rules.length === 1 ? " rule" : " rules"}
            </small>
          </h2>
          <div>
            {group.rules.map(rule => (
              <div className="rule" key={rule.title}>
                <b>{rule.title}</b>
                <p>{rule.text}</p>
                <p className="ex">Example: {rule.example}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Shell>
  );
}
