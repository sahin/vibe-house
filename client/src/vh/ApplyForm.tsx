import { type FormEvent, useState } from "react";
import { trpc } from "@/lib/trpc";
import { useCopy } from "./lovieCopy";
import logoBetaworks from "./assets/logos/betaworks.png";
import logoEo from "./assets/logos/eo.png";
import logoInception from "./assets/logos/inception.png";
import logoPef from "./assets/logos/pef.png";
import logoStartx from "./assets/logos/startx.png";
import logoSuperfounders from "./assets/logos/superfounders.png";
import logoTiger21 from "./assets/logos/tiger21.png";
import logoYc from "./assets/logos/y-combinator.png";
import logoYpo from "./assets/logos/ypo.png";
import thanksMark from "./assets/thanks-mark.svg";

/** Same backup form the previous site linked to when a submission could not be saved. */
const BACKUP_FORM_URL =
  "https://airtable.com/appqVucbI0ROcWtt5/pagqasZj50JPqUSfk/form";

type FounderType =
  | "exited_founder"
  | "pef_member"
  | "superfounders_member"
  | "technical_founder"
  | "other";

const ROLES: { value: FounderType; label: string }[] = [
  { value: "exited_founder", label: "Exited Founder" },
  { value: "pef_member", label: "PEF Member" },
  { value: "superfounders_member", label: "Superfounders Member" },
  { value: "technical_founder", label: "Technical Founder" },
  { value: "other", label: "Other" },
];

/** `value` matches the ids the backend maps to Airtable labels (server/airtable.ts). */
type Community = {
  value: string;
  label: string;
  logo?: { src: string; width: number; height: number; w: number; h: number };
};

const COMMUNITIES: Community[] = [
  {
    value: "superfounders",
    label: "Superfounders",
    logo: { src: logoSuperfounders, width: 96, height: 119, w: 40, h: 50 },
  },
  {
    value: "pef",
    label: "PEF",
    logo: { src: logoPef, width: 416, height: 75, w: 112, h: 20 },
  },
  { value: "pef_ultra", label: "PEF Ultra" },
  {
    value: "yc",
    label: "Y Combinator",
    logo: { src: logoYc, width: 444, height: 92, w: 112, h: 23 },
  },
  {
    value: "tiger_21",
    label: "Tiger 21",
    logo: { src: logoTiger21, width: 238, height: 110, w: 75, h: 35 },
  },
  {
    value: "eo",
    label: "EO",
    logo: { src: logoEo, width: 404, height: 108, w: 110, h: 30 },
  },
  {
    value: "ypo",
    label: "YPO",
    logo: { src: logoYpo, width: 343, height: 124, w: 76, h: 28 },
  },
  { value: "longsdale", label: "Longsdale" },
  {
    value: "startx",
    label: "StartX",
    logo: { src: logoStartx, width: 424, height: 157, w: 72, h: 27 },
  },
  {
    value: "inception",
    label: "Inception",
    logo: { src: logoInception, width: 150, height: 40, w: 77, h: 21 },
  },
  {
    value: "betaworks",
    label: "Betaworks",
    logo: { src: logoBetaworks, width: 480, height: 123, w: 111, h: 28 },
  },
  { value: "other", label: "Other" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "invalid" | "failed" | "sent";

function normalizeUrl(raw: string) {
  const v = raw.trim();
  if (!v) return "";
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}

/** The "Join our next event" form from the design, wired to the existing application backend. */
export default function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { t, isLovie } = useCopy();
  const submit = trpc.application.submit.useMutation();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submit.isPending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const role = data.get("role") as FounderType | null;

    if (!fullName || !EMAIL_RE.test(email) || !role) {
      setStatus("invalid");
      const first = !fullName
        ? form.elements.namedItem("name")
        : !EMAIL_RE.test(email)
          ? form.elements.namedItem("email")
          : (form.querySelector(
              'input[name="role"]'
            ) as HTMLInputElement | null);
      if (first instanceof HTMLElement) first.focus();
      return;
    }

    const communities = data.getAll("communities").map(String);
    const phone = String(data.get("phone") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();

    submit.mutate(
      {
        fullName,
        email,
        phone: phone || undefined,
        linkedinUrl:
          normalizeUrl(String(data.get("linkedin") ?? "")) || undefined,
        founderType: role,
        communities: communities.length ? communities : undefined,
        additionalNotes: note || undefined,
      },
      {
        onSuccess: result => {
          setStatus(result.airtableSynced === true ? "sent" : "failed");
        },
        onError: error => {
          const fieldErrors = (
            error.data as
              | { zodError?: { fieldErrors?: Record<string, unknown> } }
              | undefined
          )?.zodError?.fieldErrors;
          setStatus(
            fieldErrors && Object.keys(fieldErrors).length
              ? "invalid"
              : "failed"
          );
        },
      }
    );
  };

  return (
    <form
      className={status === "sent" ? "vh io sent" : "vh io"}
      id="apply-form"
      noValidate
      onSubmit={onSubmit}
      aria-busy={submit.isPending || undefined}
    >
      <div className="row2">
        <div className="field">
          <label htmlFor="f-name">
            Your full name <span className="req">*</span>
          </label>
          <input
            id="f-name"
            name="name"
            autoComplete="name"
            required
            placeholder="Your full name"
          />
        </div>
        <div className="field">
          <label htmlFor="f-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="f-phone">Phone number</label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone number"
          />
        </div>
        <div className="field">
          <label htmlFor="f-li">LinkedIn</label>
          <input
            id="f-li"
            name="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/yourname"
          />
        </div>
      </div>
      <fieldset className="field">
        <legend>
          Which best describes you? <span className="req">*</span>
        </legend>
        <div className="choices" style={{ marginTop: "0.5rem" }}>
          {ROLES.map(r => (
            <label className="choice" key={r.value}>
              <input type="radio" name="role" value={r.value} required />
              <span>{t(r.label)}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {/* lovie.co hides the communities question, as on the previous site */}
      {!isLovie && (
        <fieldset className="field">
          <legend>Which exited founders' communities are you part of?</legend>
          <p className="hint">Select all that apply.</p>
          <div className="ctiles">
            {COMMUNITIES.map(c => (
              <label className="ctile" key={c.value}>
                <input type="checkbox" name="communities" value={c.value} />
                <span className="ctile-mark">
                  {c.logo ? (
                    <img
                      src={c.logo.src}
                      alt=""
                      width={c.logo.width}
                      height={c.logo.height}
                      loading="lazy"
                      style={{
                        width: `${c.logo.w / 16}rem`,
                        height: `${c.logo.h / 16}rem`,
                      }}
                    />
                  ) : (
                    <b>{c.label}</b>
                  )}
                </span>
                {c.logo && <span className="sr-only">{c.label}</span>}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className="field">
        <label htmlFor="f-note">Anything else?</label>
        <textarea
          id="f-note"
          name="note"
          placeholder="Tell us what you're building..."
        />
      </div>
      <div className="form-foot">
        <small>
          <span className="req">*</span> Required
        </small>
        <button className="btn" type="submit" disabled={submit.isPending}>
          Count me in{" "}
          <span className="ar" aria-hidden="true">
            →
          </span>
        </button>
      </div>
      <p
        className="form-error muted"
        role="alert"
        style={{
          margin: "0",
          display:
            status === "invalid" || status === "failed" ? "block" : "none",
        }}
      >
        {status === "failed" ? (
          <>
            We couldn't save your details just now. Please use the{" "}
            <a href={BACKUP_FORM_URL} target="_blank" rel="noopener noreferrer">
              backup form
            </a>{" "}
            instead.
          </>
        ) : (
          "Please add your name, a valid email and what best describes you."
        )}
      </p>
      <div className="thanks" role="status">
        <img src={thanksMark} alt="" width="56" height="56" />
        <h3 className="d3">You're on the list.</h3>
        <p className="muted" style={{ margin: "0", maxWidth: "30rem" }}>
          We'll send the next invite to your inbox. See you Friday.
        </p>
      </div>
    </form>
  );
}
