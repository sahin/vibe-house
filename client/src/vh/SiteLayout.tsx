import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { useBranding } from "@/hooks/useBranding";
import logoFooter from "./assets/vibe-house-logo-on-ink.svg";
import logoNav from "./assets/vibe-house-logo.svg";
import { useCopy } from "./lovieCopy";
import "./vh.css";

const NAV: [path: string, label: string][] = [
  ["/why", "Why now"],
  ["/events-series", "Events series"],
  ["/biological-founder", "Biological founder"],
  ["/the-founders-pharmacy", "The founder's pharmacy"],
];

const trimSlash = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

/** "smooth", or an instant jump for visitors who ask their system for reduced motion. */
const smooth = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

function scrollToId(id: string, behavior: ScrollBehavior) {
  const el = document.getElementById(decodeURIComponent(id));
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

type AProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** Site path such as "/why" or "/#join"; the lovie.co base path is added automatically. */
  href: string;
};

/** Internal link: client-side navigation, base-path aware, smooth-scrolls to #hash targets. */
export function A({ href, onClick, ...rest }: AProps) {
  const { href: withBase } = useBranding();
  const [, navigate] = useLocation();
  const [path, hash] = href.split("#");
  const targetPath = withBase(path || "/");
  const to = hash ? `${targetPath}#${hash}` : targetPath;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return;
    e.preventDefault();
    if (trimSlash(window.location.pathname) === trimSlash(targetPath)) {
      if (hash) {
        window.history.pushState(null, "", to);
        scrollToId(hash, smooth());
      } else {
        window.scrollTo({ top: 0, behavior: smooth() });
      }
      return;
    }
    navigate(to);
  };

  return <a href={to} onClick={handleClick} {...rest} />;
}

type SiteLayoutProps = {
  /** Heading of the closing block in the footer (differs per page in the design). */
  closingTitle: string;
  children: ReactNode;
};

/** Announcement bar, header, footer and page-level behaviour shared by the design pages. */
export default function SiteLayout({
  closingTitle,
  children,
}: SiteLayoutProps) {
  const [location] = useLocation();
  // useBranding also sets the lovie.co tab title and favicon, as on the previous site.
  const { href: withBase } = useBranding();
  const { t, isLovie } = useCopy();
  const headerRef = useRef<HTMLElement>(null);

  // html/body styles of the design apply only while a design page is mounted.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("vh-doc");
    return () => root.classList.remove("vh-doc");
  }, []);

  // Expose the real header height (it wraps onto more rows on narrow screens or with a
  // large browser font) so sticky bars and #anchor jumps sit right below it (see vh.css).
  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const update = () =>
      root.style.setProperty("--vh-header-h", `${header.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--vh-header-h");
    };
  }, []);

  // New page: jump to the #hash target if there is one, otherwise to the top.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && scrollToId(hash, "instant")) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  // On narrow screens the menu is a horizontally scrolling strip: when the current page's link is
  // off-screen, bring it into view (centred). Re-run once the web fonts have loaded,
  // since they change the link widths.
  useEffect(() => {
    const strip = headerRef.current?.querySelector<HTMLElement>("nav.links");
    const centre = () => {
      const current = strip?.querySelector<HTMLElement>(
        '[aria-current="page"]'
      );
      if (!strip || strip.scrollWidth <= strip.clientWidth) {
        if (strip) strip.scrollLeft = 0;
        return;
      }
      if (!current) return;
      const s = strip.getBoundingClientRect();
      const c = current.getBoundingClientRect();
      if (c.left >= s.left && c.right <= s.right) return; // already fully visible
      strip.scrollLeft += c.left + c.width / 2 - (s.left + s.width / 2);
    };
    centre();
    let alive = true;
    document.fonts?.ready.then(() => alive && centre());
    return () => {
      alive = false;
    };
  }, [location]);

  const isCurrent = (path: string) =>
    trimSlash(location) === trimSlash(withBase(path));

  return (
    <div className="vh-page" style={{ width: "100%", minHeight: "100vh" }}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        />
      </Helmet>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="announce">
        <span className="dot" aria-hidden="true" />
        Vibe night demos, every Friday at 6:00pm.{" "}
        <A href="/#join">Apply to join →</A>
      </div>
      <header className="nav" ref={headerRef}>
        <div className="container">
          <A className="brand" href="/" aria-label="Vibe House SF, home">
            <img src={logoNav} alt="Vibe House SF" width="160" height="26" />
            {isLovie && <span className="brand-suffix">| Lovie HQ</span>}
          </A>
          <nav className="links" aria-label="Main">
            {NAV.map(([path, label]) => (
              <A
                key={path}
                href={path}
                aria-current={isCurrent(path) ? "page" : undefined}
              >
                {t(label)}
              </A>
            ))}
          </nav>
          <A className="btn sm cta" href="/#join">
            Join our next event{" "}
            <span className="ar" aria-hidden="true">
              →
            </span>
          </A>
        </div>
      </header>
      {children}
      <footer className="band ink">
        <div className="container">
          <div className="close">
            {isLovie ? (
              <div className="logo-row">
                <img
                  className="logo"
                  src={logoFooter}
                  alt="Vibe House SF"
                  width="320"
                  height="52"
                />
                <span className="brand-suffix">
                  <span className="sep">| </span>Lovie HQ
                </span>
              </div>
            ) : (
              <img
                className="logo"
                src={logoFooter}
                alt="Vibe House SF"
                width="320"
                height="52"
              />
            )}
            <h2>{closingTitle}</h2>
            <p>
              {t(
                "Good people, honest conversations and a beautiful room to build in, every Tuesday through Friday."
              )}
            </p>
            <div className="btns" style={{ justifyContent: "center" }}>
              <A className="btn amber" href="/#join">
                Join our next event{" "}
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </A>
              <A className="btn ghost on-ink" href="/events-series">
                See the week
              </A>
            </div>
          </div>
          <div className="foot">
            <span>{t("Vibe House SF · San Francisco, California")}</span>
            <nav aria-label="Footer">
              {NAV.map(([path, label]) => (
                <A key={path} href={path}>
                  {t(label)}
                </A>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
