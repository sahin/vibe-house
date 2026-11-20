// Generated from the Claude Design board "Pharmacy.dc.html" (Vibe House SF Site).
// Markup mirrors the design 1:1; styling lives in ../vh.css.
import { useCategoryFilter } from "../useCategoryFilter";
import SEO from "@/components/SEO";
import { useCopy } from "../lovieCopy";
import SiteLayout, { A } from "../SiteLayout";

export default function FoundersPharmacy() {
  const { t, copy } = useCopy();
  const { filterProps, isHidden } = useCategoryFilter();
  return (
    <SiteLayout closingTitle="Every choice intentional.">
      <SEO
        title={copy.seoCuratedTitle}
        description={copy.seoCuratedDescription}
        path="/the-founders-pharmacy"
        keywords={copy.seoCuratedKeywords}
        ogType="article"
      />
      <main id="main">
        <section className="phero phero-split">
          <div className="container rv">
            <div className="phero-text">
              <A className="crumb" href="/biological-founder">
                {t("← Back to Biological Founder")}
              </A>{" "}
              <span className="label">
                123 products · 16 categories · every choice intentional
              </span>{" "}
              <h1 className="d1" style={{ maxWidth: "12ch" }}>
                {t("The Founder's ")}
                <span className="hl">Pharmacy</span>
              </h1>
              <p className="lede">
                Every product in Vibe House was chosen with intention. Not the
                cheapest, not the trendiest: the healthiest. This is a living
                catalog of what we stock and why, from the essential oils in the
                meditation room to the bamboo sheets on every bed.
              </p>
            </div>
            <figure className="ph-fig">
              <svg
                className="ph-illu"
                viewBox="0 0 400 460"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <clipPath id="ph-arch">
                    <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                  </clipPath>
                  <clipPath id="ph-niche">
                    <path d="M60 382V170a140 140 0 0 1 280 0V382Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#ph-arch)">
                  <rect width="400" height="460" fill="#E1E7D6" />
                  <path
                    d="M60 382V170a140 140 0 0 1 280 0V382Z"
                    fill="#EFE4D3"
                  />
                  <g clipPath="url(#ph-niche)">
                    <path
                      d="M110 60v52M160 60v40M240 60v40M290 60v52"
                      stroke="#7E5414"
                      strokeWidth="2"
                    />
                    <g fill="#8AA06F">
                      <path d="M110 112c-10 6-12 22-6 32 6-4 10-18 6-32zM110 112c10 6 12 22 6 32-6-4-10-18-6-32z" />
                      <path d="M290 112c-10 6-12 22-6 32 6-4 10-18 6-32zM290 112c10 6 12 22 6 32-6-4-10-18-6-32z" />
                    </g>
                    <g fill="#D9973A">
                      <path d="M160 100c-8 4-10 18-5 26 5-3 8-14 5-26zM160 100c8 4 10 18 5 26-5-3-8-14-5-26z" />
                      <path d="M240 100c-8 4-10 18-5 26 5-3 8-14 5-26zM240 100c8 4 10 18 5 26-5-3-8-14-5-26z" />
                    </g>
                  </g>
                  <rect x="60" y="208" width="280" height="8" fill="#FBF9F5" />
                  <g>
                    <rect
                      x="82"
                      y="176"
                      width="20"
                      height="32"
                      rx="5"
                      fill="#7E5414"
                    />
                    <rect
                      x="86"
                      y="168"
                      width="12"
                      height="8"
                      rx="2"
                      fill="#161515"
                    />
                    <path
                      d="M92 168v-10"
                      stroke="#161515"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="85"
                      y="188"
                      width="14"
                      height="10"
                      rx="1.5"
                      fill="#FBF9F5"
                    />
                    <rect
                      x="108"
                      y="182"
                      width="18"
                      height="26"
                      rx="5"
                      fill="#4F6B3A"
                    />
                    <rect
                      x="112"
                      y="174"
                      width="10"
                      height="8"
                      rx="2"
                      fill="#161515"
                    />
                    <path
                      d="M117 174v-8"
                      stroke="#161515"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="132"
                      y="178"
                      width="20"
                      height="30"
                      rx="5"
                      fill="#2E4A68"
                    />
                    <rect
                      x="136"
                      y="170"
                      width="12"
                      height="8"
                      rx="2"
                      fill="#161515"
                    />
                    <path
                      d="M142 170v-9"
                      stroke="#161515"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="170"
                      y="170"
                      width="40"
                      height="38"
                      rx="4"
                      fill="#D9973A"
                    />
                    <rect
                      x="168"
                      y="166"
                      width="44"
                      height="8"
                      rx="3"
                      fill="#7E5414"
                    />
                    <rect
                      x="176"
                      y="184"
                      width="28"
                      height="12"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <rect
                      x="218"
                      y="176"
                      width="34"
                      height="32"
                      rx="4"
                      fill="#8AA06F"
                    />
                    <rect
                      x="216"
                      y="172"
                      width="38"
                      height="7"
                      rx="3"
                      fill="#4F6B3A"
                    />
                    <path
                      d="M266 208v-30a6 6 0 0 1 6-6h46a6 6 0 0 1 6 6v30Z"
                      fill="#FBF9F5"
                      opacity=".9"
                    />
                    <rect
                      x="268"
                      y="186"
                      width="54"
                      height="22"
                      fill="#E8B53C"
                    />
                    <rect
                      x="270"
                      y="166"
                      width="50"
                      height="8"
                      rx="2"
                      fill="#7E5414"
                    />
                  </g>
                  <rect x="60" y="290" width="280" height="8" fill="#FBF9F5" />
                  <g>
                    <path
                      d="M76 290v-40a7 7 0 0 1 7-7h30a7 7 0 0 1 7 7v40Z"
                      fill="#FBF9F5"
                      opacity=".9"
                    />
                    <rect
                      x="78"
                      y="262"
                      width="40"
                      height="28"
                      fill="#4F6B3A"
                    />
                    <rect
                      x="80"
                      y="236"
                      width="36"
                      height="8"
                      rx="2"
                      fill="#7E5414"
                    />
                    <path
                      d="M128 290v-34a7 7 0 0 1 7-7h26a7 7 0 0 1 7 7v34Z"
                      fill="#FBF9F5"
                      opacity=".9"
                    />
                    <rect
                      x="130"
                      y="266"
                      width="36"
                      height="24"
                      fill="#B5651D"
                    />
                    <rect
                      x="132"
                      y="242"
                      width="32"
                      height="8"
                      rx="2"
                      fill="#7E5414"
                    />
                    <path d="M182 290h36l-3-24h-30Z" fill="#B5651D" />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="190"
                        cy="250"
                        rx="13"
                        ry="5"
                        transform="rotate(-50 190 250)"
                      />
                      <ellipse
                        cx="210"
                        cy="248"
                        rx="13"
                        ry="5"
                        transform="rotate(45 210 248)"
                      />
                      <ellipse
                        cx="200"
                        cy="236"
                        rx="13"
                        ry="5"
                        transform="rotate(-88 200 236)"
                      />
                    </g>
                    <path
                      d="M232 290h56a28 22 0 0 1-56 0Z"
                      fill="#B5651D"
                      transform="translate(0 -22)"
                    />
                    <path
                      d="M232 268h56"
                      stroke="#D9973A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <rect
                      x="298"
                      y="252"
                      width="30"
                      height="38"
                      rx="4"
                      fill="#2E4A68"
                    />
                    <rect
                      x="302"
                      y="262"
                      width="22"
                      height="14"
                      rx="2"
                      fill="#DCE4EB"
                    />
                  </g>
                  <rect x="40" y="370" width="320" height="14" fill="#FBF9F5" />
                  <rect y="384" width="400" height="76" fill="#7E5414" />
                  <path
                    d="M100 384v76M200 384v76M300 384v76"
                    stroke="#6A460F"
                    strokeWidth="2"
                  />
                  <path
                    d="M138 344l14-30"
                    stroke="#D9973A"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path d="M100 346h56a28 24 0 0 1-56 0Z" fill="#2E4A68" />
                  <path
                    d="M226 334c0 9 5 14 2 26h16c-3-12 2-17 2-26Z"
                    fill="#B5651D"
                    stroke="#FBF9F5"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="218"
                    y="360"
                    width="36"
                    height="6"
                    rx="3"
                    fill="#FBF9F5"
                  />
                  <g fill="#8AA06F">
                    <circle cx="282" cy="362" r="7" />
                    <circle cx="294" cy="358" r="7" />
                    <circle cx="306" cy="362" r="7" />
                  </g>
                </g>
                <path
                  d="M4 460V200A196 196 0 0 1 396 200V460"
                  fill="none"
                  stroke="#FBF9F5"
                  strokeWidth="8"
                />
              </svg>
            </figure>
          </div>
        </section>
        <div className="filters" role="toolbar" aria-label="Filter by category">
          <div className="container">
            <button {...filterProps("all")} type="button">
              All
              <em>123</em>
            </button>
            <button {...filterProps("essential-oils")} type="button">
              Essential oils
              <em>10</em>
            </button>
            <button {...filterProps("diffusers")} type="button">
              Diffusers
              <em>2</em>
            </button>
            <button {...filterProps("teas")} type="button">
              Teas &amp; coffee
              <em>21</em>
            </button>
            <button {...filterProps("supplements")} type="button">
              Supplements
              <em>20</em>
            </button>
            <button {...filterProps("functional-beverages")} type="button">
              Functional drinks
              <em>4</em>
            </button>
            <button {...filterProps("healthy-snacks")} type="button">
              Snacks
              <em>13</em>
            </button>
            <button {...filterProps("healthy-beverages")} type="button">
              Water &amp; hydration
              <em>6</em>
            </button>
            <button {...filterProps("organic-foods")} type="button">
              Whole foods
              <em>6</em>
            </button>
            <button {...filterProps("herbal-medicine")} type="button">
              Herbal medicine
              <em>5</em>
            </button>
            <button {...filterProps("crystals")} type="button">
              Crystals
              <em>6</em>
            </button>
            <button {...filterProps("body-care")} type="button">
              Body care
              <em>5</em>
            </button>
            <button {...filterProps("sleep")} type="button">
              Sleep &amp; textiles
              <em>3</em>
            </button>
            <button {...filterProps("water-wellness")} type="button">
              Water &amp; wellness
              <em>4</em>
            </button>
            <button {...filterProps("clean-living")} type="button">
              Clean living
              <em>9</em>
            </button>
            <button {...filterProps("kitchen")} type="button">
              Kitchen
              <em>4</em>
            </button>
            <button {...filterProps("biohacking")} type="button">
              Biohacking
              <em>5</em>
            </button>
          </div>
        </div>
        <div className="band linen" style={{ paddingTop: "0", borderTop: "0" }}>
          <div className="container" id="catalog">
            <section
              hidden={isHidden("essential-oils")}
              className="cat"
              id="essential-oils"
              data-cat="essential-oils"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                    <rect
                      x="38"
                      y="52"
                      width="24"
                      height="34"
                      rx="6"
                      fill="#4F6B3A"
                    />
                    <rect
                      x="42"
                      y="64"
                      width="16"
                      height="12"
                      rx="2"
                      fill="#E1E7D6"
                    />
                    <rect
                      x="43"
                      y="44"
                      width="14"
                      height="9"
                      rx="2"
                      fill="#D9973A"
                    />
                    <path
                      d="M50 44V32"
                      stroke="#D9973A"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="num">10 products</span>
                  <h2 className="d3">Essential Oils &amp; Aromatherapy</h2>
                </div>
                <p>
                  Scent is the most primal sense — it bypasses cognition and
                  rewires the nervous system directly. We stock
                  therapeutic-grade essential oils not as luxury, but as
                  infrastructure for focus, calm, and creative flow.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07PRDSY6J?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#7E5414"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M62 73c4 4 5 7 4 9a4 4 0 0 1-8 0c-1-2 0-5 4-9z"
                        fill="#E5A957"
                      />
                      <path
                        d="M73 71c4 4 5 7 4 9a4 4 0 0 1-8 0c-1-2 0-5 4-9z"
                        fill="#E8B53C"
                      />
                      <path
                        d="M68 63c4 4 5 7 4 9a4 4 0 0 1-8 0c-1-2 0-5 4-9z"
                        fill="#E5A957"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Frankincense Essential Oil</b>
                  <span className="d">
                    Used for millennia in meditation traditions. Contains
                    boswellic acids that reduce inflammation and support immune
                    function.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07G8M3DTX?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#4F6B3A"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 86V60"
                        stroke="#4F6B3A"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <ellipse
                        cx="63"
                        cy="80"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(30 63 80)"
                      />
                      <ellipse
                        cx="73"
                        cy="77"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(-30 73 77)"
                      />
                      <ellipse
                        cx="63"
                        cy="72"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(30 63 72)"
                      />
                      <ellipse
                        cx="73"
                        cy="69"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(-30 73 69)"
                      />
                      <ellipse
                        cx="64"
                        cy="64"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(35 64 64)"
                      />
                      <ellipse
                        cx="72"
                        cy="61"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(-35 72 61)"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Rosemary Essential Oil</b>
                  <span className="d">
                    Clinically shown to improve memory and cognitive
                    performance. Contains 1,8-cineole which increases
                    acetylcholine.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00PV15BPW?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#2E4A68"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <g transform="translate(68 74) rotate(-30) scale(1.1)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#6E8A55"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Peppermint Essential Oil</b>
                  <span className="d">
                    Activates cold-sensitive receptors that increase alertness
                    and improve sustained attention and memory.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B01BKB3C98?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#8E9F78"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M62 86c0-10-2-20-8-28M68 86c0-12 0-22 2-32M74 86c0-10 4-18 10-24"
                        fill="none"
                        stroke="#8E9F78"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Lemongrass Essential Oil</b>
                  <span className="d">
                    Natural anxiolytic with antimicrobial properties. Contains
                    citral for cortisol reduction and stress relief.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00QR6SS6O?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#D9973A"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <circle cx="68" cy="74" r="11" fill="#E8B53C" />
                      <circle
                        cx="68"
                        cy="74"
                        r="7.5"
                        fill="#FBF9F5"
                        opacity=".55"
                      />
                      <path
                        d="M68 67v14M61 74h14M63 69l10 10M73 69l-10 10"
                        stroke="#E8B53C"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Lemon Essential Oil</b>
                  <span className="d">
                    Limonene-rich oil shown to elevate mood and reduce anxiety.
                    Normalizes stress hormone levels.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B079ZN8SC9?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#5A3B1E"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <ellipse cx="68" cy="74" rx="9" ry="13" fill="#5A3B1E" />
                      <path
                        d="M60 70h16M59 77h18M62 83h12M62 64h12"
                        stroke="#7E5414"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Cedarwood Essential Oil</b>
                  <span className="d">
                    Contains cedrol which increases parasympathetic nervous
                    system activity for deep, restorative sleep.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07GPXSBDW?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#7D4F6B"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <circle cx="68.0" cy="68.0" r="4.8" fill="#D98C7A" />
                      <circle cx="73.7" cy="72.1" r="4.8" fill="#D98C7A" />
                      <circle cx="71.5" cy="78.9" r="4.8" fill="#D98C7A" />
                      <circle cx="64.5" cy="78.9" r="4.8" fill="#D98C7A" />
                      <circle cx="62.3" cy="72.1" r="4.8" fill="#D98C7A" />
                      <circle cx="68" cy="74" r="3.3" fill="#E8B53C" />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Geranium Essential Oil</b>
                  <span className="d">
                    Balances hormonal fluctuations and reduces anxiety. Lowers
                    blood pressure during stressful situations.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B075KWWVR6?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#6E8A55"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 86c-12-2-16-12-12-22 10 2 14 12 12 22z"
                        fill="#6E8A55"
                      />
                      <path
                        d="M68 86c12-2 16-12 12-22-10 2-14 12-12 22z"
                        fill="#4F6B3A"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Basil Essential Oil</b>
                  <span className="d">
                    Adaptogenic oil containing linalool and eugenol. Reduces
                    mental fatigue and improves cognitive clarity.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07G8Q4WG2?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#B5651D"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <rect
                        x="56"
                        y="70"
                        width="20"
                        height="9"
                        rx="2"
                        fill="#C99A6B"
                        transform="rotate(-25 68 74)"
                      />
                      <rect
                        x="64"
                        y="77"
                        width="16"
                        height="8"
                        rx="2"
                        fill="#7E5414"
                        transform="rotate(15 68 74)"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Sandalwood Essential Oil</b>
                  <span className="d">
                    Grounding aroma used in meditation for centuries. Promotes
                    calm focus and spiritual awareness.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0F1TLQ281?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="26"
                        y="58"
                        width="16"
                        height="28"
                        rx="4"
                        fill="#7E5414"
                      />
                      <rect
                        x="29"
                        y="52"
                        width="10"
                        height="7"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M34 52v-7"
                        stroke="#161515"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                      <rect
                        x="42"
                        y="58"
                        width="16"
                        height="28"
                        rx="4"
                        fill="#4F6B3A"
                      />
                      <rect
                        x="45"
                        y="52"
                        width="10"
                        height="7"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M50 52v-7"
                        stroke="#161515"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                      <rect
                        x="58"
                        y="58"
                        width="16"
                        height="28"
                        rx="4"
                        fill="#2E4A68"
                      />
                      <rect
                        x="61"
                        y="52"
                        width="10"
                        height="7"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M66 52v-7"
                        stroke="#161515"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Majestic Pure</span>
                  </span>
                  <b>Meditation Essential Oil Set</b>
                  <span className="d">
                    Curated blend of Rosemary, Sandalwood, Clary Sage, and
                    Patchouli for meditative states.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("diffusers")}
              className="cat"
              id="diffusers"
              data-cat="diffusers"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                    <path
                      d="M30 86c0-16 9-24 20-24s20 8 20 24Z"
                      fill="#7E5414"
                    />
                    <rect
                      x="44"
                      y="56"
                      width="12"
                      height="7"
                      rx="3"
                      fill="#D9973A"
                    />
                    <circle
                      cx="48"
                      cy="44"
                      r="5"
                      fill="#7E5414"
                      opacity=".35"
                    />
                    <circle
                      cx="56"
                      cy="36"
                      r="6.5"
                      fill="#7E5414"
                      opacity=".22"
                    />
                    <circle
                      cx="46"
                      cy="30"
                      r="4"
                      fill="#7E5414"
                      opacity=".15"
                    />
                  </svg>
                  <span className="num">2 products</span>
                  <h2 className="d3">Essential Oil Diffusers</h2>
                </div>
                <p>
                  The delivery system matters as much as the oil. Waterless
                  nebulizing diffusers use pressurized air to shatter oils into
                  micro-fine particles, preserving the full molecular
                  complexity. No water dilution, no heat degradation.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CRTPVD1D?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M30 64a20 20 0 0 1 40 0Z"
                        fill="#FBF9F5"
                        opacity=".9"
                      />
                      <rect
                        x="26"
                        y="64"
                        width="48"
                        height="16"
                        rx="4"
                        fill="#7E5414"
                      />
                      <circle
                        cx="50"
                        cy="46"
                        r="5"
                        fill="#AEB8C2"
                        opacity=".6"
                      />
                      <circle
                        cx="56"
                        cy="36"
                        r="6"
                        fill="#AEB8C2"
                        opacity=".4"
                      />
                      <circle
                        cx="46"
                        cy="30"
                        r="4"
                        fill="#AEB8C2"
                        opacity=".3"
                      />
                    </svg>
                    <span className="brand">Airversa</span>
                  </span>
                  <b>Waterless Nebulizing Diffuser</b>
                  <span className="d">
                    Atomizes pure essential oil into particles under 3 microns.
                    No water means no mold risk, no bacterial growth.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B089QG2GSP?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="38"
                        y="44"
                        width="24"
                        height="42"
                        rx="10"
                        fill="#161515"
                      />
                      <rect
                        x="42"
                        y="50"
                        width="16"
                        height="22"
                        rx="6"
                        fill="#FBF9F5"
                        opacity=".35"
                      />
                      <circle
                        cx="50"
                        cy="36"
                        r="5"
                        fill="#AEB8C2"
                        opacity=".6"
                      />
                      <circle
                        cx="44"
                        cy="27"
                        r="4"
                        fill="#AEB8C2"
                        opacity=".4"
                      />
                    </svg>
                    <span className="brand">MiniDiva</span>
                  </span>
                  <b>Professional Nebulizing Diffuser</b>
                  <span className="d">
                    Clinical-grade nebulization preserving the complete volatile
                    compound profile. Adjustable output intensity.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("teas")}
              className="cat"
              id="teas"
              data-cat="teas"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                    <path
                      d="M38 42c0 14 6 20 3 36h18c-3-16 3-22 3-36Z"
                      fill="#D9973A"
                    />
                    <path
                      d="M38 42h24"
                      stroke="#2E4A68"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <rect
                      x="28"
                      y="80"
                      width="44"
                      height="7"
                      rx="3.5"
                      fill="#2E4A68"
                    />
                  </svg>
                  <span className="num">21 products</span>
                  <h2 className="d3">Teas, Coffee &amp; Herbal Infusions</h2>
                </div>
                <p>
                  Tea is not a beverage — it is a ritual of presence. Every cup
                  is a micro-meditation. The compounds in these teas —
                  L-theanine, polyphenols, adaptogens — sharpen the mind while
                  protecting the body.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09ZYFZKTZ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="46"
                        rx="3"
                        fill="#4B6FB0"
                      />
                      <rect
                        x="26"
                        y="52"
                        width="34"
                        height="14"
                        fill="#FBF9F5"
                      />
                      <circle cx="68.0" cy="68.0" r="4.8" fill="#4B6FB0" />
                      <circle cx="73.7" cy="72.1" r="4.8" fill="#4B6FB0" />
                      <circle cx="71.5" cy="78.9" r="4.8" fill="#4B6FB0" />
                      <circle cx="64.5" cy="78.9" r="4.8" fill="#4B6FB0" />
                      <circle cx="62.3" cy="72.1" r="4.8" fill="#4B6FB0" />
                      <circle cx="68" cy="74" r="3.3" fill="#E8B53C" />
                    </svg>
                    <span className="brand">Blue Tea</span>
                  </span>
                  <b>Butterfly Pea Flower Tea</b>
                  <span className="d">
                    Rich in anthocyanins. Changes color with pH. Traditionally
                    used in Ayurveda to enhance memory and neural function.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DHXMSX1M?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#2E4A68" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#2E4A68"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <circle cx="68.0" cy="68.0" r="4.8" fill="#4B6FB0" />
                      <circle cx="73.7" cy="72.1" r="4.8" fill="#4B6FB0" />
                      <circle cx="71.5" cy="78.9" r="4.8" fill="#4B6FB0" />
                      <circle cx="64.5" cy="78.9" r="4.8" fill="#4B6FB0" />
                      <circle cx="62.3" cy="72.1" r="4.8" fill="#4B6FB0" />
                      <circle cx="68" cy="74" r="3.3" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">Real Naturals</span>
                  </span>
                  <b>Butterfly Pea Flower Tea (Loose Leaf)</b>
                  <span className="d">
                    Antioxidant-rich flower tea that supports brain health and
                    cognitive function.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0C4VK7FNR?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="46"
                        rx="3"
                        fill="#8E9F78"
                      />
                      <rect
                        x="26"
                        y="52"
                        width="34"
                        height="14"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 74l9.0 0.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l6.3 6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l0.0 9.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l-6.3 6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l-9.0 0.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l-6.3 -6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l0.0 -9.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l6.3 -6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="68" cy="74" r="4.5" fill="#D9973A" />
                    </svg>
                    <span className="brand">U.S. Wellness Naturals</span>
                  </span>
                  <b>Dandelion Root Tea</b>
                  <span className="d">
                    Powerful liver detoxifier. Supports bile production and acts
                    as a prebiotic for gut microbiome health.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CYFHH37C?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#4F6B3A" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#4F6B3A"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <g transform="translate(68 74) rotate(-40) scale(1.2)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#6E8A55"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">B-Experts</span>
                  </span>
                  <b>Soursop Leaves Tea (Guanábana)</b>
                  <span className="d">
                    Contains acetogenins for potent antioxidant properties.
                    Traditional Caribbean medicine for immune support.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00EEZ2U6E?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M38 40c0 14 6 20 3 36h18c-3-16 3-22 3-36Z"
                        fill="#C9574A"
                        stroke="#FBF9F5"
                        strokeWidth="2"
                      />
                      <rect
                        x="28"
                        y="78"
                        width="44"
                        height="7"
                        rx="3.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M44 36c-3-4 3-7 0-11M54 36c-3-4 3-7 0-11"
                        stroke="#635C56"
                        strokeWidth="1.8"
                        fill="none"
                        opacity=".5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Caykur</span>
                  </span>
                  <b>Caykur Rize Turkish Black Tea</b>
                  <span className="d">
                    Grown in the mineral-rich Black Sea region. High in
                    L-theanine for calm alertness.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00KVVSMIU?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="46"
                        width="34"
                        height="40"
                        rx="4"
                        fill="#4F6B3A"
                      />
                      <rect
                        x="24"
                        y="40"
                        width="38"
                        height="9"
                        rx="3"
                        fill="#D9973A"
                      />
                      <rect
                        x="26"
                        y="60"
                        width="34"
                        height="10"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="7"
                        ry="12"
                        fill="#6E8A55"
                        transform="rotate(20 68 74)"
                      />
                      <path
                        d="M66 65l4 18"
                        stroke="#FBF9F5"
                        strokeWidth="1.4"
                        opacity=".6"
                      />
                    </svg>
                    <span className="brand">Do Ghazal</span>
                  </span>
                  <b>Do Ghazal Cardamom Tea</b>
                  <span className="d">
                    Pure Ceylon cardamom loose leaf tea. Traditional Middle
                    Eastern tea rich in antioxidants.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B073RQ11D6?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M30 82c-4-4-6-10-6-16 0-12 12-20 26-20s26 8 26 20c0 6-2 12-6 16Z"
                        fill="#2E4A68"
                      />
                      <path
                        d="M24 64c-8 0-12-8-12-14 6 0 10 4 12 8z"
                        fill="#2E4A68"
                      />
                      <rect
                        x="44"
                        y="38"
                        width="12"
                        height="8"
                        rx="3"
                        fill="#D9973A"
                      />
                      <path d="M34 60h32" stroke="#D9973A" strokeWidth="3" />
                    </svg>
                    <span className="brand">Shamshiri</span>
                  </span>
                  <b>Shamshiri Persian Tea</b>
                  <span className="d">
                    Traditional Persian tea rich in antioxidants and
                    polyphenols.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0F68QD99P?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="36"
                        y="54"
                        width="28"
                        height="7"
                        rx="3.5"
                        fill="#B5651D"
                        transform="rotate(-20 50 64)"
                      />
                      <rect
                        x="36"
                        y="62"
                        width="28"
                        height="7"
                        rx="3.5"
                        fill="#9A5418"
                        transform="rotate(-20 50 64)"
                      />
                      <rect
                        x="36"
                        y="70"
                        width="28"
                        height="7"
                        rx="3.5"
                        fill="#B5651D"
                        transform="rotate(-20 50 64)"
                      />
                    </svg>
                    <span className="brand">52USA</span>
                  </span>
                  <b>Organic Ceylon Cinnamon Sticks</b>
                  <span className="d">
                    True Ceylon cinnamon improves insulin sensitivity and blood
                    sugar regulation. Low in coumarin.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07893T3BH?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M26 86V54a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v32Z"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="28"
                        y="60"
                        width="32"
                        height="26"
                        fill="#9A6A44"
                      />
                      <rect
                        x="27"
                        y="40"
                        width="34"
                        height="9"
                        rx="3"
                        fill="#7E5414"
                      />
                      <path
                        d="M68 86V72"
                        stroke="#5A3B1E"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="68" cy="68" r="5" fill="#5A3B1E" />
                      <path
                        d="M63 65l10 6M73 65l-10 6"
                        stroke="#7E5414"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span className="brand">Anthony's Organic</span>
                  </span>
                  <b>Whole Cloves</b>
                  <span className="d">
                    Highest ORAC antioxidant score of any spice. Contains
                    eugenol, a powerful anti-inflammatory.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CJ5K1NK6?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <polygon
                        points="50.0,42.0 53.4,55.7 65.6,48.4 58.3,60.6 72.0,64.0 58.3,67.4 65.6,79.6 53.4,72.3 50.0,86.0 46.6,72.3 34.4,79.6 41.7,67.4 28.0,64.0 41.7,60.6 34.4,48.4 46.6,55.7"
                        fill="#B5651D"
                      />
                      <circle cx="50" cy="64" r="2.5" fill="#E8B53C" />
                    </svg>
                    <span className="brand">52USA</span>
                  </span>
                  <b>Star Anise</b>
                  <span className="d">
                    Natural source of shikimic acid. Contains anethole with
                    anti-fungal and anti-bacterial properties.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0FMKY5PN7?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#5A3B1E" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#5A3B1E"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="9"
                        ry="13"
                        fill="#B5651D"
                        transform="rotate(-25 68 74)"
                      />
                      <path
                        d="M65 63c-3 8-3 16 2 22M72 63c0 8 0 16-2 22"
                        stroke="#7E5414"
                        strokeWidth="1.6"
                        fill="none"
                        transform="rotate(-25 68 74)"
                      />
                    </svg>
                    <span className="brand">KORACAO</span>
                  </span>
                  <b>KORACAO Instant Ceremonial Cacao</b>
                  <span className="d">
                    High-flavanol ceremonial cacao powder. Rich in flavonoids
                    and antioxidants for mind and body.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00F7SU63G?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="24"
                        y="56"
                        width="40"
                        height="30"
                        rx="5"
                        fill="#5A3B1E"
                      />
                      <rect
                        x="22"
                        y="48"
                        width="44"
                        height="10"
                        rx="4"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="8"
                        ry="11"
                        fill="#B5651D"
                        transform="rotate(25 68 74)"
                      />
                      <path
                        d="M66 65c4 6-2 12 2 18"
                        stroke="#7E5414"
                        strokeWidth="1.8"
                        fill="none"
                        transform="rotate(25 68 74)"
                      />
                    </svg>
                    <span className="brand">Anthony's</span>
                  </span>
                  <b>Organic Cocoa Powder</b>
                  <span className="d">
                    Unsweetened organic cacao rich in flavonoids and
                    antioxidants.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B01MRZAMO9?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M30 46h28l-3 34a6 6 0 0 1-6 6H39a6 6 0 0 1-6-6Z"
                        fill="#B5651D"
                      />
                      <path
                        d="M58 50l18-6"
                        stroke="#7E5414"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M30 46l-4-4h36"
                        fill="none"
                        stroke="#B5651D"
                        strokeWidth="3"
                      />
                      <path
                        d="M40 38c-3-4 3-6 0-10M48 38c-3-4 3-6 0-10"
                        stroke="#635C56"
                        strokeWidth="1.8"
                        fill="none"
                        opacity=".5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Kurukahveci Mehmet Efendi</span>
                  </span>
                  <b>Kurukahveci Mehmet Efendi Turkish Coffee</b>
                  <span className="d">
                    Authentic Turkish coffee. Arabica beans, rich aroma,
                    original taste since 1871.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B000SMN0DO?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="24"
                        y="56"
                        width="40"
                        height="30"
                        rx="5"
                        fill="#E8B53C"
                      />
                      <rect
                        x="22"
                        y="48"
                        width="44"
                        height="10"
                        rx="4"
                        fill="#7E5414"
                      />
                      <path
                        d="M68 74l9.0 0.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l6.3 6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l0.0 9.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l-6.3 6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l-9.0 0.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l-6.3 -6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l0.0 -9.0"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 74l6.3 -6.3"
                        stroke="#E8B53C"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="68" cy="74" r="4.5" fill="#D9973A" />
                    </svg>
                    <span className="brand">Dandy Blend</span>
                  </span>
                  <b>Dandy Blend Instant Herbal Beverage</b>
                  <span className="d">
                    Caffeine-free dandelion-based coffee alternative with herbal
                    benefits.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07MX87HH9?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 40h48l-14 24H40Z" fill="#AEB8C2" />
                      <rect
                        x="38"
                        y="64"
                        width="24"
                        height="5"
                        fill="#635C56"
                      />
                      <path
                        d="M32 86h36l-4-16H36Z"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                      <path d="M50 69v8" stroke="#5A3B1E" strokeWidth="2.4" />
                    </svg>
                    <span className="brand">LHS</span>
                  </span>
                  <b>Pour Over Coffee Dripper (Stainless Steel)</b>
                  <span className="d">
                    Stainless steel paperless coffee filter. Zero waste brewing,
                    no microplastic leaching.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09MJGMT4V?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="46"
                        width="34"
                        height="40"
                        rx="4"
                        fill="#E59A3A"
                      />
                      <rect
                        x="24"
                        y="40"
                        width="38"
                        height="9"
                        rx="3"
                        fill="#161515"
                      />
                      <rect
                        x="26"
                        y="60"
                        width="34"
                        height="10"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                      <path d="M56 74a12 11 0 0 1 24 0Z" fill="#B5651D" />
                      <rect
                        x="64"
                        y="74"
                        width="8"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <circle cx="64" cy="69" r="1.8" fill="#FBF9F5" />
                      <circle cx="72" cy="67" r="1.5" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">MUD/WTR</span>
                  </span>
                  <b>MUD/WTR Morning Ritual Starter Kit</b>
                  <span className="d">
                    Mushroom-based coffee alternative with lion's mane, chaga,
                    reishi. 1/7th the caffeine.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0FSGHP1FC?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#161515" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#161515"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <path d="M56 74a12 11 0 0 1 24 0Z" fill="#C99A6B" />
                      <rect
                        x="64"
                        y="74"
                        width="8"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <circle cx="64" cy="69" r="1.8" fill="#FBF9F5" />
                      <circle cx="72" cy="67" r="1.5" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">RYZE</span>
                  </span>
                  <b>RYZE Mushroom Coffee</b>
                  <span className="d">
                    6-mushroom blend coffee with adaptogens. Sustained energy
                    without jitters or crash.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B087YHP3HQ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#B5651D" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#B5651D"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="8"
                        ry="11"
                        fill="#5A3B1E"
                        transform="rotate(25 68 74)"
                      />
                      <path
                        d="M66 65c4 6-2 12 2 18"
                        stroke="#7E5414"
                        strokeWidth="1.8"
                        fill="none"
                        transform="rotate(25 68 74)"
                      />
                      <g transform="translate(76 62) rotate(-20) scale(0.6)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#6E8A55"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">Four Sigmatic</span>
                  </span>
                  <b>Four Sigmatic Gut Health Coffee</b>
                  <span className="d">
                    Organic medium roast with turkey tail &amp; chaga mushrooms
                    plus probiotics for gut health and immune support.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0756D1D39?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#2E4A68" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#2E4A68"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="8"
                        ry="11"
                        fill="#5A3B1E"
                        transform="rotate(25 68 74)"
                      />
                      <path
                        d="M66 65c4 6-2 12 2 18"
                        stroke="#7E5414"
                        strokeWidth="1.8"
                        fill="none"
                        transform="rotate(25 68 74)"
                      />
                      <path
                        d="M78 46l-10 16h8l-3 12 11-17h-8z"
                        fill="#E8B53C"
                      />
                    </svg>
                    <span className="brand">Four Sigmatic</span>
                  </span>
                  <b>Four Sigmatic Focus Coffee</b>
                  <span className="d">
                    Organic ground coffee with lion's mane &amp; chaga mushrooms
                    for enhanced focus and cognitive performance.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B077YJ8L65?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#7D4F6B" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#7D4F6B"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="8"
                        ry="11"
                        fill="#5A3B1E"
                        transform="rotate(25 68 74)"
                      />
                      <path
                        d="M66 65c4 6-2 12 2 18"
                        stroke="#7E5414"
                        strokeWidth="1.8"
                        fill="none"
                        transform="rotate(25 68 74)"
                      />
                      <circle cx="76" cy="60" r="11" fill="#E8B53C" />
                      <circle cx="82" cy="55" r="9" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">Four Sigmatic</span>
                  </span>
                  <b>Four Sigmatic Calm Decaf Coffee</b>
                  <span className="d">
                    Swiss water decaf with reishi &amp; chaga mushroom extracts
                    for relaxation without caffeine.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B081R15GB2?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#4F6B3A" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#4F6B3A"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="8"
                        ry="11"
                        fill="#5A3B1E"
                        transform="rotate(25 68 74)"
                      />
                      <path
                        d="M66 65c4 6-2 12 2 18"
                        stroke="#7E5414"
                        strokeWidth="1.8"
                        fill="none"
                        transform="rotate(25 68 74)"
                      />
                      <path d="M64 60a12 11 0 0 1 24 0Z" fill="#D9973A" />
                      <rect
                        x="72"
                        y="60"
                        width="8"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <circle cx="72" cy="55" r="1.8" fill="#FBF9F5" />
                      <circle cx="80" cy="53" r="1.5" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">Four Sigmatic</span>
                  </span>
                  <b>Four Sigmatic Balance Adaptogen Coffee</b>
                  <span className="d">
                    Medium roast with ashwagandha, chaga, eleuthero &amp; tulsi
                    for balanced energy and stress resilience.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("supplements")}
              className="cat"
              id="supplements"
              data-cat="supplements"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                    <g transform="rotate(-40 46 62)">
                      <rect
                        x="26"
                        y="52"
                        width="40"
                        height="20"
                        rx="10"
                        fill="#4F6B3A"
                      />
                      <path d="M46 52h10a10 10 0 0 1 0 20H46Z" fill="#D9973A" />
                    </g>
                    <circle cx="66" cy="78" r="8" fill="#4F6B3A" />
                    <path
                      d="M60 78h12"
                      stroke="#E1E7D6"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="num">20 products</span>
                  <h2 className="d3">Supplements &amp; Superfoods</h2>
                </div>
                <p>
                  We do not do pills — we do whole-food nutrition in
                  concentrated form. Every supplement in the house is chosen for
                  bioavailability, clean ingredients, and evidence-based
                  formulation.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0B2ZM3FB2?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="26"
                        y="44"
                        width="42"
                        height="40"
                        rx="12"
                        fill="#8E9F78"
                      />
                      <g transform="translate(47 64) rotate(-30) scale(1)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#4F6B3A"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">GEM</span>
                  </span>
                  <b>GEM Daily Bite</b>
                  <span className="d">
                    20+ vitamins and minerals from real food sources. Contains
                    zinc, vitamin D, B-complex, turmeric, and prebiotics.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DMQM673G?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="26"
                        y="44"
                        width="42"
                        height="40"
                        rx="12"
                        fill="#D9973A"
                      />
                      <path
                        d="M49 50l-10 16h8l-3 12 11-17h-8z"
                        fill="#FBF9F5"
                      />
                    </svg>
                    <span className="brand">GEM</span>
                  </span>
                  <b>GEM Energy Bite</b>
                  <span className="d">
                    40mg natural caffeine plus ginseng and L-theanine for
                    sustained energy without jitters.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0B9NWFFYS?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="26"
                        y="44"
                        width="42"
                        height="40"
                        rx="12"
                        fill="#AEB8C2"
                      />
                      <path
                        d="M35 60c4-4 8-4 12 0s8 4 12 0M35 69c4-4 8-4 12 0s8 4 12 0"
                        fill="none"
                        stroke="#2E4A68"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">GEM</span>
                  </span>
                  <b>GEM Calm Bite</b>
                  <span className="d">
                    Magnesium L-Threonate (crosses the blood-brain barrier),
                    Golden Chlorella, and Lemon Balm for clarity.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0FCXV7K5R?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="26"
                        y="44"
                        width="42"
                        height="40"
                        rx="12"
                        fill="#2E4A68"
                      />
                      <circle cx="46" cy="64" r="11" fill="#E8B53C" />
                      <circle cx="52" cy="59" r="9" fill="#2E4A68" />
                    </svg>
                    <span className="brand">GEM</span>
                  </span>
                  <b>GEM Sleep Aid Nighttime Bite</b>
                  <span className="d">
                    Melatonin-free sleep aid with L-Theanine and magnesium for
                    restorative rest.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B075DNLV3P?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="36"
                        rx="5"
                        fill="#4F6B3A"
                      />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="11"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="31"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="7"
                        ry="12"
                        fill="#9DB06A"
                        transform="rotate(20 68 74)"
                      />
                      <path
                        d="M66 65l4 18"
                        stroke="#FBF9F5"
                        strokeWidth="1.4"
                        opacity=".6"
                      />
                    </svg>
                    <span className="brand">Kailash Herbals</span>
                  </span>
                  <b>Organic Haritaki Capsules</b>
                  <span className="d">
                    Known as the 'King of Medicines' in Ayurveda. Supports gut
                    motility and cognitive function.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07N8KV85Y?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#6E8A55" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#6E8A55"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="7"
                        ry="12"
                        fill="#9DB06A"
                        transform="rotate(20 68 74)"
                      />
                      <path
                        d="M66 65l4 18"
                        stroke="#FBF9F5"
                        strokeWidth="1.4"
                        opacity=".6"
                      />
                    </svg>
                    <span className="brand">Jiva Organics</span>
                  </span>
                  <b>Organic Haritaki Powder</b>
                  <span className="d">
                    USDA certified organic. One of three fruits in Triphala, the
                    cornerstone of Ayurvedic detoxification.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B071S8D69C?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="24"
                        y="56"
                        width="40"
                        height="30"
                        rx="5"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="22"
                        y="48"
                        width="44"
                        height="10"
                        rx="4"
                        fill="#D9973A"
                      />
                      <path
                        d="M60 68L76 68M60 68L68 82M76 68L68 82"
                        stroke="#D98C7A"
                        strokeWidth="2.4"
                      />
                      <circle cx="60" cy="68" r="4.5" fill="#D98C7A" />
                      <circle cx="76" cy="68" r="4.5" fill="#D9973A" />
                      <circle cx="68" cy="82" r="4.5" fill="#D98C7A" />
                    </svg>
                    <span className="brand">Anthony's</span>
                  </span>
                  <b>Collagen Peptide Powder</b>
                  <span className="d">
                    Grass-fed collagen peptides for skin, joints, and gut
                    health.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CTJ67LK1?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="24"
                        y="56"
                        width="40"
                        height="30"
                        rx="5"
                        fill="#161515"
                      />
                      <rect
                        x="22"
                        y="48"
                        width="44"
                        height="10"
                        rx="4"
                        fill="#D9973A"
                      />
                      <ellipse
                        cx="68"
                        cy="74"
                        rx="9"
                        ry="13"
                        fill="#B5651D"
                        transform="rotate(-25 68 74)"
                      />
                      <path
                        d="M65 63c-3 8-3 16 2 22M72 63c0 8 0 16-2 22"
                        stroke="#7E5414"
                        strokeWidth="1.6"
                        fill="none"
                        transform="rotate(-25 68 74)"
                      />
                    </svg>
                    <span className="brand">Black Forest</span>
                  </span>
                  <b>High Flavanol Cocoa Powder</b>
                  <span className="d">
                    Concentrated flavanols and flavonoids for cardiovascular and
                    cognitive support.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0858L173M?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="52"
                        width="26"
                        height="34"
                        rx="6"
                        fill="#635C56"
                      />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="35"
                        y="44"
                        width="16"
                        height="9"
                        rx="2"
                        fill="#161515"
                      />
                      <path
                        d="M43 44V33"
                        stroke="#161515"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 61c6 7 10 12 10 17a10 10 0 0 1-20 0c0-5 4-10 10-17z"
                        fill="#2E4A68"
                      />
                    </svg>
                    <span className="brand">Dr. Berg</span>
                  </span>
                  <b>Trace Minerals Enhanced Complex</b>
                  <span className="d">
                    70+ trace minerals for comprehensive micronutrient support.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0BDLT1HFM?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M30 40h26l2 46H28Z" fill="#4B6FB0" />
                      <path
                        d="M30 40l13 6 13-6"
                        fill="none"
                        stroke="#FBF9F5"
                        strokeWidth="2"
                      />
                      <rect
                        x="33"
                        y="58"
                        width="20"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="57"
                        y="75"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(15 62 80)"
                      />
                      <rect
                        x="69"
                        y="73"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(-20 74 78)"
                      />
                      <rect
                        x="63"
                        y="64"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(40 68 69)"
                      />
                    </svg>
                    <span className="brand">Fast Lyte</span>
                  </span>
                  <b>Fasting Electrolyte Supplement</b>
                  <span className="d">
                    Clean electrolyte formula for optimal hydration and mineral
                    balance during fasting.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B01DPW5DC4?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#3F7F6A" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#3F7F6A"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <circle cx="68" cy="74" r="12" fill="#3F7F6A" />
                      <path
                        d="M68 74a3 3 0 0 1 6 0a6 6 0 0 1-12 0a9 9 0 0 1 18 0"
                        fill="none"
                        stroke="#FBF9F5"
                        strokeWidth="1.8"
                      />
                    </svg>
                    <span className="brand">Micro Ingredients</span>
                  </span>
                  <b>Organic Spirulina</b>
                  <span className="d">
                    Superfood algae rich in protein, vitamins, and antioxidants.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0BTY4RJ4H?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="36"
                        rx="5"
                        fill="#D9973A"
                      />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="11"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="31"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <ellipse
                        cx="63"
                        cy="74"
                        rx="3"
                        ry="5"
                        fill="#E8B53C"
                        transform="rotate(-20 63 74)"
                      />
                      <ellipse
                        cx="71"
                        cy="70"
                        rx="3"
                        ry="5"
                        fill="#E8B53C"
                        transform="rotate(15 71 70)"
                      />
                      <ellipse
                        cx="73"
                        cy="80"
                        rx="3"
                        ry="5"
                        fill="#E8B53C"
                        transform="rotate(40 73 80)"
                      />
                      <ellipse
                        cx="66"
                        cy="82"
                        rx="3"
                        ry="5"
                        fill="#E8B53C"
                        transform="rotate(-10 66 82)"
                      />
                    </svg>
                    <span className="brand">Neurogan</span>
                  </span>
                  <b>Spermidine Supplement</b>
                  <span className="d">
                    Longevity supplement that promotes cellular autophagy and
                    anti-aging.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00HAMTFYI?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M30 40h26l2 46H28Z" fill="#D9973A" />
                      <path
                        d="M30 40l13 6 13-6"
                        fill="none"
                        stroke="#FBF9F5"
                        strokeWidth="2"
                      />
                      <rect
                        x="33"
                        y="58"
                        width="20"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <circle cx="68" cy="74" r="11" fill="#E59A3A" />
                      <circle
                        cx="68"
                        cy="74"
                        r="7.5"
                        fill="#FBF9F5"
                        opacity=".55"
                      />
                      <path
                        d="M68 67v14M61 74h14M63 69l10 10M73 69l-10 10"
                        stroke="#E59A3A"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span className="brand">Sufficient-C</span>
                  </span>
                  <b>High Dose Vitamin C Immune-Ade</b>
                  <span className="d">
                    High-dose vitamin C with L-lysine and bromelain for immune
                    support.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B096YRXJKZ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="36"
                        rx="5"
                        fill="#2E4A68"
                      />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="11"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="31"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M60 68L76 68M60 68L68 82M76 68L68 82"
                        stroke="#2E4A68"
                        strokeWidth="2.4"
                      />
                      <circle cx="60" cy="68" r="4.5" fill="#2E4A68" />
                      <circle cx="76" cy="68" r="4.5" fill="#D9973A" />
                      <circle cx="68" cy="82" r="4.5" fill="#2E4A68" />
                    </svg>
                    <span className="brand">ProHealth Longevity</span>
                  </span>
                  <b>NMN Pro</b>
                  <span className="d">
                    NMN supplement for NAD+ production — key longevity molecule
                    for cellular energy.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DMTGWTM1?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="36"
                        rx="5"
                        fill="#7D4F6B"
                      />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="11"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="31"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <circle cx="63" cy="69" r="4.2" fill="#7D4F6B" />
                      <circle cx="71" cy="69" r="4.2" fill="#7D4F6B" />
                      <circle cx="67" cy="75" r="4.2" fill="#7D4F6B" />
                      <circle cx="75" cy="75" r="4.2" fill="#7D4F6B" />
                      <circle cx="71" cy="81" r="4.2" fill="#7D4F6B" />
                      <circle cx="63" cy="79" r="4.2" fill="#7D4F6B" />
                      <path d="M68 65l3-5" stroke="#4F6B3A" strokeWidth="2" />
                    </svg>
                    <span className="brand">Force Factor</span>
                  </span>
                  <b>NAD+ with NMN, Resveratrol &amp; Spermidine</b>
                  <span className="d">
                    All-in-one longevity stack combining NAD+, resveratrol,
                    spermidine, and astaxanthin.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://getwonderfeel.com/product/wonderfeel-youngr-nmn/"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path
                        d="M26 86V54a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v32Z"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="28"
                        y="60"
                        width="32"
                        height="26"
                        fill="#4B6FB0"
                      />
                      <rect
                        x="27"
                        y="40"
                        width="34"
                        height="9"
                        rx="3"
                        fill="#161515"
                      />
                      <path
                        d="M60 68L76 68M60 68L68 82M76 68L68 82"
                        stroke="#161515"
                        strokeWidth="2.4"
                      />
                      <circle cx="60" cy="68" r="4.5" fill="#161515" />
                      <circle cx="76" cy="68" r="4.5" fill="#4B6FB0" />
                      <circle cx="68" cy="82" r="4.5" fill="#161515" />
                    </svg>
                    <span className="brand">Wonderfeel</span>
                  </span>
                  <b>Youngr NMN</b>
                  <span className="d">
                    Clinically studied NMN with ergothioneine and olive fruit
                    extract — premium longevity formula.
                  </span>
                  <span className="go">View on Wonderfeel ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DDCT3NP5?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="36"
                        rx="5"
                        fill="#161515"
                      />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="11"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="31"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 61c1.5 9 4.5 11.5 13 13-8.5 1.5-11.5 4-13 13-1.5-9-4.5-11.5-13-13 8.5-1.5 11.5-4 13-13z"
                        fill="#D9973A"
                      />
                    </svg>
                    <span className="brand">Biostack</span>
                  </span>
                  <b>NAD Regen</b>
                  <span className="d">
                    Advanced NAD regeneration supplement with spermidine synergy
                    for cellular renewal.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09DGTBBSF?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="36"
                        rx="5"
                        fill="#8E9F78"
                      />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="11"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="31"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <circle cx="68.0" cy="68.0" r="4.8" fill="#FBF9F5" />
                      <circle cx="73.7" cy="72.1" r="4.8" fill="#FBF9F5" />
                      <circle cx="71.5" cy="78.9" r="4.8" fill="#FBF9F5" />
                      <circle cx="64.5" cy="78.9" r="4.8" fill="#FBF9F5" />
                      <circle cx="62.3" cy="72.1" r="4.8" fill="#FBF9F5" />
                      <circle cx="68" cy="74" r="3.3" fill="#E8B53C" />
                    </svg>
                    <span className="brand">Double Wood</span>
                  </span>
                  <b>Apigenin</b>
                  <span className="d">
                    Apigenin for sleep — Andrew Huberman recommended. Promotes
                    deep sleep without grogginess.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09WWK4R2C?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="36"
                        rx="5"
                        fill="#4B6FB0"
                      />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="11"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="31"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <polygon
                        points="68,62 78,68 78,80 68,86 58,80 58,68"
                        fill="#AEB8C2"
                      />
                      <path
                        d="M68 62v24M58 68l20 12"
                        stroke="#FBF9F5"
                        strokeWidth="1.4"
                        opacity=".6"
                      />
                    </svg>
                    <span className="brand">Momentous</span>
                  </span>
                  <b>Magnesium L-Threonate</b>
                  <span className="d">
                    Crosses blood-brain barrier — Huberman Lab recommended for
                    sleep and cognition.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B005F1ATJQ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#AEB8C2" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#AEB8C2"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <polygon
                        points="62,72 68,81 57,82"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                      <polygon
                        points="73,66 79,75 68,76"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                      <polygon
                        points="71,78 77,87 66,88"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                    </svg>
                    <span className="brand">Ancient Minerals</span>
                  </span>
                  <b>Magnesium Bath Flakes</b>
                  <span className="d">
                    Transdermal magnesium absorption for muscle recovery and
                    deep sleep.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("functional-beverages")}
              className="cat"
              id="functional-beverages"
              data-cat="functional-beverages"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                    <path
                      d="M36 40h28v42a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4Z"
                      fill="#7E5414"
                    />
                    <path d="M38 34h24l2 6H36Z" fill="#7E5414" opacity=".7" />
                    <rect x="36" y="54" width="28" height="12" fill="#D9973A" />
                  </svg>
                  <span className="num">4 products</span>
                  <h2 className="d3">Functional Beverages</h2>
                </div>
                <p>
                  Every drink in the house earns its place. Prebiotic sodas,
                  adaptogen seltzers, real-fruit sparkling water — beverages
                  that nourish the gut, sharpen the mind, or calm the nervous
                  system.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DWH3NDP5?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M28 44h30v38a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4Z"
                        fill="#6E8A55"
                      />
                      <path d="M30 38h26l2 6H28Z" fill="#635C56" />
                      <rect
                        x="28"
                        y="58"
                        width="30"
                        height="10"
                        fill="#FBF9F5"
                      />
                      <circle
                        cx="63"
                        cy="80"
                        r="5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                      <circle
                        cx="73"
                        cy="72"
                        r="4"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                      <circle
                        cx="66"
                        cy="65"
                        r="3"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                      <circle
                        cx="76"
                        cy="83"
                        r="3"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span className="brand">OLIPOP</span>
                  </span>
                  <b>OLIPOP Prebiotic Soda</b>
                  <span className="d">
                    Prebiotic soda with gut health benefits — healthy soda
                    alternative with only 2-5g sugar.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CZY3XG8H?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M28 44h30v38a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4Z"
                        fill="#D98C7A"
                      />
                      <path d="M30 38h26l2 6H28Z" fill="#635C56" />
                      <rect
                        x="28"
                        y="58"
                        width="30"
                        height="10"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 86c-10-6-14-14-10-20 4-4 16-4 20 0 4 6 0 14-10 20z"
                        fill="#C9574A"
                      />
                      <path d="M61 65l7 4 7-4-3 6h-8z" fill="#4F6B3A" />
                      <g fill="#FBF9F5" opacity=".7">
                        <circle cx="64" cy="74" r="1" />
                        <circle cx="72" cy="76" r="1" />
                        <circle cx="68" cy="80" r="1" />
                      </g>
                    </svg>
                    <span className="brand">Poppi</span>
                  </span>
                  <b>Poppi Sparkling Prebiotic Soda</b>
                  <span className="d">
                    Apple cider vinegar-based prebiotic soda for gut health and
                    digestion.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DCZWTK5Q?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M28 44h30v38a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4Z"
                        fill="#4B6FB0"
                      />
                      <path d="M30 38h26l2 6H28Z" fill="#635C56" />
                      <rect
                        x="28"
                        y="58"
                        width="30"
                        height="10"
                        fill="#FBF9F5"
                      />
                      <g transform="translate(68 74) rotate(-30) scale(1.1)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#4F6B3A"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">TRIP</span>
                  </span>
                  <b>TRIP Adaptogen Seltzer</b>
                  <span className="d">
                    Contains adaptogens (ashwagandha, lion's mane) for stress
                    relief and focus.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0F1DTCQZ9?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M28 44h30v38a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4Z"
                        fill="#D9973A"
                      />
                      <path d="M30 38h26l2 6H28Z" fill="#635C56" />
                      <rect
                        x="28"
                        y="58"
                        width="30"
                        height="10"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 61c1.5 9 4.5 11.5 13 13-8.5 1.5-11.5 4-13 13-1.5-9-4.5-11.5-13-13 8.5-1.5 11.5-4 13-13z"
                        fill="#FBF9F5"
                      />
                    </svg>
                    <span className="brand">Juni</span>
                  </span>
                  <b>Juni Sparkling Adaptogen Drink</b>
                  <span className="d">
                    Zero sugar sparkling adaptogen drink with mushroom complex
                    for focus and calm.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("healthy-snacks")}
              className="cat"
              id="healthy-snacks"
              data-cat="healthy-snacks"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                    <ellipse cx="42" cy="58" rx="7" ry="5" fill="#D9973A" />
                    <ellipse
                      cx="55"
                      cy="56"
                      rx="7"
                      ry="5"
                      fill="#2E4A68"
                      opacity=".6"
                    />
                    <ellipse cx="50" cy="64" rx="7" ry="5" fill="#D9973A" />
                    <path d="M24 64h52a26 22 0 0 1-52 0Z" fill="#2E4A68" />
                  </svg>
                  <span className="num">13 products</span>
                  <h2 className="d3">Healthy Snacks</h2>
                </div>
                <p>
                  Snacking should build you up, not break you down.
                  Seed-oil-free chips, freeze-dried fruit, whole olives — every
                  snack here is a single-ingredient or clean-label choice that
                  satisfies without inflammation.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07NRPGD9N?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#E8B53C" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#E8B53C"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M58 82c-2-14 8-22 20-20-2 14-10 22-20 20z"
                        fill="#E59A3A"
                      />
                      <path
                        d="M62 78c4-6 8-10 14-12"
                        stroke="#E8B53C"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="brand">Solely</span>
                  </span>
                  <b>Solely Organic Dried Mango</b>
                  <span className="d">
                    Single ingredient — organic mango. No added sugar, fiber
                    slows glucose absorption.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0GM1TN9LG?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#C9574A" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#C9574A"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M64 84c-10-6-14-14-10-20 4-4 16-4 20 0 4 6 0 14-10 20z"
                        fill="#C9574A"
                      />
                      <path d="M57 63l7 4 7-4-3 6h-8z" fill="#4F6B3A" />
                      <g fill="#FBF9F5" opacity=".7">
                        <circle cx="60" cy="72" r="1" />
                        <circle cx="68" cy="74" r="1" />
                        <circle cx="64" cy="78" r="1" />
                      </g>
                      <circle cx="76" cy="64" r="7" fill="#E59A3A" />
                      <circle
                        cx="76"
                        cy="64"
                        r="5"
                        fill="#FBF9F5"
                        opacity=".55"
                      />
                      <path
                        d="M76 57v14M69 64h14M71 59l10 10M81 59l-10 10"
                        stroke="#E59A3A"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span className="brand">Claros Farm</span>
                  </span>
                  <b>
                    Freeze-Dried Fruit Variety (Strawberries &amp; Tangerines)
                  </b>
                  <span className="d">
                    Preserves nutrients without additives — clean snacking at
                    its best.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0FCGDS5LW?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#7D4F6B" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#7D4F6B"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 62c3 5 12 10 12 18a12 10 0 0 1-24 0c0-8 9-13 12-18z"
                        fill="#7D4F6B"
                      />
                      <ellipse cx="68" cy="81" rx="6" ry="5" fill="#D98C7A" />
                    </svg>
                    <span className="brand">Drybox</span>
                  </span>
                  <b>Freeze-Dried Fig Slices</b>
                  <span className="d">
                    Nutrient-dense dried figs with no additives or
                    preservatives.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0BYKBCHFY?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="46"
                        rx="3"
                        fill="#6E8A55"
                      />
                      <rect
                        x="26"
                        y="52"
                        width="34"
                        height="14"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M64 84c-10-6-14-14-10-20 4-4 16-4 20 0 4 6 0 14-10 20z"
                        fill="#C9574A"
                      />
                      <path d="M57 63l7 4 7-4-3 6h-8z" fill="#4F6B3A" />
                      <g fill="#FBF9F5" opacity=".7">
                        <circle cx="60" cy="72" r="1" />
                        <circle cx="68" cy="74" r="1" />
                        <circle cx="64" cy="78" r="1" />
                      </g>
                      <path
                        d="M70 68c-1-8 4-12 11-11-1 8-6 12-11 11z"
                        fill="#E59A3A"
                      />
                    </svg>
                    <span className="brand">Crispy Green</span>
                  </span>
                  <b>Freeze-Dried Fruit Variety Pack</b>
                  <span className="d">
                    Single-ingredient freeze-dried fruit snacks — nothing added,
                    nothing removed.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CQ8VMXJD?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M26 86V54a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v32Z"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="28"
                        y="60"
                        width="32"
                        height="26"
                        fill="#C9574A"
                      />
                      <rect
                        x="27"
                        y="40"
                        width="34"
                        height="9"
                        rx="3"
                        fill="#7E5414"
                      />
                      <path
                        d="M68 86c-10-6-14-14-10-20 4-4 16-4 20 0 4 6 0 14-10 20z"
                        fill="#C9574A"
                      />
                      <path d="M61 65l7 4 7-4-3 6h-8z" fill="#4F6B3A" />
                      <g fill="#FBF9F5" opacity=".7">
                        <circle cx="64" cy="74" r="1" />
                        <circle cx="72" cy="76" r="1" />
                        <circle cx="68" cy="80" r="1" />
                      </g>
                    </svg>
                    <span className="brand">Panfruit</span>
                  </span>
                  <b>Organic Freeze-Dried Strawberries</b>
                  <span className="d">
                    100% organic strawberries, freeze-dried to preserve vitamins
                    and antioxidants.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00R8352XW?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M26 86V54a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v32Z"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="28"
                        y="60"
                        width="32"
                        height="26"
                        fill="#8E9F78"
                      />
                      <rect
                        x="27"
                        y="40"
                        width="34"
                        height="9"
                        rx="3"
                        fill="#7E5414"
                      />
                      <ellipse
                        cx="63"
                        cy="76"
                        rx="6"
                        ry="8"
                        fill="#8E9F78"
                        transform="rotate(25 63 76)"
                      />
                      <circle cx="64" cy="74" r="1.6" fill="#C9574A" />
                      <ellipse
                        cx="74"
                        cy="70"
                        rx="6"
                        ry="8"
                        fill="#8E9F78"
                        transform="rotate(25 74 70)"
                      />
                      <circle cx="75" cy="68" r="1.6" fill="#C9574A" />
                    </svg>
                    <span className="brand">Poshi</span>
                  </span>
                  <b>Natural Whole Pitted Olives</b>
                  <span className="d">
                    Whole pitted olives as healthy snacks — keto and vegan
                    friendly, rich in healthy fats.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00TJ5CHSK?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="20"
                        y="52"
                        width="58"
                        height="24"
                        rx="10"
                        fill="#E5C48E"
                        transform="rotate(-8 50 64)"
                      />
                      <path
                        d="M50 72V46"
                        stroke="#4F6B3A"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <ellipse
                        cx="45"
                        cy="66"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(30 45 66)"
                      />
                      <ellipse
                        cx="55"
                        cy="63"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(-30 55 63)"
                      />
                      <ellipse
                        cx="45"
                        cy="58"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(30 45 58)"
                      />
                      <ellipse
                        cx="55"
                        cy="55"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(-30 55 55)"
                      />
                      <ellipse
                        cx="46"
                        cy="50"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(35 46 50)"
                      />
                      <ellipse
                        cx="54"
                        cy="47"
                        rx="5"
                        ry="2"
                        fill="#4F6B3A"
                        transform="rotate(-35 54 47)"
                      />
                    </svg>
                    <span className="brand">Rustic Bakery</span>
                  </span>
                  <b>Rosemary Olive Oil Organic Flatbread</b>
                  <span className="d">
                    Organic artisan flatbread with rosemary and olive oil.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B08KT73KXT?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="46"
                        width="34"
                        height="34"
                        rx="4"
                        fill="#E5C48E"
                      />
                      <rect
                        x="40"
                        y="54"
                        width="34"
                        height="34"
                        rx="4"
                        fill="#D6B07A"
                      />
                      <circle cx="48" cy="62" r="1.6" fill="#5A3B1E" />
                      <circle cx="58" cy="66" r="1.6" fill="#5A3B1E" />
                      <circle cx="66" cy="74" r="1.6" fill="#5A3B1E" />
                      <circle cx="50" cy="78" r="1.6" fill="#5A3B1E" />
                      <circle cx="62" cy="82" r="1.6" fill="#5A3B1E" />
                    </svg>
                    <span className="brand">Simple Mills</span>
                  </span>
                  <b>Seed Crackers</b>
                  <span className="d">
                    Seed-based crackers — grain-free, clean ingredients, no seed
                    oils.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0FHJ8ZD35?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#4F6B3A" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#4F6B3A"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 61c6 0 9 8 11 14a11 11 0 0 1-22 0c2-6 5-14 11-14z"
                        fill="#4F6B3A"
                      />
                      <path
                        d="M68 65c4 0 6 6 7 10a7 7 0 0 1-14 0c1-4 3-10 7-10z"
                        fill="#C9D48A"
                      />
                      <circle cx="68" cy="77" r="4" fill="#5A3B1E" />
                    </svg>
                    <span className="brand">Mark's</span>
                  </span>
                  <b>Avocado Oil Potato Chips</b>
                  <span className="d">
                    Kettle-cooked in avocado oil instead of seed oils — clean
                    chip alternative.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0F9MRJ1LL?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#D9973A" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#D9973A"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M56 74c4-10 18-12 24-2-4 10-18 12-24 2z"
                        fill="#E8B53C"
                      />
                      <circle cx="65" cy="73" r="1.4" fill="#D9973A" />
                      <circle cx="72" cy="76" r="1.4" fill="#D9973A" />
                    </svg>
                    <span className="brand">Vandy</span>
                  </span>
                  <b>Vandy Crisps Potato Chips</b>
                  <span className="d">
                    Seed-oil-free chips made with tallow — the ancestral cooking
                    fat.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0GHPD19ZL?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="20"
                        y="56"
                        width="60"
                        height="18"
                        rx="5"
                        fill="#7E5414"
                        transform="rotate(-12 50 65)"
                      />
                      <rect
                        x="38"
                        y="57"
                        width="22"
                        height="16"
                        fill="#FBF9F5"
                        transform="rotate(-12 50 65)"
                      />
                    </svg>
                    <span className="brand">Atlas</span>
                  </span>
                  <b>Atlas Real Food Protein Bar</b>
                  <span className="d">
                    20g clean protein bar with no seed oils — real food
                    ingredients only.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0GCPDB6GV?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M24 74c4-14 16-24 30-26 10-2 20 4 22 10-10 0-14 10-28 16-10 4-18 6-24 0z"
                        fill="#6E8A55"
                      />
                      <circle cx="38" cy="68" r="5" fill="#8E9F78" />
                      <circle cx="50" cy="62" r="5" fill="#8E9F78" />
                      <circle cx="62" cy="56" r="5" fill="#8E9F78" />
                    </svg>
                    <span className="brand">Biena</span>
                  </span>
                  <b>Crispy Roasted Edamame</b>
                  <span className="d">
                    Plant-based protein snack roasted without seed oils —
                    crunchy and satisfying.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00D8DYFGQ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="46"
                        width="34"
                        height="40"
                        rx="4"
                        fill="#2E4A68"
                      />
                      <rect
                        x="24"
                        y="40"
                        width="38"
                        height="9"
                        rx="3"
                        fill="#D9973A"
                      />
                      <rect
                        x="26"
                        y="60"
                        width="34"
                        height="10"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                      <ellipse
                        cx="63"
                        cy="76"
                        rx="6"
                        ry="8"
                        fill="#161515"
                        transform="rotate(25 63 76)"
                      />
                      <circle cx="64" cy="74" r="1.6" fill="#635C56" />
                      <ellipse
                        cx="74"
                        cy="70"
                        rx="6"
                        ry="8"
                        fill="#161515"
                        transform="rotate(25 74 70)"
                      />
                      <circle cx="75" cy="68" r="1.6" fill="#635C56" />
                      <ellipse
                        cx="70"
                        cy="83"
                        rx="6"
                        ry="8"
                        fill="#161515"
                        transform="rotate(25 70 83)"
                      />
                      <circle cx="71" cy="81" r="1.6" fill="#635C56" />
                    </svg>
                    <span className="brand">Marmarabirlik</span>
                  </span>
                  <b>Marmarabirlik Black Olives</b>
                  <span className="d">
                    Premium Turkish black olives — rich in healthy
                    monounsaturated fats and polyphenols.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("healthy-beverages")}
              className="cat"
              id="healthy-beverages"
              data-cat="healthy-beverages"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                    <path d="M40 50h28l-4 36H44Z" fill="#FBF9F5" />
                    <path d="M42 64h24l-2 22H44Z" fill="#4F6B3A" />
                    <path
                      d="M34 30c5 6 8 11 8 15a8 8 0 0 1-16 0c0-4 3-9 8-15z"
                      fill="#D9973A"
                    />
                  </svg>
                  <span className="num">6 products</span>
                  <h2 className="d3">Healthy Beverages</h2>
                </div>
                <p>
                  Hydration is the foundation. We stock sparkling waters made
                  with real fruit, premium spring water in glass bottles, and
                  mineral-rich options that make staying hydrated effortless and
                  enjoyable.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07GJPG6HW?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path
                        d="M30 86V52c0-6 4-9 6-12V34h10v6c2 3 6 6 6 12V86Z"
                        fill="#7FA58A"
                      />
                      <rect
                        x="35"
                        y="30"
                        width="12"
                        height="6"
                        rx="2"
                        fill="#635C56"
                      />
                      <rect
                        x="32"
                        y="60"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                        opacity=".8"
                      />
                    </svg>
                    <span className="brand">Mountain Valley</span>
                  </span>
                  <b>Mountain Valley Spring Water (Glass, 33oz)</b>
                  <span className="d">
                    Sourced from a protected spring since 1871. Naturally
                    alkaline with balanced mineral content. Glass bottles.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07ZPGDC77?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path
                        d="M30 86V64c0-6 4-9 6-12V46h10v6c2 3 6 6 6 12V86Z"
                        fill="#7FA58A"
                      />
                      <rect
                        x="35"
                        y="42"
                        width="12"
                        height="6"
                        rx="2"
                        fill="#635C56"
                      />
                      <rect
                        x="32"
                        y="72"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                        opacity=".8"
                      />
                      <path
                        d="M68 68.9c6 7 10 12 10 17a10 10 0 0 1-20 0c0-5 4-10 10-17z"
                        fill="#4B6FB0"
                      />
                    </svg>
                    <span className="brand">Mountain Valley</span>
                  </span>
                  <b>Mountain Valley Spring Water (Glass, 16oz)</b>
                  <span className="d">
                    Premium natural spring water in glass bottles — mineral-rich
                    hydration.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07692NZXB?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M28 50l6-12h20l6 12v36H28Z" fill="#D9973A" />
                      <path d="M28 50h32" stroke="#FBF9F5" strokeWidth="2" />
                      <rect
                        x="32"
                        y="58"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M58 82c-2-14 8-22 20-20-2 14-10 22-20 20z"
                        fill="#E59A3A"
                      />
                      <path
                        d="M62 78c4-6 8-10 14-12"
                        stroke="#E8B53C"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="brand">C2O</span>
                  </span>
                  <b>C2O Coconut Water (Mango)</b>
                  <span className="d">
                    Fresh coconut water with natural electrolytes and mango
                    flavor.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00FS35V1W?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M28 50l6-12h20l6 12v36H28Z" fill="#6E8A55" />
                      <path d="M28 50h32" stroke="#FBF9F5" strokeWidth="2" />
                      <rect
                        x="32"
                        y="58"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <circle cx="68" cy="74" r="12" fill="#5A3B1E" />
                      <circle cx="68" cy="74" r="8" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">C2O</span>
                  </span>
                  <b>C2O Coconut Water (Original)</b>
                  <span className="d">
                    Pure coconut water — natural electrolytes and potassium for
                    hydration.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DX2MSXPV?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M28 50l6-12h20l6 12v36H28Z" fill="#8E9F78" />
                      <path d="M28 50h32" stroke="#FBF9F5" strokeWidth="2" />
                      <rect
                        x="32"
                        y="58"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <circle cx="68" cy="74" r="12" fill="#5A3B1E" />
                      <circle cx="68" cy="74" r="8" fill="#FBF9F5" />
                      <g transform="translate(76 62) rotate(-20) scale(0.6)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#4F6B3A"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">C2O</span>
                  </span>
                  <b>C2O Organic Coconut Water</b>
                  <span className="d">
                    USDA organic coconut water — clean hydration with natural
                    minerals.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B091BFQC9F?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="24"
                        y="56"
                        width="40"
                        height="30"
                        rx="5"
                        fill="#4B6FB0"
                      />
                      <rect
                        x="22"
                        y="48"
                        width="44"
                        height="10"
                        rx="4"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 61c6 7 10 12 10 17a10 10 0 0 1-20 0c0-5 4-10 10-17z"
                        fill="#D9973A"
                      />
                    </svg>
                    <span className="brand">Redmond</span>
                  </span>
                  <b>Re-Lyte Electrolyte Powder</b>
                  <span className="d">
                    Clean electrolyte mix with real salt minerals — no sugar, no
                    artificial ingredients.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("organic-foods")}
              className="cat"
              id="organic-foods"
              data-cat="organic-foods"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                    <path
                      d="M50 52c-6-6-22-4-22 14 0 14 10 22 16 22 3 0 4-2 6-2s3 2 6 2c6 0 16-8 16-22 0-18-16-20-22-14z"
                      fill="#7E5414"
                    />
                    <path
                      d="M50 52c0-8 2-14 6-18"
                      stroke="#7E5414"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M52 44c4-8 12-10 18-8-4 6-10 9-18 8z"
                      fill="#D9973A"
                    />
                  </svg>
                  <span className="num">6 products</span>
                  <h2 className="d3">Organic &amp; Whole Foods</h2>
                </div>
                <p>
                  Real food, minimal processing. From raw honey to grass-fed
                  tallow chips, every pantry item is chosen for clean
                  ingredients, honest sourcing, and nutrient density over
                  convenience.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00017028M?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="26"
                        y="40"
                        width="34"
                        height="46"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="26"
                        y="52"
                        width="34"
                        height="14"
                        fill="#4B6FB0"
                      />
                      <rect
                        x="57"
                        y="75"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(15 62 80)"
                      />
                      <rect
                        x="69"
                        y="73"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(-20 74 78)"
                      />
                      <rect
                        x="63"
                        y="64"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(40 68 69)"
                      />
                    </svg>
                    <span className="brand">Maldon</span>
                  </span>
                  <b>Maldon Sea Salt Flakes</b>
                  <span className="d">
                    Hand-harvested pyramid crystals with a clean mineral
                    profile. Trace minerals retained.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B01IR6IZZA?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M30 86V56a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v30Z"
                        fill="#D9973A"
                      />
                      <rect
                        x="30"
                        y="40"
                        width="36"
                        height="9"
                        rx="3"
                        fill="#7E5414"
                      />
                      <path d="M64 46l14-16" stroke="#7E5414" strokeWidth="3" />
                      <path d="M74 34l6-6 4 4-6 6z" fill="#7E5414" />
                      <polygon
                        points="54.0,64.0 51.0,69.2 45.0,69.2 42.0,64.0 45.0,58.8 51.0,58.8"
                        fill="#E8B53C"
                      />
                      <polygon
                        points="45.0,71.0 42.0,76.2 36.0,76.2 33.0,71.0 36.0,65.8 42.0,65.8"
                        fill="#E8B53C"
                      />
                      <polygon
                        points="63.0,71.0 60.0,76.2 54.0,76.2 51.0,71.0 54.0,65.8 60.0,65.8"
                        fill="#E8B53C"
                      />
                      <polygon
                        points="54.0,78.0 51.0,83.2 45.0,83.2 42.0,78.0 45.0,72.8 51.0,72.8"
                        fill="#E8B53C"
                      />
                    </svg>
                    <span className="brand">Nate's Honey</span>
                  </span>
                  <b>Organic Raw &amp; Unfiltered Honey</b>
                  <span className="d">
                    USDA organic raw unfiltered honey — natural sweetener with
                    enzymes and antioxidants.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B01EM5XUO6?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M26 86V54a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v32Z"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="28"
                        y="60"
                        width="32"
                        height="26"
                        fill="#D6A45E"
                      />
                      <rect
                        x="27"
                        y="40"
                        width="34"
                        height="9"
                        rx="3"
                        fill="#7E5414"
                      />
                      <path
                        d="M68 61l3 7 6-3-1 7 6 1-5 5 3 4-8-1-3 5-3-5-8 1 3-4-5-5 6-1-1-7 6 3z"
                        fill="#B5651D"
                      />
                      <path d="M68 78v9" stroke="#B5651D" strokeWidth="2" />
                    </svg>
                    <span className="brand">Nova Maple Syrup</span>
                  </span>
                  <b>Nova Maple Cream</b>
                  <span className="d">
                    Pure grade-A maple cream — natural sweetener, no additives.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09TG9LCKF?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="24"
                        y="56"
                        width="40"
                        height="30"
                        rx="5"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="22"
                        y="48"
                        width="44"
                        height="10"
                        rx="4"
                        fill="#4F6B3A"
                      />
                      <path
                        d="M68 88V76"
                        stroke="#635C56"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M68 76c-8-4-8-16 0-16s8 12 0 16zM68 76c-3-4-3-14 0-16 3 2 3 12 0 16z"
                        fill="none"
                        stroke="#635C56"
                        strokeWidth="1.8"
                      />
                    </svg>
                    <span className="brand">Otto's Naturals</span>
                  </span>
                  <b>Grain-Free Baking Powder</b>
                  <span className="d">
                    Grain-free, corn-free baking — AIP/Paleo friendly.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07CNFGV5S?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#FBF9F5" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#AEB8C2"
                      />
                      <rect
                        x="57"
                        y="75"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(15 62 80)"
                      />
                      <rect
                        x="69"
                        y="73"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(-20 74 78)"
                      />
                      <rect
                        x="63"
                        y="64"
                        width="10"
                        height="10"
                        rx="1.5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                        transform="rotate(40 68 69)"
                      />
                    </svg>
                    <span className="brand">Prescribed For Life</span>
                  </span>
                  <b>Sodium Bicarbonate Powder</b>
                  <span className="d">
                    Organic aluminum-free baking soda — versatile health and
                    household uses.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0FXCMYRQZ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path d="M28 50l6-12h20l6 12v36H28Z" fill="#FBF9F5" />
                      <path d="M28 50h32" stroke="#FBF9F5" strokeWidth="2" />
                      <rect
                        x="32"
                        y="58"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <circle cx="68" cy="74" r="12" fill="#5A3B1E" />
                      <circle cx="68" cy="74" r="8" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">Califia Farms</span>
                  </span>
                  <b>Organic Coconut Milk</b>
                  <span className="d">
                    Organic plant-based dairy alternative — USDA certified.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("herbal-medicine")}
              className="cat"
              id="herbal-medicine"
              data-cat="herbal-medicine"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                    <path
                      d="M58 60l12-28"
                      stroke="#D9973A"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path d="M24 58h52a26 24 0 0 1-52 0Z" fill="#2E4A68" />
                    <rect
                      x="38"
                      y="80"
                      width="24"
                      height="7"
                      rx="3"
                      fill="#2E4A68"
                    />
                  </svg>
                  <span className="num">5 products</span>
                  <h2 className="d3">Herbal Medicine</h2>
                </div>
                <p>
                  Ancient plant medicine meets modern wellness. Ayurvedic herbs,
                  bee propolis, dandelion root — these are the pharmacological
                  tools that have sustained human health for millennia.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0BQ5JJWW4?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="36"
                        y="54"
                        width="20"
                        height="32"
                        rx="5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                      <path d="M42 54V40a4 4 0 0 1 8 0v14Z" fill="#D9973A" />
                      <polygon
                        points="74.0,70.0 71.0,75.2 65.0,75.2 62.0,70.0 65.0,64.8 71.0,64.8"
                        fill="#D9973A"
                      />
                      <polygon
                        points="65.0,77.0 62.0,82.2 56.0,82.2 53.0,77.0 56.0,71.8 62.0,71.8"
                        fill="#D9973A"
                      />
                      <polygon
                        points="83.0,77.0 80.0,82.2 74.0,82.2 71.0,77.0 74.0,71.8 80.0,71.8"
                        fill="#D9973A"
                      />
                      <polygon
                        points="74.0,84.0 71.0,89.2 65.0,89.2 62.0,84.0 65.0,78.8 71.0,78.8"
                        fill="#D9973A"
                      />
                    </svg>
                    <span className="brand">Beekeeper's Naturals</span>
                  </span>
                  <b>Propolis Nasal Rinse Spray</b>
                  <span className="d">
                    Bee propolis nasal spray — natural immune defense and sinus
                    support.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00MMHV878?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M30 40h26l2 46H28Z" fill="#161515" />
                      <path
                        d="M30 40l13 6 13-6"
                        fill="none"
                        stroke="#FBF9F5"
                        strokeWidth="2"
                      />
                      <rect
                        x="33"
                        y="58"
                        width="20"
                        height="14"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <path d="M56 74a12 11 0 0 1 24 0Z" fill="#C9574A" />
                      <rect
                        x="64"
                        y="74"
                        width="8"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <circle cx="64" cy="69" r="1.8" fill="#FBF9F5" />
                      <circle cx="72" cy="67" r="1.5" fill="#FBF9F5" />
                    </svg>
                    <span className="brand">Four Sigmatic</span>
                  </span>
                  <b>Mushroom Elixir Mix with Reishi</b>
                  <span className="d">
                    Reishi mushroom elixir for deep sleep and stress relief —
                    adaptogenic nightcap.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B078NF6QB9?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="34"
                        y="40"
                        width="18"
                        height="46"
                        rx="5"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="33"
                        y="36"
                        width="20"
                        height="8"
                        rx="3"
                        fill="#7D4F6B"
                      />
                      <g fill="#7D4F6B" opacity=".7">
                        <circle cx="40" cy="74" r="3" />
                        <circle cx="46" cy="78" r="3" />
                        <circle cx="41" cy="81" r="3" />
                        <circle cx="46" cy="70" r="3" />
                      </g>
                    </svg>
                    <span className="brand">Boiron</span>
                  </span>
                  <b>Belladonna 30C Homeopathic Pellets</b>
                  <span className="d">
                    Classical homeopathic remedy for fever and inflammation. 80
                    pellets, no side effects or drug interactions.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B089BGC8BF?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="34"
                        y="40"
                        width="18"
                        height="46"
                        rx="5"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="33"
                        y="36"
                        width="20"
                        height="8"
                        rx="3"
                        fill="#4B6FB0"
                      />
                      <g fill="#4B6FB0" opacity=".7">
                        <circle cx="40" cy="74" r="3" />
                        <circle cx="46" cy="78" r="3" />
                        <circle cx="41" cy="81" r="3" />
                        <circle cx="46" cy="70" r="3" />
                      </g>
                    </svg>
                    <span className="brand">Boiron</span>
                  </span>
                  <b>Aconitum Napellus 30C (3-Pack)</b>
                  <span className="d">
                    Homeopathic fever remedy — 240 pellets. First-line response
                    for sudden onset symptoms.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B004LFJVZ0?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="34"
                        y="40"
                        width="18"
                        height="46"
                        rx="5"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="33"
                        y="36"
                        width="20"
                        height="8"
                        rx="3"
                        fill="#E8B53C"
                      />
                      <g fill="#E8B53C" opacity=".7">
                        <circle cx="40" cy="74" r="3" />
                        <circle cx="46" cy="78" r="3" />
                        <circle cx="41" cy="81" r="3" />
                        <circle cx="46" cy="70" r="3" />
                      </g>
                    </svg>
                    <span className="brand">Boiron</span>
                  </span>
                  <b>Sulphur Iodatum 9C</b>
                  <span className="d">
                    Homeopathic support for nasal discharge during cold and flu
                    convalescence.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("crystals")}
              className="cat"
              id="crystals"
              data-cat="crystals"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                    <path d="M46 88V48l8-14 8 14v40Z" fill="#4F6B3A" />
                    <path d="M30 88V62l7-10 7 10v26Z" fill="#D9973A" />
                    <path
                      d="M62 88V66l6-9 6 9v22Z"
                      fill="#4F6B3A"
                      opacity=".6"
                    />
                  </svg>
                  <span className="num">6 products</span>
                  <h2 className="d3">Crystals &amp; Energy Tools</h2>
                </div>
                <p>
                  Whether you believe in crystal energy or not, the act of
                  intentional placement and ritual creates psychological anchors
                  for focus and calm. Sound healing bowls and crystals serve as
                  environmental design elements that prompt mindfulness.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07T1LNJ3X?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M28 86V52l4-8 4 8V86Z" fill="#7D4F6B" />
                      <path d="M38 86V44l4-8 4 8V86Z" fill="#4B6FB0" />
                      <path d="M48 86V48l4-8 4 8V86Z" fill="#9DB06A" />
                      <path d="M58 86V56l4-8 4 8V86Z" fill="#E8B53C" />
                      <path d="M68 86V60l4-8 4 8V86Z" fill="#D98C7A" />
                    </svg>
                    <span className="brand">Luckeeper</span>
                  </span>
                  <b>Healing Crystal Wand Set (7 stones)</b>
                  <span className="d">
                    Amethyst, Rose Quartz, Clear Quartz, Black Obsidian, Green
                    Fluorite, Lapis Lazuli, Rainbow Fluorite.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07VP1QNLT?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M28 86V52l4-8 4 8V86Z" fill="#161515" />
                      <path d="M38 86V44l4-8 4 8V86Z" fill="#D9973A" />
                      <path d="M48 86V48l4-8 4 8V86Z" fill="#161515" />
                      <path d="M58 86V56l4-8 4 8V86Z" fill="#D9973A" />
                      <path d="M68 86V60l4-8 4 8V86Z" fill="#161515" />
                    </svg>
                    <span className="brand">Ever Vibes</span>
                  </span>
                  <b>Orgonite Crystal Wand Set</b>
                  <span className="d">
                    Orgonite combines crystals with metal shavings. Used as
                    meditation tools and desk objects.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0BWY744C8?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <ellipse
                        cx="38"
                        cy="74"
                        rx="12"
                        ry="9"
                        fill="#4B6FB0"
                        transform="rotate(-10 38 74)"
                      />
                      <ellipse
                        cx="60"
                        cy="72"
                        rx="11"
                        ry="8"
                        fill="#4B6FB0"
                        transform="rotate(15 60 72)"
                      />
                      <ellipse
                        cx="50"
                        cy="58"
                        rx="10"
                        ry="7"
                        fill="#4B6FB0"
                        transform="rotate(5 50 58)"
                      />
                      <path
                        d="M30 72c6-3 12-3 16 0M52 70c5-2 10-2 15 1M44 57c4-2 8-2 12 0"
                        stroke="#FBF9F5"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="brand">Maibaota</span>
                  </span>
                  <b>Blue Sodalite Tumbled Stones</b>
                  <span className="d">
                    Natural healing crystals for energy work and spiritual
                    practice.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09TVX6GH8?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <ellipse
                        cx="38"
                        cy="74"
                        rx="12"
                        ry="9"
                        fill="#7E5414"
                        transform="rotate(-10 38 74)"
                      />
                      <ellipse
                        cx="60"
                        cy="72"
                        rx="11"
                        ry="8"
                        fill="#7E5414"
                        transform="rotate(15 60 72)"
                      />
                      <ellipse
                        cx="50"
                        cy="58"
                        rx="10"
                        ry="7"
                        fill="#7E5414"
                        transform="rotate(5 50 58)"
                      />
                      <path
                        d="M30 72c6-3 12-3 16 0M52 70c5-2 10-2 15 1M44 57c4-2 8-2 12 0"
                        stroke="#E8B53C"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="brand">Maibaota</span>
                  </span>
                  <b>Tiger Eye Stones</b>
                  <span className="d">
                    Grounding stone with chatoyant optical effect. Used in
                    decision-making rituals as a focus object.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09N21ZD7B?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M24 58h52a26 22 0 0 1-52 0Z" fill="#B9893F" />
                      <path
                        d="M24 58h52"
                        stroke="#E8B53C"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M70 86l-8-36"
                        stroke="#7E5414"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Himalayan Bazaar</span>
                  </span>
                  <b>Premium Tibetan Singing Bowl Set</b>
                  <span className="d">
                    Sound healing therapy — vibrational frequency for meditation
                    and chakra balancing.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B08CVSZWRC?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path
                        d="M22 70h24a12 9.600000000000001 0 0 1-24 0Z"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M46 66h32a16 12.8 0 0 1-32 0Z"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M39 50h18a9 7.2 0 0 1-18 0Z"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span className="brand">Ryan Dvan</span>
                  </span>
                  <b>432Hz Crystal Singing Bowl Set (7 bowls)</b>
                  <span className="d">
                    Full chakra crystal singing bowl set tuned to 432Hz for deep
                    sound healing.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("body-care")}
              className="cat"
              id="body-care"
              data-cat="body-care"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                    <rect
                      x="28"
                      y="50"
                      width="24"
                      height="36"
                      rx="5"
                      fill="#7E5414"
                    />
                    <rect x="36" y="42" width="8" height="8" fill="#7E5414" />
                    <path
                      d="M40 42V36h10"
                      stroke="#7E5414"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <rect
                      x="56"
                      y="70"
                      width="22"
                      height="16"
                      rx="6"
                      fill="#D9973A"
                    />
                  </svg>
                  <span className="num">5 products</span>
                  <h2 className="d3">Natural Body Care</h2>
                </div>
                <p>
                  Your skin is your largest organ. Everything that touches it
                  enters your bloodstream within 26 seconds. We stock only
                  plant-based, chemical-free products that nourish rather than
                  burden the body.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CKGJPS3F?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="28"
                        y="52"
                        width="28"
                        height="34"
                        rx="6"
                        fill="#6E8A55"
                      />
                      <rect
                        x="36"
                        y="44"
                        width="12"
                        height="8"
                        fill="#635C56"
                      />
                      <path
                        d="M42 44v-8h12"
                        stroke="#635C56"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <rect
                        x="32"
                        y="62"
                        width="20"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                      <g transform="translate(68 74) rotate(-30) scale(1.1)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#4F6B3A"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">Brittanie's Thyme</span>
                  </span>
                  <b>Pure Castile Liquid Soap (Peppermint)</b>
                  <span className="d">
                    Organic, plant-based castile soap free of sulfates,
                    parabens, and synthetic fragrances.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B08QLCRDM9?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="28"
                        y="52"
                        width="28"
                        height="34"
                        rx="6"
                        fill="#8E9F78"
                      />
                      <rect
                        x="36"
                        y="44"
                        width="12"
                        height="8"
                        fill="#635C56"
                      />
                      <path
                        d="M42 44v-8h12"
                        stroke="#635C56"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <rect
                        x="32"
                        y="62"
                        width="20"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                      <ellipse
                        cx="63"
                        cy="76"
                        rx="6"
                        ry="8"
                        fill="#8E9F78"
                        transform="rotate(25 63 76)"
                      />
                      <circle cx="64" cy="74" r="1.6" fill="#C9574A" />
                      <ellipse
                        cx="74"
                        cy="70"
                        rx="6"
                        ry="8"
                        fill="#8E9F78"
                        transform="rotate(25 74 70)"
                      />
                      <circle cx="75" cy="68" r="1.6" fill="#C9574A" />
                    </svg>
                    <span className="brand">Brittanie's Thyme</span>
                  </span>
                  <b>Organic Castile Liquid Soap (Olive Oil)</b>
                  <span className="d">
                    Pure olive oil base — biodegradable, vegan, and free of the
                    12 most common skin irritants.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00SV62QWA?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="26"
                        y="56"
                        width="40"
                        height="26"
                        rx="10"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M34 66h22"
                        stroke="#AEB8C2"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M70 63.6c6 7 10 12 10 17a10 10 0 0 1-20 0c0-5 4-10 10-17z"
                        fill="#D9973A"
                      />
                    </svg>
                    <span className="brand">The Soap Haven</span>
                  </span>
                  <b>Goat Milk Soap with Honey</b>
                  <span className="d">
                    Goat milk lactic acid + honey humectant. Handmade, SLS and
                    paraben free.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B085S7TSXK?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="28"
                        y="52"
                        width="28"
                        height="34"
                        rx="6"
                        fill="#D98C7A"
                      />
                      <rect
                        x="36"
                        y="44"
                        width="12"
                        height="8"
                        fill="#635C56"
                      />
                      <path
                        d="M42 44v-8h12"
                        stroke="#635C56"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <rect
                        x="32"
                        y="62"
                        width="20"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                      <circle cx="68" cy="74" r="11" fill="#E07A6A" />
                      <circle
                        cx="68"
                        cy="74"
                        r="7.5"
                        fill="#FBF9F5"
                        opacity=".55"
                      />
                      <path
                        d="M68 67v14M61 74h14M63 69l10 10M73 69l-10 10"
                        stroke="#E07A6A"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span className="brand">Everyone</span>
                  </span>
                  <b>Ruby Grapefruit Hand Soap</b>
                  <span className="d">
                    Plant-based cleanser with pure essential oils. EWG Verified
                    for safety.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00X7RCW4A?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="24"
                        y="56"
                        width="40"
                        height="30"
                        rx="5"
                        fill="#AEB8C2"
                      />
                      <rect
                        x="22"
                        y="48"
                        width="44"
                        height="10"
                        rx="4"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M58 84c0-12 6-18 10-18s10 6 10 18Z"
                        fill="#A9A08F"
                      />
                      <path
                        d="M62 72c2-2 6-2 8 0"
                        stroke="#FBF9F5"
                        strokeWidth="1.4"
                        opacity=".6"
                      />
                    </svg>
                    <span className="brand">Enviromedica</span>
                  </span>
                  <b>Magnetic Bentonite Clay Bath</b>
                  <span className="d">
                    Detox bath therapy — draws out toxins through skin
                    absorption.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("sleep")}
              className="cat"
              id="sleep"
              data-cat="sleep"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                    <rect
                      x="24"
                      y="44"
                      width="52"
                      height="22"
                      rx="11"
                      fill="#FBF9F5"
                    />
                    <rect
                      x="22"
                      y="66"
                      width="56"
                      height="20"
                      rx="4"
                      fill="#2E4A68"
                    />
                    <path d="M22 74h56" stroke="#D9973A" strokeWidth="4" />
                  </svg>
                  <span className="num">3 products</span>
                  <h2 className="d3">Organic Sleep &amp; Textiles</h2>
                </div>
                <p>
                  You spend a third of your life in bed. The materials touching
                  your skin for 8 hours nightly should be the cleanest in your
                  home. Breathable, chemical-free, thermoregulating.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07KFVQPTW?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M22 54c0-6 4-10 10-10h36c6 0 10 4 10 10v18c0 6-4 10-10 10H32c-6 0-10-4-10-10Z"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M28 50l6 4M72 50l-6 4M28 76l6-4M72 76l-6-4"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <span className="brand">LOFE</span>
                  </span>
                  <b>LOFE Organic Pillow</b>
                  <span className="d">
                    100% organic cotton shell with adjustable loft. No pesticide
                    residues or flame retardants.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DDTYXN15?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="22"
                        y="58"
                        width="56"
                        height="12"
                        rx="3"
                        fill="#8E9F78"
                      />
                      <rect
                        x="22"
                        y="70"
                        width="56"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                      <rect
                        x="26"
                        y="46"
                        width="48"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                      <path d="M76 86V58" stroke="#6E8A55" strokeWidth="5" />
                      <path
                        d="M73 76h6M73 66h6"
                        stroke="#4F6B3A"
                        strokeWidth="2"
                      />
                      <path
                        d="M76 66c6-4 12-4 16 0-6 4-12 4-16 0z"
                        fill="#4F6B3A"
                      />
                    </svg>
                    <span className="brand">Sleep Sanctuary</span>
                  </span>
                  <b>Bamboo Viscose Cooling Sheets</b>
                  <span className="d">
                    100% bamboo viscose — thermoregulating, wicks moisture 3x
                    faster than cotton.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07N47L6MG?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M22 50h56v28a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6Z"
                        fill="#8E9F78"
                      />
                      <path
                        d="M22 62h56M50 50v34"
                        stroke="#FBF9F5"
                        strokeWidth="1.6"
                        opacity=".7"
                      />
                      <rect
                        x="28"
                        y="42"
                        width="44"
                        height="10"
                        rx="5"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                    </svg>
                    <span className="brand">Pure Bamboo</span>
                  </span>
                  <b>Pure Bamboo Duvet Cover</b>
                  <span className="d">
                    100% organic viscose from bamboo. Temperature-regulating and
                    softer than 400-thread-count cotton.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("water-wellness")}
              className="cat"
              id="water-wellness"
              data-cat="water-wellness"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                    <path d="M30 40h34l-2 46H34Z" fill="#4F6B3A" />
                    <path
                      d="M64 46h4a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-5"
                      fill="none"
                      stroke="#4F6B3A"
                      strokeWidth="4"
                    />
                    <rect
                      x="34"
                      y="48"
                      width="26"
                      height="10"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M38 66h18"
                      stroke="#D9973A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="num">4 products</span>
                  <h2 className="d3">Water &amp; Wellness Infrastructure</h2>
                </div>
                <p>
                  Water quality is the foundation of biological health. We
                  filter what touches our skin, purify what we drink, and choose
                  glass over plastic.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CRHK7MH5?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path
                        d="M30 30h14a6 6 0 0 1 6 6v6"
                        fill="none"
                        stroke="#635C56"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path d="M36 42h28a14 6 0 0 1-28 0Z" fill="#635C56" />
                      <path
                        d="M40 56v10"
                        stroke="#4B6FB0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M46 56v16"
                        stroke="#4B6FB0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M52 56v12"
                        stroke="#4B6FB0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M58 56v18"
                        stroke="#4B6FB0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M64 56v10"
                        stroke="#4B6FB0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Cobbe</span>
                  </span>
                  <b>Cobbe Filtered Shower Head</b>
                  <span className="d">
                    20-stage filtration removes chlorine, fluoride, and heavy
                    metals.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00A0RHSJO?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <ellipse
                        cx="50"
                        cy="62"
                        rx="22"
                        ry="18"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <ellipse
                        cx="50"
                        cy="64"
                        rx="12"
                        ry="10"
                        fill="#AEB8C2"
                        opacity=".5"
                      />
                      <rect
                        x="66"
                        y="46"
                        width="12"
                        height="10"
                        rx="3"
                        fill="#2E4A68"
                      />
                      <path d="M50 74v12" stroke="#FBF9F5" strokeWidth="10" />
                    </svg>
                    <span className="brand">LUXE Bidet</span>
                  </span>
                  <b>LUXE Bidet NEO 185</b>
                  <span className="d">
                    Dual-nozzle bidet reduces toilet paper use by 80% with
                    superior hygiene.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0F18SLN5B?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="42"
                        y="46"
                        width="16"
                        height="40"
                        rx="7"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M50 46l6-18"
                        stroke="#635C56"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="50" cy="60" r="3" fill="#4B6FB0" />
                      <path
                        d="M58 26c3 0 5-2 5-5"
                        stroke="#4B6FB0"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="brand">KIWIBIRD</span>
                  </span>
                  <b>KIWIBIRD Water Flosser</b>
                  <span className="d">
                    Cordless oral irrigator with UVC sterilization. Oral health
                    linked to cardiovascular health.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B08KPJ76RR?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="32"
                        y="34"
                        width="36"
                        height="52"
                        rx="8"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <path d="M38 46h24" stroke="#AEB8C2" strokeWidth="2" />
                      <path d="M38 52h24" stroke="#AEB8C2" strokeWidth="2" />
                      <path d="M38 58h24" stroke="#AEB8C2" strokeWidth="2" />
                      <path d="M38 64h24" stroke="#AEB8C2" strokeWidth="2" />
                      <path d="M38 70h24" stroke="#AEB8C2" strokeWidth="2" />
                      <path d="M38 76h24" stroke="#AEB8C2" strokeWidth="2" />
                      <circle cx="50" cy="40" r="2.5" fill="#4B6FB0" />
                    </svg>
                    <span className="brand">BLUEAIR</span>
                  </span>
                  <b>BLUEAIR Air Purifier</b>
                  <span className="d">
                    HEPA air purification for allergens, dust, and indoor air
                    quality.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("clean-living")}
              className="cat"
              id="clean-living"
              data-cat="clean-living"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                    <path d="M36 52h22v34H36Z" fill="#7E5414" />
                    <path d="M40 52v-8h14v8Z" fill="#7E5414" />
                    <path d="M40 40h22l-4 6H40Z" fill="#D9973A" />
                    <path
                      d="M66 72c0-10 6-16 12-16 0 10-6 16-12 16z"
                      fill="#D9973A"
                    />
                  </svg>
                  <span className="num">9 products</span>
                  <h2 className="d3">Clean Living &amp; Non-Toxic Home</h2>
                </div>
                <p>
                  The chemicals in conventional cleaners are among the most
                  toxic substances in any home. We clean with plant-based
                  formulas that protect both the humans inside and the ecosystem
                  outside.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DT6ZDMFJ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="30"
                        y="54"
                        width="26"
                        height="32"
                        rx="4"
                        fill="#8E9F78"
                      />
                      <path d="M34 54v-8h18v8Z" fill="#8E9F78" />
                      <path d="M32 38h24l-4 8H32Z" fill="#635C56" />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <g transform="translate(68 76) rotate(-30) scale(1)">
                        <path
                          d="M-12 0c4-8 12-10 24-8-4 8-12 10-24 8z"
                          fill="#4F6B3A"
                        />
                        <path
                          d="M-10 0l20-6"
                          stroke="#FBF9F5"
                          strokeWidth="1.2"
                          opacity=".6"
                        />
                      </g>
                    </svg>
                    <span className="brand">Puracy</span>
                  </span>
                  <b>Puracy Multi-Surface Cleaner</b>
                  <span className="d">
                    Plant-powered, biodegradable formula. Free of sulfates,
                    chlorine, and synthetic fragrances.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0933MCB1J?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="30"
                        y="54"
                        width="26"
                        height="32"
                        rx="4"
                        fill="#4B6FB0"
                      />
                      <path d="M34 54v-8h18v8Z" fill="#4B6FB0" />
                      <path d="M32 38h24l-4 8H32Z" fill="#635C56" />
                      <rect
                        x="34"
                        y="64"
                        width="18"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                      />
                      <path
                        d="M68 61c1.5 9 4.5 11.5 13 13-8.5 1.5-11.5 4-13 13-1.5-9-4.5-11.5-13-13 8.5-1.5 11.5-4 13-13z"
                        fill="#E8B53C"
                      />
                    </svg>
                    <span className="brand">Seventh Generation</span>
                  </span>
                  <b>Seventh Generation Disinfecting Cleaner</b>
                  <span className="d">
                    Lemongrass citrus formula using thymol (from thyme oil)
                    instead of synthetic biocides.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0F7M5ZKZ3?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="24"
                        y="52"
                        width="48"
                        height="32"
                        rx="6"
                        fill="#6E8A55"
                      />
                      <path d="M40 52c0-8 16-8 16 0" fill="#FBF9F5" />
                      <rect
                        x="34"
                        y="62"
                        width="28"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                    </svg>
                    <span className="brand">Seventh Generation</span>
                  </span>
                  <b>Seventh Generation Multi-Surface Wipes</b>
                  <span className="d">
                    Plant-based cleaning wipes with essential oils — non-toxic
                    home cleaning.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0D9WDDQ42?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M28 86V54c0-4 3-6 6-8h14v40Z"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.4"
                      />
                      <rect
                        x="36"
                        y="38"
                        width="10"
                        height="8"
                        fill="#635C56"
                      />
                      <rect
                        x="52"
                        y="60"
                        width="18"
                        height="26"
                        rx="3"
                        fill="#8E9F78"
                      />
                      <rect
                        x="55"
                        y="54"
                        width="12"
                        height="6"
                        fill="#635C56"
                      />
                    </svg>
                    <span className="brand">Branch Basics</span>
                  </span>
                  <b>Branch Basics Concentrate Starter Kit</b>
                  <span className="d">
                    One concentrate replaces all cleaners — plant-based,
                    fragrance-free, zero toxins.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DTJWY9PM?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="28"
                        y="44"
                        width="40"
                        height="40"
                        rx="6"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <ellipse
                        cx="48"
                        cy="44"
                        rx="20"
                        ry="6"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <ellipse cx="48" cy="44" rx="6" ry="2" fill="#AEB8C2" />
                      <path d="M76 86V58" stroke="#6E8A55" strokeWidth="5" />
                      <path
                        d="M73 76h6M73 66h6"
                        stroke="#4F6B3A"
                        strokeWidth="2"
                      />
                      <path
                        d="M76 66c6-4 12-4 16 0-6 4-12 4-16 0z"
                        fill="#4F6B3A"
                      />
                    </svg>
                    <span className="brand">ECOLipak</span>
                  </span>
                  <b>ECOLipak Bamboo Toilet Paper</b>
                  <span className="d">
                    Tree-free, non-toxic, dye-free. Bamboo grows 30x faster than
                    trees with no pesticides.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B09F368W46?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <ellipse
                        cx="48"
                        cy="66"
                        rx="26"
                        ry="18"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <ellipse
                        cx="48"
                        cy="66"
                        rx="16"
                        ry="10"
                        fill="none"
                        stroke="#8E9F78"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="brand">ECOLipak</span>
                  </span>
                  <b>ECOLipak Compostable Paper Plates</b>
                  <span className="d">
                    Plant-based compostable alternative to plastic — zero waste.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B008KJQMA0?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <rect
                        x="24"
                        y="52"
                        width="48"
                        height="32"
                        rx="6"
                        fill="#4B6FB0"
                      />
                      <path d="M40 52c0-8 16-8 16 0" fill="#FBF9F5" />
                      <rect
                        x="34"
                        y="62"
                        width="28"
                        height="12"
                        rx="2"
                        fill="#FBF9F5"
                        opacity=".85"
                      />
                      <path
                        d="M74 66.9c6 7 10 12 10 17a10 10 0 0 1-20 0c0-5 4-10 10-17z"
                        fill="#FBF9F5"
                      />
                    </svg>
                    <span className="brand">WaterWipes</span>
                  </span>
                  <b>WaterWipes Baby Wipes</b>
                  <span className="d">
                    99.9% water wipes — minimal ingredients, hypoallergenic.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B00MCYIWX4?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M34 46h28l-4 40H38Z"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.6"
                      />
                      <path d="M32 42h32v6H32Z" fill="#8E9F78" />
                      <path
                        d="M52 42l6-14"
                        stroke="#635C56"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Repurpose</span>
                  </span>
                  <b>Repurpose Compostable Cold Cups</b>
                  <span className="d">
                    100% plant-based compostable cups — zero plastic waste.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0D9WS5DF9?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                      <path
                        d="M36 86l6 -54"
                        stroke="#AEB8C2"
                        strokeWidth="5"
                        strokeLinecap="round"
                        opacity=".75"
                      />
                      <path
                        d="M48 86l0 -54"
                        stroke="#4B6FB0"
                        strokeWidth="5"
                        strokeLinecap="round"
                        opacity=".75"
                      />
                      <path
                        d="M60 86l-6 -54"
                        stroke="#8E9F78"
                        strokeWidth="5"
                        strokeLinecap="round"
                        opacity=".75"
                      />
                    </svg>
                    <span className="brand">Foogwee</span>
                  </span>
                  <b>Reusable Glass Straws Set</b>
                  <span className="d">
                    Reusable glass straws — eliminates single-use plastic.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("kitchen")}
              className="cat"
              id="kitchen"
              data-cat="kitchen"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                    <path
                      d="M26 56h48v20a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10Z"
                      fill="#2E4A68"
                    />
                    <rect
                      x="22"
                      y="52"
                      width="56"
                      height="7"
                      rx="3.5"
                      fill="#2E4A68"
                    />
                    <rect
                      x="44"
                      y="44"
                      width="12"
                      height="8"
                      rx="3"
                      fill="#D9973A"
                    />
                    <path
                      d="M18 62h8M74 62h8"
                      stroke="#2E4A68"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="num">4 products</span>
                  <h2 className="d3">Mindful Kitchen &amp; Healthy Cooking</h2>
                </div>
                <p>
                  {t(
                    "The kitchen is the pharmacy of the biological founder. We chose non-toxic cookware, glass storage, and wooden serving — materials that don't leach chemicals into the food that becomes your body."
                  )}
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B08XM1B6ZX?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path
                        d="M26 58h48v16a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10Z"
                        fill="#8E9F78"
                      />
                      <rect
                        x="22"
                        y="54"
                        width="56"
                        height="6"
                        rx="3"
                        fill="#8E9F78"
                      />
                      <rect
                        x="44"
                        y="46"
                        width="12"
                        height="8"
                        rx="3"
                        fill="#E8B53C"
                      />
                      <path
                        d="M18 64h8M74 64h8"
                        stroke="#E8B53C"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="brand">Caraway</span>
                  </span>
                  <b>Caraway Non-Toxic Ceramic Cookware Set</b>
                  <span className="d">
                    Non-toxic ceramic-coated cookware — no PTFE, PFOA, or other
                    chemicals leaching into food.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0C6KDWL3W?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="26"
                        y="40"
                        width="20"
                        height="44"
                        rx="10"
                        fill="#E8D7BC"
                      />
                      <path d="M36 40h34v40H36" fill="#E8D7BC" />
                      <ellipse cx="36" cy="62" rx="10" ry="22" fill="#F4ECDF" />
                    </svg>
                    <span className="brand">Amfocus</span>
                  </span>
                  <b>Unbleached Parchment Paper</b>
                  <span className="d">
                    Unbleached parchment for clean baking — no chemicals.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0822BJSSJ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <rect
                        x="24"
                        y="44"
                        width="52"
                        height="24"
                        rx="8"
                        fill="#161515"
                      />
                      <rect
                        x="28"
                        y="38"
                        width="34"
                        height="8"
                        rx="3"
                        fill="#635C56"
                      />
                      <path
                        d="M30 68v18M70 68v18"
                        stroke="#635C56"
                        strokeWidth="4"
                      />
                      <circle cx="66" cy="56" r="3" fill="#D9973A" />
                      <path
                        d="M68 38c-3-4 3-6 0-10"
                        stroke="#635C56"
                        strokeWidth="2"
                        fill="none"
                        opacity=".5"
                      />
                    </svg>
                    <span className="brand">Traeger</span>
                  </span>
                  <b>Traeger Ironwood 885 Grill</b>
                  <span className="d">
                    All-natural wood pellet grill for clean smoke cooking.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DHJ4TY4L?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                      <path d="M26 86l3-44h28l3 44Z" fill="#B5651D" />
                      <rect
                        x="29"
                        y="38"
                        width="28"
                        height="6"
                        rx="2"
                        fill="#B5651D"
                      />
                      <rect
                        x="34"
                        y="56"
                        width="18"
                        height="16"
                        rx="3"
                        fill="#FBF9F5"
                      />
                      <rect
                        x="62"
                        y="70"
                        width="5"
                        height="9"
                        rx="2"
                        fill="#C99A6B"
                        transform="rotate(20 62 70)"
                      />
                      <rect
                        x="70"
                        y="74"
                        width="5"
                        height="9"
                        rx="2"
                        fill="#C99A6B"
                        transform="rotate(-15 70 74)"
                      />
                      <rect
                        x="66"
                        y="80"
                        width="5"
                        height="9"
                        rx="2"
                        fill="#C99A6B"
                        transform="rotate(40 66 80)"
                      />
                    </svg>
                    <span className="brand">Traeger</span>
                  </span>
                  <b>Traeger Signature Blend Wood Pellets</b>
                  <span className="d">
                    100% all-natural wood pellets — no fillers, binders, or
                    additives.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
            <section
              hidden={isHidden("biohacking")}
              className="cat"
              id="biohacking"
              data-cat="biohacking"
            >
              <div className="chead">
                <div className="t">
                  <svg
                    className="cicon"
                    viewBox="9 9 82 83"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                    <rect
                      x="38"
                      y="30"
                      width="24"
                      height="58"
                      rx="10"
                      fill="#4F6B3A"
                      opacity=".35"
                    />
                    <rect
                      x="32"
                      y="44"
                      width="36"
                      height="32"
                      rx="9"
                      fill="#4F6B3A"
                    />
                    <path
                      d="M37 60h8l3-7 5 14 3-7h7"
                      fill="none"
                      stroke="#D9973A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="num">5 products</span>
                  <h2 className="d3">Biohacking &amp; Wellness Tech</h2>
                </div>
                <p>
                  Technology in service of biology. From grounding sheets to
                  sleep trackers, these tools help you measure, optimize, and
                  recover — turning wellness from guesswork into data-driven
                  practice.
                </p>
              </div>
              <div className="products">
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B07VSRK68V?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="22"
                        y="62"
                        width="48"
                        height="20"
                        rx="4"
                        fill="#161515"
                      />
                      <path
                        d="M70 72c6 0 8-8 12-8"
                        stroke="#635C56"
                        strokeWidth="2.4"
                        fill="none"
                      />
                      <rect
                        x="80"
                        y="60"
                        width="4"
                        height="8"
                        rx="1"
                        fill="#635C56"
                      />
                    </svg>
                    <span className="brand">Hooga</span>
                  </span>
                  <b>Hooga Grounding Mat</b>
                  <span className="d">
                    Conductive carbon mat connects the body to Earth's
                    electrical field. Reduces cortisol and inflammation.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DM4VQNGJ?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="22"
                        y="58"
                        width="56"
                        height="12"
                        rx="3"
                        fill="#AEB8C2"
                      />
                      <rect
                        x="22"
                        y="70"
                        width="56"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                      <rect
                        x="26"
                        y="46"
                        width="48"
                        height="12"
                        rx="3"
                        fill="#FBF9F5"
                        stroke="#AEB8C2"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M78 72c4 0 6-6 8-6"
                        stroke="#635C56"
                        strokeWidth="2.2"
                        fill="none"
                      />
                    </svg>
                    <span className="brand">Premium Grounding</span>
                  </span>
                  <b>Premium Grounding Sheet</b>
                  <span className="d">
                    Silver-threaded organic cotton sheet for earthing during
                    sleep — grounded all night.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0CGC8HB5P?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="30"
                        y="32"
                        width="40"
                        height="52"
                        rx="5"
                        fill="#161515"
                      />
                      <circle cx="40" cy="44" r="3" fill="#C9574A" />
                      <circle cx="40" cy="56" r="3" fill="#C9574A" />
                      <circle cx="40" cy="68" r="3" fill="#C9574A" />
                      <circle cx="50" cy="44" r="3" fill="#C9574A" />
                      <circle cx="50" cy="56" r="3" fill="#C9574A" />
                      <circle cx="50" cy="68" r="3" fill="#C9574A" />
                      <circle cx="60" cy="44" r="3" fill="#C9574A" />
                      <circle cx="60" cy="56" r="3" fill="#C9574A" />
                      <circle cx="60" cy="68" r="3" fill="#C9574A" />
                    </svg>
                    <span className="brand">Hooga</span>
                  </span>
                  <b>Hooga Red Light Therapy Panel</b>
                  <span className="d">
                    Red and near-infrared light therapy for cellular repair,
                    skin health, and recovery.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0DV7JN7ZD?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <path d="M30 44h40l-20 34Z" fill="#161515" />
                      <rect
                        x="18"
                        y="52"
                        width="14"
                        height="10"
                        rx="4"
                        fill="#635C56"
                      />
                      <circle
                        cx="50"
                        cy="56"
                        r="4"
                        fill="#FBF9F5"
                        opacity=".6"
                      />
                    </svg>
                    <span className="brand">Therabody</span>
                  </span>
                  <b>Theragun Mini 3.0</b>
                  <span className="d">
                    Portable percussive therapy for muscle recovery — used by
                    biohackers and athletes.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
                <a
                  className="prod"
                  href="https://www.amazon.com/dp/B0D6GK13XM?tag=lovie084-20"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="ptop">
                    <svg
                      className="picon"
                      viewBox="9 9 82 83"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                      <rect
                        x="28"
                        y="40"
                        width="40"
                        height="16"
                        rx="8"
                        fill="#635C56"
                      />
                      <rect
                        x="48"
                        y="54"
                        width="12"
                        height="32"
                        rx="5"
                        fill="#635C56"
                      />
                      <circle cx="22" cy="48" r="7" fill="#635C56" />
                    </svg>
                    <span className="brand">RENPHO</span>
                  </span>
                  <b>RENPHO Thermacool Massage Gun</b>
                  <span className="d">
                    Deep tissue percussion massager with heat and cold therapy
                    heads. Charging stand included. Pain relief and muscle
                    recovery.
                  </span>
                  <span className="go">View on Amazon ↗</span>
                </a>
              </div>
            </section>
          </div>
        </div>
        <section className="band candle">
          <div className="container">
            <div className="head left">
              <span className="label">Contents</span>
              <h2 className="d2">Sixteen rooms of the house.</h2>
              <p className="lede">
                {t(
                  "This catalog is a living document. As we discover better products, we update the house, and this page. The biological founder never stops optimizing the environment."
                )}
              </p>
            </div>
            <nav className="index-grid" aria-label="Categories">
              <a href="#essential-oils">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                  <rect
                    x="38"
                    y="52"
                    width="24"
                    height="34"
                    rx="6"
                    fill="#4F6B3A"
                  />
                  <rect
                    x="42"
                    y="64"
                    width="16"
                    height="12"
                    rx="2"
                    fill="#E1E7D6"
                  />
                  <rect
                    x="43"
                    y="44"
                    width="14"
                    height="9"
                    rx="2"
                    fill="#D9973A"
                  />
                  <path
                    d="M50 44V32"
                    stroke="#D9973A"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="ix">
                  <b>Essential Oils &amp; Aromatherapy</b>
                  <span>10 products</span>
                </span>
              </a>
              <a href="#diffusers">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                  <path d="M30 86c0-16 9-24 20-24s20 8 20 24Z" fill="#7E5414" />
                  <rect
                    x="44"
                    y="56"
                    width="12"
                    height="7"
                    rx="3"
                    fill="#D9973A"
                  />
                  <circle cx="48" cy="44" r="5" fill="#7E5414" opacity=".35" />
                  <circle
                    cx="56"
                    cy="36"
                    r="6.5"
                    fill="#7E5414"
                    opacity=".22"
                  />
                  <circle cx="46" cy="30" r="4" fill="#7E5414" opacity=".15" />
                </svg>
                <span className="ix">
                  <b>Essential Oil Diffusers</b>
                  <span>2 products</span>
                </span>
              </a>
              <a href="#teas">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                  <path
                    d="M38 42c0 14 6 20 3 36h18c-3-16 3-22 3-36Z"
                    fill="#D9973A"
                  />
                  <path
                    d="M38 42h24"
                    stroke="#2E4A68"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <rect
                    x="28"
                    y="80"
                    width="44"
                    height="7"
                    rx="3.5"
                    fill="#2E4A68"
                  />
                </svg>
                <span className="ix">
                  <b>Teas, Coffee &amp; Herbal Infusions</b>
                  <span>21 products</span>
                </span>
              </a>
              <a href="#supplements">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                  <g transform="rotate(-40 46 62)">
                    <rect
                      x="26"
                      y="52"
                      width="40"
                      height="20"
                      rx="10"
                      fill="#4F6B3A"
                    />
                    <path d="M46 52h10a10 10 0 0 1 0 20H46Z" fill="#D9973A" />
                  </g>
                  <circle cx="66" cy="78" r="8" fill="#4F6B3A" />
                  <path
                    d="M60 78h12"
                    stroke="#E1E7D6"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="ix">
                  <b>Supplements &amp; Superfoods</b>
                  <span>20 products</span>
                </span>
              </a>
              <a href="#functional-beverages">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                  <path
                    d="M36 40h28v42a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4Z"
                    fill="#7E5414"
                  />
                  <path d="M38 34h24l2 6H36Z" fill="#7E5414" opacity=".7" />
                  <rect x="36" y="54" width="28" height="12" fill="#D9973A" />
                </svg>
                <span className="ix">
                  <b>Functional Beverages</b>
                  <span>4 products</span>
                </span>
              </a>
              <a href="#healthy-snacks">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                  <ellipse cx="42" cy="58" rx="7" ry="5" fill="#D9973A" />
                  <ellipse
                    cx="55"
                    cy="56"
                    rx="7"
                    ry="5"
                    fill="#2E4A68"
                    opacity=".6"
                  />
                  <ellipse cx="50" cy="64" rx="7" ry="5" fill="#D9973A" />
                  <path d="M24 64h52a26 22 0 0 1-52 0Z" fill="#2E4A68" />
                </svg>
                <span className="ix">
                  <b>Healthy Snacks</b>
                  <span>13 products</span>
                </span>
              </a>
              <a href="#healthy-beverages">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                  <path d="M40 50h28l-4 36H44Z" fill="#FBF9F5" />
                  <path d="M42 64h24l-2 22H44Z" fill="#4F6B3A" />
                  <path
                    d="M34 30c5 6 8 11 8 15a8 8 0 0 1-16 0c0-4 3-9 8-15z"
                    fill="#D9973A"
                  />
                </svg>
                <span className="ix">
                  <b>Healthy Beverages</b>
                  <span>6 products</span>
                </span>
              </a>
              <a href="#organic-foods">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                  <path
                    d="M50 52c-6-6-22-4-22 14 0 14 10 22 16 22 3 0 4-2 6-2s3 2 6 2c6 0 16-8 16-22 0-18-16-20-22-14z"
                    fill="#7E5414"
                  />
                  <path
                    d="M50 52c0-8 2-14 6-18"
                    stroke="#7E5414"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M52 44c4-8 12-10 18-8-4 6-10 9-18 8z"
                    fill="#D9973A"
                  />
                </svg>
                <span className="ix">
                  <b>Organic &amp; Whole Foods</b>
                  <span>6 products</span>
                </span>
              </a>
              <a href="#herbal-medicine">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                  <path
                    d="M58 60l12-28"
                    stroke="#D9973A"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path d="M24 58h52a26 24 0 0 1-52 0Z" fill="#2E4A68" />
                  <rect
                    x="38"
                    y="80"
                    width="24"
                    height="7"
                    rx="3"
                    fill="#2E4A68"
                  />
                </svg>
                <span className="ix">
                  <b>Herbal Medicine</b>
                  <span>5 products</span>
                </span>
              </a>
              <a href="#crystals">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                  <path d="M46 88V48l8-14 8 14v40Z" fill="#4F6B3A" />
                  <path d="M30 88V62l7-10 7 10v26Z" fill="#D9973A" />
                  <path d="M62 88V66l6-9 6 9v22Z" fill="#4F6B3A" opacity=".6" />
                </svg>
                <span className="ix">
                  <b>Crystals &amp; Energy Tools</b>
                  <span>6 products</span>
                </span>
              </a>
              <a href="#body-care">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                  <rect
                    x="28"
                    y="50"
                    width="24"
                    height="36"
                    rx="5"
                    fill="#7E5414"
                  />
                  <rect x="36" y="42" width="8" height="8" fill="#7E5414" />
                  <path
                    d="M40 42V36h10"
                    stroke="#7E5414"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <rect
                    x="56"
                    y="70"
                    width="22"
                    height="16"
                    rx="6"
                    fill="#D9973A"
                  />
                </svg>
                <span className="ix">
                  <b>Natural Body Care</b>
                  <span>5 products</span>
                </span>
              </a>
              <a href="#sleep">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                  <rect
                    x="24"
                    y="44"
                    width="52"
                    height="22"
                    rx="11"
                    fill="#FBF9F5"
                  />
                  <rect
                    x="22"
                    y="66"
                    width="56"
                    height="20"
                    rx="4"
                    fill="#2E4A68"
                  />
                  <path d="M22 74h56" stroke="#D9973A" strokeWidth="4" />
                </svg>
                <span className="ix">
                  <b>Organic Sleep &amp; Textiles</b>
                  <span>3 products</span>
                </span>
              </a>
              <a href="#water-wellness">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                  <path d="M30 40h34l-2 46H34Z" fill="#4F6B3A" />
                  <path
                    d="M64 46h4a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-5"
                    fill="none"
                    stroke="#4F6B3A"
                    strokeWidth="4"
                  />
                  <rect
                    x="34"
                    y="48"
                    width="26"
                    height="10"
                    rx="2"
                    fill="#FBF9F5"
                  />
                  <path
                    d="M38 66h18"
                    stroke="#D9973A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="ix">
                  <b>Water &amp; Wellness Infrastructure</b>
                  <span>4 products</span>
                </span>
              </a>
              <a href="#clean-living">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#EFE4D3" />
                  <path d="M36 52h22v34H36Z" fill="#7E5414" />
                  <path d="M40 52v-8h14v8Z" fill="#7E5414" />
                  <path d="M40 40h22l-4 6H40Z" fill="#D9973A" />
                  <path
                    d="M66 72c0-10 6-16 12-16 0 10-6 16-12 16z"
                    fill="#D9973A"
                  />
                </svg>
                <span className="ix">
                  <b>Clean Living &amp; Non-Toxic Home</b>
                  <span>9 products</span>
                </span>
              </a>
              <a href="#kitchen">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#DCE4EB" />
                  <path
                    d="M26 56h48v20a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10Z"
                    fill="#2E4A68"
                  />
                  <rect
                    x="22"
                    y="52"
                    width="56"
                    height="7"
                    rx="3.5"
                    fill="#2E4A68"
                  />
                  <rect
                    x="44"
                    y="44"
                    width="12"
                    height="8"
                    rx="3"
                    fill="#D9973A"
                  />
                  <path
                    d="M18 62h8M74 62h8"
                    stroke="#2E4A68"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="ix">
                  <b>Mindful Kitchen &amp; Healthy Cooking</b>
                  <span>4 products</span>
                </span>
              </a>
              <a href="#biohacking">
                <svg
                  className="cicon"
                  viewBox="9 9 82 83"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 91V50a37 37 0 0 1 74 0v41Z" fill="#E1E7D6" />
                  <rect
                    x="38"
                    y="30"
                    width="24"
                    height="58"
                    rx="10"
                    fill="#4F6B3A"
                    opacity=".35"
                  />
                  <rect
                    x="32"
                    y="44"
                    width="36"
                    height="32"
                    rx="9"
                    fill="#4F6B3A"
                  />
                  <path
                    d="M37 60h8l3-7 5 14 3-7h7"
                    fill="none"
                    stroke="#D9973A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ix">
                  <b>Biohacking &amp; Wellness Tech</b>
                  <span>5 products</span>
                </span>
              </a>
            </nav>
            <div className="btns" style={{ marginTop: "1.75rem" }}>
              <A className="btn ghost" href="/biological-founder">
                Back to the articles
              </A>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
