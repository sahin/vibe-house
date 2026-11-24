// Generated from the Claude Design board "Main.dc.html" (Vibe House SF Site).
// Markup mirrors the design 1:1; styling lives in ../vh.css.
import SEO from "@/components/SEO";
import { useCopy } from "../lovieCopy";
import SiteLayout, { A } from "../SiteLayout";
import ApplyForm from "../ApplyForm";
import logoBetaworks from "../assets/logos/betaworks.png";
import logoEo from "../assets/logos/eo.png";
import logoPef from "../assets/logos/pef.png";
import logoStartx from "../assets/logos/startx.png";
import logoSuperfounders from "../assets/logos/superfounders.png";
import logoTiger21 from "../assets/logos/tiger21.png";
import logoYc from "../assets/logos/y-combinator.png";
import logoYpo from "../assets/logos/ypo.png";

export default function Home() {
  const { t, copy, isLovie } = useCopy();
  return (
    <SiteLayout closingTitle="Come build with us.">
      <SEO
        title={copy.seoHomeTitle}
        description={copy.seoHomeDescription}
        path="/"
        keywords={copy.seoHomeKeywords}
      />
      <main id="main">
        <section className="hx">
          <div className="container">
            <a
              className="press rv"
              target="_blank"
              rel="noopener"
              href="https://sfstandard.com/2026/10/04/midlife-hacker-house/"
            >
              <span className="press-k">As featured in</span>
              <b>The San Francisco Standard</b>
              <span className="press-q">
                The &ldquo;midlife hacker house&rdquo;
              </span>
              <span className="ar" aria-hidden="true">
                →
              </span>
            </a>
            <div className="hx-top rv">
              <h1 className="hx-title">
                {t(
                  "A new type of hacker house for exited founders to vibe code together."
                )}
              </h1>
            </div>
          </div>
          <div className="container">
            <nav className="colonnade rv" aria-label="The week at Vibe House">
              <A className="col s-truth" href="/events-series#truth-tuesday">
                <svg
                  className="sicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                  <circle cx="40" cy="60" r="19" fill="#4F6B3A" />
                  <circle cx="60" cy="60" r="19" fill="#8AA06F" />
                  <path
                    d="M50 43.8A19 19 0 0 1 50 76.2A19 19 0 0 1 50 43.8Z"
                    fill="#D9973A"
                  />
                </svg>
                <span className="day">Tuesday</span>
                <b>Truth Tuesdays</b>
                <span className="line">
                  Conversations that go beyond product and into purpose.
                </span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </A>
              <A
                className="col s-wealth"
                href="/events-series#wealth-wednesday"
              >
                <svg
                  className="sicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                  <path d="M22 91V77a7 7 0 0 1 14 0v14Z" fill="#D9973A" />
                  <path d="M43 91V63a7 7 0 0 1 14 0v28Z" fill="#7E5414" />
                  <path d="M64 91V49a7 7 0 0 1 14 0v42Z" fill="#7E5414" />
                </svg>
                <span className="day">Wednesday</span>
                <b>Wealth Wednesdays</b>
                <span className="line">
                  How money moves now, talked about honestly.
                </span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </A>
              <A
                className="col s-tech"
                href="/events-series#technical-thursday"
              >
                <svg
                  className="sicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                  <rect
                    x="22"
                    y="40"
                    width="56"
                    height="44"
                    rx="7"
                    fill="#2E4A68"
                  />
                  <circle cx="30" cy="48" r="2.2" fill="#DCE4EB" />
                  <circle cx="37" cy="48" r="2.2" fill="#DCE4EB" opacity=".6" />
                  <circle
                    cx="44"
                    cy="48"
                    r="2.2"
                    fill="#DCE4EB"
                    opacity=".35"
                  />
                  <path
                    d="M32 60l8 6.5-8 6.5"
                    fill="none"
                    stroke="#DCE4EB"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46 74h14"
                    stroke="#D9973A"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="day">Thursday</span>
                <b>Technical Thursdays</b>
                <span className="line">
                  Technical depth from people who've built at scale.
                </span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </A>
              <A
                className="col s-breakfast"
                href="/events-series#founder-friday-breakfasts"
              >
                <svg
                  className="sicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#F4ECDF" />
                  <circle cx="64" cy="40" r="11" fill="#D9973A" />
                  <path
                    d="M24 60h38v7a17 17 0 0 1-17 17h-4a17 17 0 0 1-17-17z"
                    fill="#7E5414"
                  />
                  <path
                    d="M62 63h3a7 7 0 0 1 0 14h-4"
                    fill="none"
                    stroke="#7E5414"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 91h48"
                    stroke="#7E5414"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="day">Friday morning</span>
                <b>Founder breakfasts</b>
                <span className="line">
                  Peer groups and wealth partners over coffee.
                </span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </A>
              <A className="col s-future" href="/events-series#future-fridays">
                <svg
                  className="sicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#D9973A" />
                  <rect
                    x="20"
                    y="38"
                    width="60"
                    height="40"
                    rx="5"
                    fill="#161515"
                  />
                  <path
                    d="M45 49.5v17a1.6 1.6 0 0 0 2.4 1.4l14-8.5a1.6 1.6 0 0 0 0-2.8l-14-8.5a1.6 1.6 0 0 0-2.4 1.4z"
                    fill="#FBF9F5"
                  />
                  <rect x="46" y="78" width="8" height="7" fill="#161515" />
                  <rect
                    x="34"
                    y="85"
                    width="32"
                    height="5"
                    rx="2.5"
                    fill="#161515"
                  />
                </svg>
                <span className="day">Friday, 6:00pm</span>
                <b>Vibe night demos</b>
                <span className="line">
                  Our flagship demo night, now in its 31st edition.
                </span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </A>
            </nav>
            <div className="stats">
              <div className="stat">
                <b>5</b>
                <span>Series</span>
              </div>
              <div className="stat">
                <b>50</b>
                <span>Events in 6 months</span>
              </div>
              <div className="stat">
                {/* "300+ exited founders" is an sfvibehouse.com stat; lovie.co keeps its essays stat. */}
                {isLovie ? (
                  <>
                    <b>10</b>
                    <span>{t("Essays on the biological founder")}</span>
                  </>
                ) : (
                  <>
                    <b>300+</b>
                    <span>Exited founders</span>
                  </>
                )}
              </div>
              <div className="stat">
                <b>123</b>
                <span>Home wellness products, each chosen with intention</span>
              </div>
            </div>
          </div>
        </section>
        <section className="band oat" id="why">
          <div className="container why-teaser">
            <div className="io" style={{ display: "grid", gap: "1.375rem" }}>
              <span className="label">Why now</span>{" "}
              <blockquote>
                {t(
                  "The tools are evolving daily. The founders who master them first will define what comes next."
                )}
              </blockquote>
              <div>
                <A className="btn" href="/why">
                  Read the full story{" "}
                  <span className="ar" aria-hidden="true">
                    →
                  </span>
                </A>
              </div>
            </div>
            <figure className="why-fig io">
              <svg
                className="why-art"
                viewBox="0 0 560 600"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <clipPath id="vh-room">
                    <path d="M0 600V280A280 280 0 0 1 560 280V600Z" />
                  </clipPath>
                  <clipPath id="vh-win">
                    <path d="M178 332V202a102 102 0 0 1 204 0V332Z" />
                  </clipPath>
                  <radialGradient id="vh-lampglow">
                    <stop offset="0" stopColor="#FBF9F5" stopOpacity=".95" />
                    <stop offset="1" stopColor="#FBF9F5" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="vh-screenglow">
                    <stop offset="0" stopColor="#D9973A" stopOpacity=".45" />
                    <stop offset="1" stopColor="#D9973A" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="vh-sunglow">
                    <stop offset="0" stopColor="#F2C98A" stopOpacity=".9" />
                    <stop offset="1" stopColor="#F2C98A" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <g clipPath="url(#vh-room)">
                  <rect width="560" height="600" fill="#E1E7D6" />
                  <circle cx="104" cy="206" r="130" fill="url(#vh-lampglow)" />
                  <g clipPath="url(#vh-win)">
                    <rect
                      x="170"
                      y="90"
                      width="220"
                      height="250"
                      fill="#DCE4EB"
                    />
                    <rect
                      x="170"
                      y="230"
                      width="220"
                      height="110"
                      fill="#EBD9BE"
                    />
                    <circle cx="318" cy="290" r="70" fill="url(#vh-sunglow)" />
                    <circle cx="318" cy="292" r="28" fill="#D9973A" />
                    <path
                      d="M233 290l6-52 6 52M235 270h8M236.5 254h5M239 238v-6"
                      fill="none"
                      stroke="#7D8A98"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M170 298c22-14 46-20 70-12 22 8 40 4 62-4 30-10 58-6 88 8V340H170Z"
                      fill="#AEB8C2"
                    />
                    <path
                      d="M170 318c30-12 64-14 96-6 30 8 62 6 90-2 14-4 24-4 34-2V340H170Z"
                      fill="#8E9F78"
                    />
                  </g>
                  <path
                    d="M280 100V332M178 236H382"
                    stroke="#FBF9F5"
                    strokeWidth="5"
                  />
                  <path
                    d="M178 332V202a102 102 0 0 1 204 0V332Z"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="10"
                  />
                  <rect
                    x="164"
                    y="330"
                    width="232"
                    height="10"
                    rx="2"
                    fill="#FBF9F5"
                  />
                  <path d="M352 330l2-12h16l2 12Z" fill="#7E5414" />
                  <path
                    d="M362 318c-1-8-6-12-11-12 1 6 5 10 11 12zM362 318c1-9 6-13 12-13-1 7-6 11-12 13zM362 318v-14"
                    fill="#4F6B3A"
                    stroke="#4F6B3A"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path d="M186 330l4-18 6 18Z" fill="#9C8BB8" />
                  <path d="M194 330l7-34 8 34Z" fill="#7D4F6B" />
                  <path d="M206 330l6-24 7 24Z" fill="#9C8BB8" />
                  <path d="M216 330l4-14 5 14Z" fill="#B9A9D0" />
                  <path
                    d="M201 296l2 34"
                    stroke="#B9A9D0"
                    strokeWidth="1.4"
                    opacity=".7"
                  />
                  <path d="M436 232V176a32 32 0 0 1 64 0V232Z" fill="#FBF9F5" />
                  <path d="M443 225V178a25 25 0 0 1 50 0V225Z" fill="#EFE4D3" />
                  <circle cx="468" cy="192" r="10" fill="#D9973A" />
                  <path
                    d="M443 225c8-15 18-21 28-18 8 2 14 8 22 5V225Z"
                    fill="#4F6B3A"
                  />
                  <path
                    d="M30 472V200c0-40 30-62 70-62"
                    fill="none"
                    stroke="#161515"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M78 138h44l10 30H68Z"
                    fill="#FBF9F5"
                    stroke="#ECE6DC"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="16"
                    y="468"
                    width="30"
                    height="7"
                    rx="3.5"
                    fill="#161515"
                  />
                  <rect x="0" y="470" width="560" height="8" fill="#FBF9F5" />
                  <rect x="0" y="478" width="560" height="122" fill="#E8D7BC" />
                  <path
                    d="M0 512H560M0 548H560M0 584H560"
                    stroke="#DCC7A6"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M120 478v34M300 478v34M470 478v34M60 512v36M220 512v36M400 512v36M150 548v36M330 548v36M510 548v36"
                    stroke="#DCC7A6"
                    strokeWidth="1.5"
                  />
                  <path d="M92 538h376l16 52H76Z" fill="#FBF9F5" />
                  <path
                    d="M100 552h360M94 576h372"
                    stroke="#D9973A"
                    strokeWidth="2"
                    opacity=".55"
                  />
                  <path
                    d="M150 562l8 6-8 6-8-6zM230 562l8 6-8 6-8-6zM310 562l8 6-8 6-8-6zM390 562l8 6-8 6-8-6z"
                    fill="#2E4A68"
                    opacity=".55"
                  />
                  <path
                    d="M128 386a20 20 0 0 1 20-20h264a20 20 0 0 1 20 20v52H128Z"
                    fill="#FFFFFF"
                    stroke="#E4DCCD"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="132"
                    y="430"
                    width="296"
                    height="34"
                    rx="9"
                    fill="#FBF9F5"
                    stroke="#E4DCCD"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M231 432v30M329 432v30"
                    stroke="#E4DCCD"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="110"
                    y="402"
                    width="34"
                    height="64"
                    rx="15"
                    fill="#FFFFFF"
                    stroke="#E4DCCD"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="416"
                    y="402"
                    width="34"
                    height="64"
                    rx="15"
                    fill="#FFFFFF"
                    stroke="#E4DCCD"
                    strokeWidth="1.5"
                  />
                  <rect x="142" y="464" width="6" height="8" fill="#7E5414" />
                  <rect x="412" y="464" width="6" height="8" fill="#7E5414" />
                  <rect
                    x="150"
                    y="390"
                    width="58"
                    height="44"
                    rx="12"
                    fill="#D9973A"
                    transform="rotate(-7 179 412)"
                  />
                  <g transform="rotate(2 280 416)">
                    <rect
                      x="252"
                      y="396"
                      width="56"
                      height="40"
                      rx="11"
                      fill="#DCE4EB"
                    />
                    <path
                      d="M268 416l12-10 12 10-12 10zM258 416h6M296 416h6"
                      fill="none"
                      stroke="#2E4A68"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </g>
                  <rect
                    x="354"
                    y="392"
                    width="56"
                    height="42"
                    rx="12"
                    fill="#4F6B3A"
                    transform="rotate(7 382 413)"
                  />
                  <path
                    d="M40 560c-8-48 18-86 66-88 46-2 70 34 64 88Z"
                    fill="#FFFFFF"
                    stroke="#E4DCCD"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M64 482c-10 22-12 50-8 78M88 474c-6 26-6 56-4 86M114 474c2 28 2 58 0 86M140 484c8 22 10 50 8 76"
                    fill="none"
                    stroke="#ECE6DC"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M497 474c-2-52 8-92-4-140M497 420c12-18 24-28 34-52M494 360c-14-14-24-28-28-48"
                    fill="none"
                    stroke="#635C56"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <g fill="#4F6B3A">
                    <ellipse
                      cx="452"
                      cy="338"
                      rx="12"
                      ry="4.5"
                      transform="rotate(-25 452 338)"
                    />
                    <ellipse
                      cx="490"
                      cy="350"
                      rx="12"
                      ry="4.5"
                      transform="rotate(30 490 350)"
                    />
                    <ellipse
                      cx="512"
                      cy="340"
                      rx="12"
                      ry="4.5"
                      transform="rotate(-40 512 340)"
                    />
                    <ellipse
                      cx="546"
                      cy="340"
                      rx="12"
                      ry="4.5"
                      transform="rotate(25 546 340)"
                    />
                    <ellipse
                      cx="510"
                      cy="398"
                      rx="12"
                      ry="4.5"
                      transform="rotate(-20 510 398)"
                    />
                    <ellipse
                      cx="482"
                      cy="272"
                      rx="12"
                      ry="4.5"
                      transform="rotate(15 482 272)"
                    />
                    <ellipse
                      cx="470"
                      cy="300"
                      rx="13"
                      ry="5"
                      transform="rotate(-35 470 300)"
                    />
                    <ellipse
                      cx="458"
                      cy="318"
                      rx="13"
                      ry="5"
                      transform="rotate(20 458 318)"
                    />
                    <ellipse
                      cx="486"
                      cy="288"
                      rx="13"
                      ry="5"
                      transform="rotate(-70 486 288)"
                    />
                    <ellipse
                      cx="500"
                      cy="318"
                      rx="13"
                      ry="5"
                      transform="rotate(40 500 318)"
                    />
                    <ellipse
                      cx="478"
                      cy="336"
                      rx="13"
                      ry="5"
                      transform="rotate(-15 478 336)"
                    />
                    <ellipse
                      cx="530"
                      cy="356"
                      rx="13"
                      ry="5"
                      transform="rotate(-50 530 356)"
                    />
                    <ellipse
                      cx="540"
                      cy="378"
                      rx="13"
                      ry="5"
                      transform="rotate(15 540 378)"
                    />
                    <ellipse
                      cx="518"
                      cy="378"
                      rx="13"
                      ry="5"
                      transform="rotate(60 518 378)"
                    />
                    <ellipse
                      cx="508"
                      cy="296"
                      rx="13"
                      ry="5"
                      transform="rotate(-20 508 296)"
                    />
                  </g>
                  <g fill="#8AA06F">
                    <ellipse
                      cx="462"
                      cy="300"
                      rx="12"
                      ry="4.5"
                      transform="rotate(40 462 300)"
                    />
                    <ellipse
                      cx="494"
                      cy="304"
                      rx="12"
                      ry="4.5"
                      transform="rotate(10 494 304)"
                    />
                    <ellipse
                      cx="474"
                      cy="320"
                      rx="12"
                      ry="4.5"
                      transform="rotate(-55 474 320)"
                    />
                    <ellipse
                      cx="520"
                      cy="310"
                      rx="12"
                      ry="4.5"
                      transform="rotate(35 520 310)"
                    />
                    <ellipse
                      cx="530"
                      cy="366"
                      rx="12"
                      ry="4.5"
                      transform="rotate(-80 530 366)"
                    />
                    <ellipse
                      cx="548"
                      cy="392"
                      rx="12"
                      ry="4.5"
                      transform="rotate(-30 548 392)"
                    />
                    <ellipse
                      cx="460"
                      cy="282"
                      rx="12"
                      ry="4.5"
                      transform="rotate(-10 460 282)"
                    />
                    <ellipse
                      cx="500"
                      cy="276"
                      rx="11"
                      ry="4.2"
                      transform="rotate(-45 500 276)"
                    />
                    <ellipse
                      cx="466"
                      cy="350"
                      rx="11"
                      ry="4.2"
                      transform="rotate(50 466 350)"
                    />
                    <ellipse
                      cx="524"
                      cy="390"
                      rx="11"
                      ry="4.2"
                      transform="rotate(-60 524 390)"
                    />
                    <ellipse
                      cx="536"
                      cy="324"
                      rx="11"
                      ry="4.2"
                      transform="rotate(-15 536 324)"
                    />
                  </g>
                  <path d="M470 474h56l-6 52h-44Z" fill="#7E5414" />
                  <rect
                    x="466"
                    y="470"
                    width="64"
                    height="8"
                    rx="2"
                    fill="#6A460F"
                  />
                  <circle cx="278" cy="490" r="78" fill="url(#vh-screenglow)" />
                  <rect
                    x="184"
                    y="520"
                    width="224"
                    height="12"
                    rx="4"
                    fill="#7E5414"
                  />
                  <rect x="198" y="532" width="8" height="38" fill="#282526" />
                  <rect x="386" y="532" width="8" height="38" fill="#282526" />
                  <rect
                    x="236"
                    y="464"
                    width="86"
                    height="54"
                    rx="5"
                    fill="#161515"
                  />
                  <rect
                    x="242"
                    y="470"
                    width="74"
                    height="42"
                    rx="2"
                    fill="#EFE4D3"
                  />
                  <g fill="#7E5414">
                    <rect x="249" y="477" width="28" height="3" rx="1.5" />
                    <rect
                      x="255"
                      y="484"
                      width="40"
                      height="3"
                      rx="1.5"
                      opacity=".6"
                    />
                    <rect
                      x="255"
                      y="491"
                      width="22"
                      height="3"
                      rx="1.5"
                      opacity=".6"
                    />
                    <rect x="249" y="498" width="34" height="3" rx="1.5" />
                    <rect
                      x="249"
                      y="505"
                      width="14"
                      height="3"
                      rx="1.5"
                      fill="#D9973A"
                    />
                  </g>
                  <rect
                    x="226"
                    y="516"
                    width="106"
                    height="5"
                    rx="2"
                    fill="#282526"
                  />
                  <rect
                    x="194"
                    y="508"
                    width="34"
                    height="8"
                    rx="1.5"
                    fill="#2E4A68"
                  />
                  <rect
                    x="198"
                    y="500"
                    width="28"
                    height="8"
                    rx="1.5"
                    fill="#D9973A"
                  />
                  <rect
                    x="196"
                    y="492"
                    width="31"
                    height="8"
                    rx="1.5"
                    fill="#4F6B3A"
                  />
                  <path
                    d="M352 488c0 9 5 13 2 25h16c-3-12 2-16 2-25Z"
                    fill="#B5651D"
                    stroke="#FBF9F5"
                    strokeWidth="1.5"
                    opacity=".95"
                  />
                  <rect
                    x="346"
                    y="513"
                    width="32"
                    height="5"
                    rx="2.5"
                    fill="#FBF9F5"
                  />
                  <path
                    d="M358 480c-3-5 3-8 0-13M366 480c-3-5 3-8 0-13"
                    fill="none"
                    stroke="#635C56"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    opacity=".45"
                  />
                  <path
                    d="M384 520l3-20 5 20Z"
                    fill="#FBF9F5"
                    stroke="#DCE4EB"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M392 520l4-28 6 28Z"
                    fill="#E9E3F2"
                    stroke="#B9A9D0"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M398 520l2-12 4 12Z"
                    fill="#FBF9F5"
                    stroke="#DCE4EB"
                    strokeWidth="1.2"
                  />
                  <ellipse cx="438" cy="566" rx="44" ry="15" fill="#2E4A68" />
                  <path
                    d="M404 566h68M416 560l6 6-6 6M454 560l6 6-6 6"
                    fill="none"
                    stroke="#DCE4EB"
                    strokeWidth="1.5"
                    opacity=".7"
                  />
                  <ellipse cx="438" cy="550" rx="38" ry="13" fill="#D9973A" />
                  <path
                    d="M408 550h60M420 545l5 5-5 5M450 545l5 5-5 5"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="1.5"
                    opacity=".75"
                  />
                  <ellipse cx="262" cy="584" rx="46" ry="14" fill="#8AA06F" />
                  <path
                    d="M226 584h72M240 579l5 5-5 5M276 579l5 5-5 5"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="1.5"
                    opacity=".7"
                  />
                  <path d="M488 572h48a24 18 0 0 1-48 0Z" fill="#B9893F" />
                  <path
                    d="M488 572h48"
                    stroke="#E8B53C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M540 594l-14-30"
                    stroke="#7E5414"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>
                <path
                  d="M5 600V280A275 275 0 0 1 555 280V600"
                  fill="none"
                  stroke="#FBF9F5"
                  strokeWidth="10"
                />
              </svg>
            </figure>
          </div>
        </section>
        <section className="band ink peers" id="founders">
          <div className="container">
            <div className="split io">
              <div>
                <span className="label">{t("Exited founders, together")}</span>
                <h2 className="d2">
                  {t("Every founder in the room knows something you don't.")}
                </h2>
              </div>
              <p className="lede">
                {t(
                  "The people here have built companies, sold them and started again with AI. The conversations are generous and specific: what they tried this week, what worked and what didn't."
                )}
              </p>
            </div>
            <ol className="cells c4">
              <li>
                <h3>Show up</h3>
                <p>
                  Come any day we're open. There's always a seat on the sofa and
                  someone worth meeting.
                </p>
              </li>
              <li>
                <h3>Vibe code</h3>
                <p>
                  Work on your own project at your own pace, in a room that
                  makes focus easy.
                </p>
              </li>
              <li>
                <h3>Learn how they use AI</h3>
                <p>
                  Each week you see the agents, prompts and workflows behind
                  real products, explained by the people who made them.
                </p>
              </li>
              <li>
                <h3>Prompt together</h3>
                <p>
                  Everyone adds to one shared project. It's the easiest way to
                  pick up someone else's tricks.
                </p>
              </li>
            </ol>
            <div className="peer-who io">
              <span className="label">Who it's for</span>{" "}
              <div className="row">
                <div className="pw">
                  <b>{t("Exited founder")}</b>
                  <span>
                    {t(
                      "You've had an exit and you still love making things. Members of PEF, Superfounders and similar communities are always welcome."
                    )}
                  </span>
                </div>
                <div className="pw">
                  <b>Technical background</b>
                  <span>
                    You write code and you've shipped real products. Bring
                    whatever you're working on this week.
                  </span>
                </div>
              </div>
            </div>
            {/* Communities strip: hidden on lovie.co, like the communities field of the form. */}
            {!isLovie && (
              <div className="peer-logos io">
                <span className="label">Exited founders' communities</span>
                <div className="row">
                  <img
                    src={logoPef}
                    alt="PEF"
                    width="416"
                    height="75"
                    loading="lazy"
                    style={{ height: "1.25rem", width: "auto" }}
                  />
                  <img
                    src={logoSuperfounders}
                    alt="Superfounders"
                    width="96"
                    height="119"
                    loading="lazy"
                    style={{ height: "2.5rem", width: "auto" }}
                  />
                  <img
                    src={logoYc}
                    alt="Y Combinator"
                    width="444"
                    height="92"
                    loading="lazy"
                    style={{ height: "1.5rem", width: "auto" }}
                  />
                  <img
                    src={logoTiger21}
                    alt="Tiger 21"
                    width="238"
                    height="110"
                    loading="lazy"
                    style={{ height: "1.875rem", width: "auto" }}
                  />
                  <img
                    src={logoEo}
                    alt="EO"
                    width="404"
                    height="108"
                    loading="lazy"
                    style={{ height: "1.625rem", width: "auto" }}
                  />
                  <img
                    src={logoYpo}
                    alt="YPO"
                    width="343"
                    height="124"
                    loading="lazy"
                    style={{ height: "1.625rem", width: "auto" }}
                  />
                  <img
                    src={logoStartx}
                    alt="StartX"
                    width="424"
                    height="157"
                    loading="lazy"
                    style={{ height: "1.625rem", width: "auto" }}
                  />
                  <img
                    src={logoBetaworks}
                    alt="Betaworks"
                    width="480"
                    height="123"
                    loading="lazy"
                    style={{ height: "1.5rem", width: "auto" }}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="band linen" id="vibe">
          <div className="container">
            <div className="split io">
              <div>
                <span className="label">The vibe</span>
                <h2 className="d2">
                  A house that's a pleasure to spend the day in.
                </h2>
              </div>
              <div className="split-side">
                <p className="lede">
                  Soft light, good music and plants in every room. It's designed
                  so you can stay focused for hours and still feel good at the
                  end of the day.
                </p>
                <A className="textlink" href="/biological-founder">
                  How we designed the house →
                </A>
              </div>
            </div>
            <ol className="cells c3">
              <li>
                <h3>Sit how you want</h3>
                <p>
                  Floor cushions, standing desks and a quiet corner for whenever
                  you need one.
                </p>
              </li>
              <li>
                <h3>Teas and tonics</h3>
                <p>
                  Blue lotus and dandelion tea, cold brew on tap, adaptogens and
                  nootropic blends.
                </p>
              </li>
              <li>
                <h3>Inspiration everywhere</h3>
                <p>
                  Quotes on the walls and shelves of AI-written books to get
                  lost in.
                </p>
              </li>
              <li>
                <h3>Music and scent</h3>
                <p>
                  A carefully chosen soundtrack and natural scents that make it
                  easy to settle in.
                </p>
              </li>
              <li>
                <h3>Nourishment</h3>
                <p>
                  Organic snacks and fresh fruit, with nothing processed and no
                  seed oils.
                </p>
              </li>
              <li>
                <h3>A clean home</h3>
                <p>
                  No harsh chemicals, synthetic fragrances or toxic cleaners
                  anywhere in the house.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="band sage" id="join">
          <div className="container apply">
            <div className="intro io">
              <span className="label">Join our next event</span>{" "}
              <h2 className="d2">Come to a Friday vibe night.</h2>
              <p className="lede">
                Tell us a little about yourself and what you're building, and
                we'll send you the next invite.
              </p>
              <div className="agenda" aria-label="How Friday runs">
                <div>
                  <b>6:00pm</b>
                  <span>Meet and greet</span>
                </div>
                <div>
                  <b>7:00pm</b>
                  <span>Hang, code, demo</span>
                </div>
                <div>
                  <b>8:30pm</b>
                  <span>Dinner</span>
                </div>
              </div>
            </div>
            <ApplyForm />
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
