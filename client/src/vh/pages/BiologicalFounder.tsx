// Generated from the Claude Design board "BiologicalFounder.dc.html" (Vibe House SF Site).
// Markup mirrors the design 1:1; styling lives in ../vh.css.
import SEO from "@/components/SEO";
import { useCopy } from "../lovieCopy";
import SiteLayout, { A } from "../SiteLayout";

export default function BiologicalFounder() {
  const { t, copy } = useCopy();
  return (
    <SiteLayout closingTitle="Let's start there.">
      <SEO
        title={copy.bioFounderPageTitle}
        description={copy.seoBioFounderDescription}
        path="/biological-founder"
        keywords={copy.bioFounderSeoKeywords}
        ogType="article"
      />
      <main id="main">
        <section className="phero">
          <div className="container rv">
            <A className="crumb" href="/">
              ← Back to home
            </A>{" "}
            <span className="label">
              {t(
                "The founder's pharmacy · A series on health, environment and building"
              )}
            </span>{" "}
            <h1 className="d1" style={{ maxWidth: "13ch" }}>
              Designing for the <span className="hl">biological</span>{" "}
              {t("founder")}
            </h1>
            <p className="lede">
              {t(
                "Silicon Valley knows how to optimize machines. We optimize inference speed, model performance, capital efficiency. But we rarely optimize the founder. This series explores what happens when you treat the founder's nervous system as infrastructure."
              )}
            </p>
          </div>
        </section>
        <section
          className="band candle tight"
          id="contents"
          style={{ paddingTop: "0" }}
        >
          <div className="container">
            <div className="head left" style={{ marginBottom: "1.25rem" }}>
              <span className="label">Table of contents</span>
            </div>
            <nav className="contents" aria-label="Articles">
              <a href="#article-1">
                <span>Engineering Human Flourishing in the Age of AI</span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-2">
                <span>
                  {t("Tea, Salt, and the Founder's Immune System", "toc")}
                </span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-3">
                <span>
                  Smudging Palo Santo in the Age of Artificial Intelligence
                </span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-4">
                <span>Silicon Valley Is Optimizing the Wrong System</span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-5">
                <span>The Vibe House Manifesto</span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-6">
                <span>{t("Designing for the Biological Founder", "toc")}</span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-7">
                <span>The House as a Nervous System</span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-8">
                <span>
                  {t("The Founder Kitchen: Food as Infrastructure", "toc")}
                </span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-9">
                <span>Spiritual Infrastructure for Builders</span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="#article-10">
                <span>
                  {t(
                    "Designing a Founder House for Health, Not Just Aesthetics",
                    "toc"
                  )}
                </span>
                <span className="ar" aria-hidden="true">
                  →
                </span>
              </a>
            </nav>
          </div>
        </section>
        <section className="band linen" id="article-1">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">
                  Engineering Human Flourishing in the Age of AI
                </h2>
                <span className="sub">The Vibe House</span>
              </header>
              <p>
                {t(
                  "San Francisco has no shortage of hacker houses. There are sleep-deprived founders coding through the night, whiteboards filled with impossible ideas, refrigerators stocked with energy drinks and ambition."
                )}
              </p>
              <p className="single">This is not that.</p>
              <p>
                The Vibe House began as a question: If we are building
                artificial intelligence to advance humanity, shouldn't we begin
                by advancing ourselves?
              </p>
              <figure className="bscene t-sage">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b1-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                    <clipPath id="b1-win">
                      <path d="M70 262V170a80 80 0 0 1 160 0V262Z" />
                    </clipPath>
                    <radialGradient id="b1-glow">
                      <stop offset="0" stopColor="#FBF9F5" stopOpacity=".9" />
                      <stop offset="1" stopColor="#FBF9F5" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <g clipPath="url(#b1-arch)">
                    <rect width="400" height="460" fill="#E1E7D6" />
                    <circle cx="318" cy="190" r="110" fill="url(#b1-glow)" />
                    <g clipPath="url(#b1-win)">
                      <rect
                        x="60"
                        y="80"
                        width="180"
                        height="190"
                        fill="#DCE4EB"
                      />
                      <path
                        d="M60 150c40 10 80 34 104 80"
                        fill="none"
                        stroke="#635C56"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <g fill="#4F6B3A">
                        <ellipse
                          cx="88"
                          cy="150"
                          rx="11"
                          ry="4"
                          transform="rotate(30 88 150)"
                        />
                        <ellipse
                          cx="104"
                          cy="168"
                          rx="11"
                          ry="4"
                          transform="rotate(-20 104 168)"
                        />
                        <ellipse
                          cx="124"
                          cy="174"
                          rx="11"
                          ry="4"
                          transform="rotate(50 124 174)"
                        />
                        <ellipse
                          cx="138"
                          cy="194"
                          rx="11"
                          ry="4"
                          transform="rotate(-30 138 194)"
                        />
                        <ellipse
                          cx="152"
                          cy="206"
                          rx="11"
                          ry="4"
                          transform="rotate(60 152 206)"
                        />
                      </g>
                      <g fill="#8AA06F">
                        <ellipse
                          cx="96"
                          cy="164"
                          rx="10"
                          ry="3.6"
                          transform="rotate(70 96 164)"
                        />
                        <ellipse
                          cx="130"
                          cy="184"
                          rx="10"
                          ry="3.6"
                          transform="rotate(-60 130 184)"
                        />
                      </g>
                    </g>
                    <path
                      d="M150 92V262M70 206H230"
                      stroke="#FBF9F5"
                      strokeWidth="5"
                    />
                    <path
                      d="M70 262V170a80 80 0 0 1 160 0V262Z"
                      fill="none"
                      stroke="#FBF9F5"
                      strokeWidth="8"
                    />
                    <rect
                      x="60"
                      y="260"
                      width="180"
                      height="8"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M378 330V160c0-28-20-44-50-44"
                      fill="none"
                      stroke="#161515"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M308 116h40l8 22h-56Z"
                      fill="#FBF9F5"
                      stroke="#ECE6DC"
                      strokeWidth="1.5"
                    />
                    <rect y="330" width="400" height="130" fill="#E8D7BC" />
                    <rect y="326" width="400" height="6" fill="#FBF9F5" />
                    <path
                      d="M0 372H400M0 416H400M100 332v40M260 332v40M180 372v44M340 372v44"
                      stroke="#DCC7A6"
                      strokeWidth="1.5"
                    />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="36"
                        cy="262"
                        rx="26"
                        ry="15"
                        transform="rotate(-30 36 262)"
                      />
                      <ellipse
                        cx="74"
                        cy="244"
                        rx="24"
                        ry="14"
                        transform="rotate(25 74 244)"
                      />
                      <ellipse
                        cx="34"
                        cy="300"
                        rx="22"
                        ry="12"
                        transform="rotate(-10 34 300)"
                      />
                    </g>
                    <path
                      d="M30 262l14-8M70 244l12 6M30 300l12-2"
                      stroke="#E1E7D6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path d="M30 360h48l-6 40H36Z" fill="#7E5414" />
                    <path
                      d="M54 360c0-30-10-60-20-96M54 360c2-40 12-80 20-114"
                      fill="none"
                      stroke="#4F6B3A"
                      strokeWidth="3"
                    />
                    <rect
                      x="186"
                      y="300"
                      width="194"
                      height="10"
                      rx="4"
                      fill="#7E5414"
                    />
                    <rect
                      x="198"
                      y="310"
                      width="8"
                      height="78"
                      fill="#282526"
                    />
                    <rect
                      x="360"
                      y="310"
                      width="8"
                      height="78"
                      fill="#282526"
                    />
                    <rect
                      x="236"
                      y="256"
                      width="72"
                      height="44"
                      rx="5"
                      fill="#161515"
                    />
                    <rect
                      x="242"
                      y="262"
                      width="60"
                      height="32"
                      rx="2"
                      fill="#EFE4D3"
                    />
                    <g fill="#4F6B3A">
                      <rect x="248" y="268" width="26" height="3" rx="1.5" />
                      <rect
                        x="254"
                        y="275"
                        width="36"
                        height="3"
                        rx="1.5"
                        opacity=".6"
                      />
                      <rect x="248" y="282" width="20" height="3" rx="1.5" />
                    </g>
                    <rect
                      x="228"
                      y="296"
                      width="88"
                      height="5"
                      rx="2"
                      fill="#282526"
                    />
                    <path
                      d="M334 278h20v16a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6z"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M354 282h3a5 5 0 0 1 0 10h-3"
                      fill="none"
                      stroke="#FBF9F5"
                      strokeWidth="3"
                    />
                    <path d="M198 300h20l-2-14h-16Z" fill="#B5651D" />
                    <path
                      d="M208 286c-1-8-6-12-11-12 1 6 5 10 11 12zM208 286c1-9 6-13 12-13-1 7-6 11-12 13z"
                      fill="#4F6B3A"
                    />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Plants in every room</span>
                  <span>Warm light at night</span>
                  <span>Olive, rosemary, lemon</span>
                </figcaption>
              </figure>
              <p>
                For me, technology has always been inseparable from human
                potential. You cannot build systems of intelligence while
                neglecting your own nervous system. You cannot architect the
                future on top of burnout.
              </p>
              <p className="single">So we engineered something different.</p>
              <p className="single">
                A house designed not just for productivity — but for vitality.
              </p>
              <p>
                Every room is filled with large and small living plants. NASA
                research has shown certain houseplants can significantly reduce
                airborne toxins; we leaned in fully. Within 24 hours, many
                indoor plants can reduce measurable volatile organic compounds
                in enclosed spaces. But the benefit is not only chemical.
                Looking at greenery lowers cortisol. It signals safety to the
                brain. It restores cognitive bandwidth.
              </p>
              <p>
                There are no harsh white lights. Only warm, yellow-toned
                lighting that honors circadian rhythms. Light is biology. Cool
                blue light at night suppresses melatonin, fractures sleep,
                fragments thinking. We build for longevity — not for adrenaline
                spikes.
              </p>
              <p>
                {t(
                  "The house breathes sunlight. Windows remain open whenever possible. Natural light improves mood, focus, and immune regulation. In the mornings, founders gather barefoot on wooden floors — grounding, literally and neurologically."
                )}
              </p>
              <p>
                Even seating is intentional. We often sit on the floor.
                Floor-sitting improves mobility, hip flexibility, and posture.
                It subtly resists the sedentary decay of modern work life. You
                cannot discuss the future of AI while ignoring your own
                biomechanics.
              </p>
              <p>
                Nature paintings and floral art fill the walls. Studies show
                viewing natural imagery reduces stress markers and increases
                creativity. The brain does not distinguish sharply between
                actual nature and well-rendered depictions. Both soothe.
              </p>
              <p>
                Outside, olive trees and rosemary grow in the garden. A lemon
                tree leans toward the sun. There is something ancient and
                stabilizing about tending living things while building digital
                worlds.
              </p>
              <p>
                The Vibe House is not a retreat from innovation. It is a
                refinement of it.
              </p>
              <div className="litany">
                <span>Spiritual meets operational.</span>
                <span>Relaxed meets disciplined.</span>
                <span>Nature meets nurture.</span>
              </div>
              <p className="single">
                We build intelligence — but we begin with coherence.
              </p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-2">
                  {t("Next: Tea, Salt, and the Founder's Immune System →")}
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band candle" id="article-2">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">
                  {t("Tea, Salt, and the Founder's Immune System")}
                </h2>
              </header>
              <p className="single">
                In most startup houses, caffeine is the fuel.
              </p>
              <p className="single">
                In ours, it's soursop, jasmine green, and butterfly pea.
              </p>
              <p>
                The kitchen counter reads like an apothecary crossed with a
                Mediterranean grandmother's pantry.
              </p>
              <figure className="bscene t-oat">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b2-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b2-arch)">
                    <rect width="400" height="460" fill="#EFE4D3" />
                    <rect
                      x="56"
                      y="196"
                      width="288"
                      height="8"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M76 196v-36a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v36Z"
                      fill="#FBF9F5"
                      opacity=".9"
                    />
                    <rect
                      x="78"
                      y="172"
                      width="36"
                      height="24"
                      fill="#ECE6DC"
                    />
                    <rect
                      x="80"
                      y="146"
                      width="32"
                      height="8"
                      rx="2"
                      fill="#7E5414"
                    />
                    <path
                      d="M134 196v-30a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v30Z"
                      fill="#D9973A"
                    />
                    <rect
                      x="136"
                      y="152"
                      width="32"
                      height="8"
                      rx="2"
                      fill="#7E5414"
                    />
                    <g fill="#4F6B3A">
                      <rect x="196" y="150" width="9" height="46" rx="2" />
                      <rect
                        x="208"
                        y="160"
                        width="9"
                        height="36"
                        rx="2"
                        opacity=".7"
                      />
                    </g>
                    <path
                      d="M236 196c-8-6-8-24 0-30h26c8 6 8 24 0 30Z"
                      fill="#DCE4EB"
                    />
                    <path d="M249 166v-14" stroke="#4F6B3A" strokeWidth="2.5" />
                    <path
                      d="M249 156c-6-6-12-6-16-4 4 4 10 6 16 4zM249 152c5-6 11-7 15-5-4 4-10 6-15 5z"
                      fill="#4F6B3A"
                    />
                    <rect
                      x="290"
                      y="166"
                      width="40"
                      height="30"
                      rx="4"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M296 178h28M296 186h20"
                      stroke="#D9973A"
                      strokeWidth="2"
                    />
                    <rect y="300" width="400" height="14" fill="#FBF9F5" />
                    <rect y="314" width="400" height="146" fill="#7E5414" />
                    <path
                      d="M100 314v146M200 314v146M300 314v146"
                      stroke="#6A460F"
                      strokeWidth="2"
                    />
                    <g fill="#E5A957">
                      <rect x="84" y="340" width="4" height="22" rx="2" />
                      <rect x="112" y="340" width="4" height="22" rx="2" />
                      <rect x="284" y="340" width="4" height="22" rx="2" />
                      <rect x="312" y="340" width="4" height="22" rx="2" />
                    </g>
                    <path
                      d="M134 300c-8 0-12-8-12-20 0-14 10-22 28-22s28 8 28 22c0 12-4 20-12 20Z"
                      fill="#B5651D"
                    />
                    <path
                      d="M122 280c-10-2-16-8-18-16 8 0 14 4 18 10z"
                      fill="#B5651D"
                    />
                    <path
                      d="M178 270c10 0 12 16 0 18"
                      fill="none"
                      stroke="#B5651D"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M138 258c0-12 5-18 12-18s12 6 12 18Z"
                      fill="#D9973A"
                    />
                    <path
                      d="M140 250c-6-1-9-5-10-9 5 0 8 2 10 6z"
                      fill="#D9973A"
                    />
                    <rect
                      x="144"
                      y="234"
                      width="12"
                      height="6"
                      rx="3"
                      fill="#7E5414"
                    />
                    <path
                      d="M196 274c0 8 4 12 2 22h14c-2-10 2-14 2-22Z"
                      fill="#B5651D"
                      stroke="#FBF9F5"
                      strokeWidth="1.4"
                    />
                    <rect
                      x="190"
                      y="295"
                      width="30"
                      height="5"
                      rx="2.5"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M230 274c0 8 4 12 2 22h14c-2-10 2-14 2-22Z"
                      fill="#B5651D"
                      stroke="#FBF9F5"
                      strokeWidth="1.4"
                    />
                    <rect
                      x="224"
                      y="295"
                      width="30"
                      height="5"
                      rx="2.5"
                      fill="#FBF9F5"
                    />
                    <path d="M262 286h40a20 14 0 0 1-40 0Z" fill="#2E4A68" />
                    <path
                      d="M266 286c4-8 10-12 16-12s12 4 16 12Z"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M318 300v-40c0-6 4-10 6-14v-12h8v12c2 4 6 8 6 14v40Z"
                      fill="#8E9F78"
                    />
                    <rect
                      x="324"
                      y="226"
                      width="8"
                      height="8"
                      rx="1.5"
                      fill="#7E5414"
                    />
                    <rect
                      x="320"
                      y="270"
                      width="16"
                      height="16"
                      rx="2"
                      fill="#FBF9F5"
                      opacity=".7"
                    />
                    <circle cx="358" cy="290" r="10" fill="#E8B53C" />
                    <path
                      d="M366 284l5-4"
                      stroke="#4F6B3A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Soursop and jasmine</span>
                  <span>Mineral-rich sea salt</span>
                  <span>Olive oil from Urla</span>
                </figcaption>
              </figure>
              <p>
                {t(
                  "Soursop leaf tea has been studied for its antioxidant compounds. While no tea cures disease — and we are cautious with such claims — antioxidants support cellular repair and immune resilience. Founders operate in cognitive marathons. Oxidative stress is real."
                )}
              </p>
              <p>
                Butterfly pea flower tea, that luminous cobalt blue infusion,
                contains anthocyanins — compounds associated with
                anti-inflammatory and neuroprotective properties. It sharpens
                attention without agitation.
              </p>
              <p>
                Clove and anise simmer gently on colder evenings. Both contain
                antimicrobial properties long recognized in traditional
                medicine. Dandelion root tea supports liver function — the
                body's detoxification engine. The liver processes everything:
                stress hormones, environmental toxins, metabolic waste.
                Supporting it is not trend; it is infrastructure.
              </p>
              <p>
                {t(
                  "Jasmine green tea delivers L-theanine — a compound shown to promote calm alertness. The state every founder claims to want but rarely achieves."
                )}
              </p>
              <p>
                There is no Morton's salt in this kitchen. Only mineral-rich sea
                salts — containing trace elements absent in heavily refined
                varieties. Electrolytes are not branding; they are cellular
                communication.
              </p>
              <p>
                Food is simple: no processed sugars, no refined flours.
                Probiotic-rich yogurt. Fermented vegetables. Olive oil from Urla
                — my hometown in Turkey — where olive trees have grown longer
                than most governments have existed. Extra virgin olive oil
                contains polyphenols associated with cardiovascular and
                anti-inflammatory benefits.
              </p>
              <p>
                Goat milk soaps in the bathrooms. Plastic-free packaging
                wherever possible. Non-toxic cleaning supplies. Your skin
                absorbs what you place upon it; your lungs absorb what you
                spray.
              </p>
              <p>
                Oscillococcinum, arnica, and other homeopathics sit quietly in
                drawers — gentle supports, not miracle cures. Colloidal silver
                is used sparingly and with discernment. We do not worship
                alternative medicine; we integrate thoughtfully.
              </p>
              <p>
                Organic vitamins fill the gaps modern soil can no longer
                reliably provide.
              </p>
              <p className="single">
                Health is not biohacking theater. It is disciplined simplicity.
              </p>
              <div className="litany">
                <span>{t("The founder immune system is an asset class.")}</span>
                <span>Protect it.</span>
              </div>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-3">
                  Next: Smudging Palo Santo in the Age of Artificial
                  Intelligence →
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band linen" id="article-3">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">
                  Smudging Palo Santo in the Age of Artificial Intelligence
                </h2>
              </header>
              <p>
                You can call it spiritual. You can call it atmospheric
                engineering.
              </p>
              <p>
                Every few days, we walk through the house with palo santo and
                sage. The smoke rises, subtle and woody. Windows open. Air
                shifts.
              </p>
              <p>
                Scientifically, burning certain plant materials has been shown
                to reduce airborne bacteria for limited periods. Symbolically,
                it marks reset. In high-performance environments, ritual
                matters. The nervous system thrives on signals of renewal.
              </p>
              <figure className="bscene t-fog">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b3-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                    <radialGradient id="b3-glow">
                      <stop offset="0" stopColor="#FBF9F5" stopOpacity=".95" />
                      <stop offset="1" stopColor="#FBF9F5" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <g clipPath="url(#b3-arch)">
                    <rect width="400" height="460" fill="#DCE4EB" />
                    <circle cx="200" cy="190" r="150" fill="url(#b3-glow)" />
                    <path
                      d="M130 330V196a70 70 0 0 1 140 0V330Z"
                      fill="#FBF9F5"
                      opacity=".55"
                    />
                    <path
                      d="M168 300c-14-20 10-30-2-52s14-32 2-58c-8-18 6-30 14-40"
                      fill="none"
                      stroke="#635C56"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity=".5"
                    />
                    <path
                      d="M180 296c-8-14 8-24 0-40s10-26 4-44"
                      fill="none"
                      stroke="#635C56"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity=".35"
                    />
                    <rect y="330" width="400" height="130" fill="#C9D4DF" />
                    <rect y="326" width="400" height="6" fill="#FBF9F5" />
                    <path
                      d="M0 376H400M0 420H400"
                      stroke="#BCC8D4"
                      strokeWidth="1.5"
                    />
                    <ellipse cx="200" cy="392" rx="70" ry="22" fill="#4F6B3A" />
                    <ellipse cx="200" cy="384" rx="70" ry="20" fill="#5E7B47" />
                    <path
                      d="M140 384h120"
                      stroke="#E1E7D6"
                      strokeWidth="1.6"
                      opacity=".6"
                    />
                    <rect
                      x="132"
                      y="312"
                      width="92"
                      height="12"
                      rx="6"
                      fill="#7E5414"
                    />
                    <path
                      d="M150 312l40-14"
                      stroke="#B5651D"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <circle cx="192" cy="297" r="4.5" fill="#D9973A" />
                    <path d="M262 300h68a34 30 0 0 1-68 0Z" fill="#B5651D" />
                    <path
                      d="M262 300h68"
                      stroke="#D9973A"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M338 330l-30-46"
                      stroke="#7E5414"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <rect
                      x="76"
                      y="290"
                      width="28"
                      height="40"
                      rx="6"
                      fill="#7E5414"
                    />
                    <rect
                      x="82"
                      y="276"
                      width="16"
                      height="14"
                      rx="2"
                      fill="#161515"
                    />
                    <path
                      d="M90 276v-16"
                      stroke="#161515"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <rect
                      x="80"
                      y="304"
                      width="20"
                      height="12"
                      rx="1.5"
                      fill="#FBF9F5"
                      opacity=".8"
                    />
                    <path d="M330 268h36l-4 30h-28Z" fill="#FBF9F5" />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="338"
                        cy="248"
                        rx="13"
                        ry="5"
                        transform="rotate(-50 338 248)"
                      />
                      <ellipse
                        cx="358"
                        cy="246"
                        rx="13"
                        ry="5"
                        transform="rotate(45 358 246)"
                      />
                      <ellipse
                        cx="348"
                        cy="234"
                        rx="13"
                        ry="5"
                        transform="rotate(-88 348 234)"
                      />
                    </g>
                    <rect
                      x="320"
                      y="296"
                      width="56"
                      height="6"
                      rx="3"
                      fill="#FBF9F5"
                    />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Palo santo resets</span>
                  <span>Binaural evenings</span>
                  <span>Organic oils only</span>
                </figcaption>
              </figure>
              <p>
                There is binaural beats music in the evenings — frequencies
                shown to influence brainwave states, encouraging focus or deep
                relaxation depending on the track. Sound alters cognition.
              </p>
              <p>
                Essential oil diffusers hum softly — organic oils only. No
                synthetic perfumes. Lavender for parasympathetic calm. Rosemary
                for alertness. Citrus for mood elevation.
              </p>
              <p>
                {t(
                  "Mantak Chia's teachings on energy circulation influence some of our morning breathwork sessions. Whether you interpret it through Taoist frameworks or modern vagal tone science, the result is the same: founders who regulate stress outperform those who suppress it."
                )}
              </p>
              <p>
                Reiki practitioners occasionally bless the space. Astrology
                conversations emerge over tea. Skeptics are welcome.
                Participation is optional. What matters is coherence —
                psychological safety, emotional fluency, intellectual rigor
                coexisting.
              </p>
              <p>
                Positive, funny, timeless quotes hang on the walls. Humor lowers
                stress hormones. Optimism expands cognition. The brain in threat
                mode cannot innovate.
              </p>
              <div className="litany">
                <span>This house is comfortable but intentional.</span>
                <span>Relaxing yet disciplined.</span>
                <span>Grounded yet expansive.</span>
              </div>
              <p>
                We are building AI companies here. But we are also building
                humans capable of wielding that power wisely.
              </p>
              <div className="litany">
                <span>
                  The future will not be determined solely by code quality.
                </span>
                <span>It will be shaped by nervous systems.</span>
                <span>By health.</span>
                <span>By consciousness.</span>
              </div>
              <p>
                The Vibe House is a small experiment. If we can cultivate
                clarity inside four walls in San Francisco — perhaps we can
                scale it to society.
              </p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-4">
                  Next: Silicon Valley Is Optimizing the Wrong System →
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band candle" id="article-4">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">
                  Silicon Valley Is Optimizing the Wrong System
                </h2>
              </header>
              <p className="single">
                Silicon Valley believes it is building the future.
              </p>
              <p>
                {t(
                  "But most founders are running on nervous systems that are quietly collapsing."
                )}
              </p>
              <p>
                We speak endlessly about optimizing machine learning models —
                yet ignore sleep cycles. We debate inference costs — while
                consuming refined sugar at 2 a.m. We fund longevity startups —
                while living in chronic inflammation.
              </p>
              <figure className="bscene t-ink">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b4-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                    <clipPath id="b4-win">
                      <path d="M282 240V168a44 44 0 0 1 88 0V240Z" />
                    </clipPath>
                    <radialGradient id="b4-glow">
                      <stop offset="0" stopColor="#D9973A" stopOpacity=".45" />
                      <stop offset="1" stopColor="#D9973A" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <g clipPath="url(#b4-arch)">
                    <rect width="400" height="460" fill="#282526" />
                    <g clipPath="url(#b4-win)">
                      <rect
                        x="276"
                        y="110"
                        width="100"
                        height="140"
                        fill="#2E4A68"
                      />
                      <circle cx="340" cy="160" r="14" fill="#F2C98A" />
                      <circle cx="347" cy="155" r="12" fill="#2E4A68" />
                      <g fill="#FBF9F5">
                        <circle cx="300" cy="150" r="1.6" />
                        <circle cx="314" cy="204" r="1.4" />
                        <circle cx="352" cy="214" r="1.6" />
                      </g>
                    </g>
                    <path d="M326 124V240" stroke="#3A3532" strokeWidth="4" />
                    <path
                      d="M282 240V168a44 44 0 0 1 88 0V240Z"
                      fill="none"
                      stroke="#3A3532"
                      strokeWidth="7"
                    />
                    <rect
                      x="96"
                      y="150"
                      width="140"
                      height="74"
                      rx="4"
                      fill="#3A3532"
                    />
                    <path
                      d="M108 190h30l8-18 12 36 10-26 6 8h50"
                      fill="none"
                      stroke="#D9973A"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="56" cy="270" r="80" fill="url(#b4-glow)" />
                    <rect y="360" width="400" height="100" fill="#1F1C1D" />
                    <path
                      d="M80 330v-62a26 26 0 0 1 26-26h120a26 26 0 0 1 26 26v62Z"
                      fill="#EFE4D3"
                    />
                    <rect
                      x="70"
                      y="316"
                      width="300"
                      height="44"
                      rx="10"
                      fill="#E1E7D6"
                    />
                    <path
                      d="M150 318v40M190 318v40M230 318v40M270 318v40M310 318v40"
                      stroke="#C9D3BD"
                      strokeWidth="2"
                    />
                    <rect
                      x="96"
                      y="290"
                      width="62"
                      height="28"
                      rx="12"
                      fill="#FBF9F5"
                    />
                    <rect
                      x="168"
                      y="290"
                      width="62"
                      height="28"
                      rx="12"
                      fill="#FBF9F5"
                    />
                    <path d="M250 316h120v44H250Z" fill="#8AA06F" />
                    <rect x="74" y="358" width="8" height="18" fill="#7E5414" />
                    <rect
                      x="358"
                      y="358"
                      width="8"
                      height="18"
                      fill="#7E5414"
                    />
                    <rect
                      x="22"
                      y="300"
                      width="46"
                      height="60"
                      rx="4"
                      fill="#7E5414"
                    />
                    <path d="M34 300h22l-2-6H36Z" fill="#161515" />
                    <path d="M45 294v-26" stroke="#161515" strokeWidth="2.5" />
                    <path d="M32 268h26l-6-20H38Z" fill="#E5A957" />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Sleep cycles</span>
                  <span>Nervous systems</span>
                  <span>Coherence</span>
                </figcaption>
              </figure>
              <p className="single">This is not hypocrisy. It is blind spot.</p>
              <p>
                The Vibe House began as a quiet rebellion against performative
                productivity.
              </p>
              <div className="litany">
                <span>No processed food.</span>
                <span>No synthetic fragrances.</span>
                <span>No harsh lighting.</span>
                <span>
                  No chemical cleaning sprays aerosolized into the lungs of
                  people designing civilization's next layer.
                </span>
              </div>
              <p className="single">Instead:</p>
              <div className="litany">
                <span>
                  Mineral-rich salt, because electrolytes govern cellular
                  intelligence.
                </span>
                <span>
                  Fermented foods, because the microbiome influences mood and
                  cognition.
                </span>
                <span>
                  Dandelion tea for liver support — because detoxification is
                  not aesthetic, it is metabolic.
                </span>
                <span>Jasmine green tea for calm focus.</span>
                <span>Clove and anise for antimicrobial support.</span>
              </div>
              <p>
                We smudge palo santo not because we are naïve — but because
                ritual regulates the nervous system. And regulated nervous
                systems build better companies.
              </p>
              <p>
                Large and small living plants in every room. Not decor —
                filtration. Air quality influences cognitive performance more
                than most venture decks acknowledge.
              </p>
              <div className="litany">
                <span>Yellow light at night to protect melatonin.</span>
                <span>Natural light by day to entrain circadian rhythm.</span>
                <span>Bamboo bedding to reduce synthetic off-gassing.</span>
                <span>
                  Goat milk soap. Olive oil soap. Plastic-free bathrooms.
                </span>
              </div>
              <p className="single">Is this excessive?</p>
              <p className="single">Or is it simply disciplined?</p>
              <p>
                If we are serious about advancing humanity, we must start by
                eliminating the environmental toxins we have normalized.
              </p>
              <div className="litany">
                <span>{t("The founder is infrastructure.")}</span>
                <span>{t("Burned-out founders build brittle systems.")}</span>
                <span>{t("Regulated founders build resilient ones.")}</span>
              </div>
              <p>
                Silicon Valley optimized speed. It is time to optimize
                coherence.
              </p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-5">
                  Next: The Vibe House Manifesto →
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band linen" id="article-5">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">The Vibe House Manifesto</h2>
              </header>
              <p>
                We're building AI companies in San Francisco. But first, we're
                building humans.
              </p>
              <div className="litany">
                <span>No processed foods.</span>
                <span>No refined sugars.</span>
                <span>No synthetic fragrances.</span>
                <span>No toxic cleaning products.</span>
              </div>
              <p className="single">Yes to:</p>
              <figure className="bscene t-amber">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b5-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b5-arch)">
                    <rect width="400" height="460" fill="#E5A957" />
                    <path
                      d="M58 98l6 5 6-5M84 84l5 4 5-4"
                      fill="none"
                      stroke="#7E5414"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M94 186L200 110l106 76Z" fill="#7E5414" />
                    <rect
                      x="104"
                      y="184"
                      width="192"
                      height="216"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M104 236h192M104 312h192"
                      stroke="#ECE6DC"
                      strokeWidth="2"
                    />
                    <g fill="#F2C98A">
                      <path d="M124 228V200a14 14 0 0 1 28 0v28Z" />
                      <path d="M186 228V200a14 14 0 0 1 28 0v28Z" />
                      <path d="M248 228V200a14 14 0 0 1 28 0v28Z" />
                      <path d="M124 296V262a14 14 0 0 1 28 0v34Z" />
                      <path d="M248 296V262a14 14 0 0 1 28 0v34Z" />
                    </g>
                    <g stroke="#ECE6DC" strokeWidth="2">
                      <path d="M138 186v42M200 186v42M262 186v42M138 248v48M262 248v48" />
                    </g>
                    <path
                      d="M176 400V318a24 24 0 0 1 48 0v82Z"
                      fill="#4F6B3A"
                    />
                    <circle cx="214" cy="362" r="2.6" fill="#D9973A" />
                    <path d="M168 400h64l6 12h-76Z" fill="#ECE6DC" />
                    <rect
                      x="156"
                      y="412"
                      width="88"
                      height="10"
                      fill="#E4DCCD"
                    />
                    <path d="M128 400h28l-3 -22h-22Z" fill="#B5651D" />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="134"
                        cy="364"
                        rx="12"
                        ry="5"
                        transform="rotate(-50 134 364)"
                      />
                      <ellipse
                        cx="150"
                        cy="362"
                        rx="12"
                        ry="5"
                        transform="rotate(45 150 362)"
                      />
                      <ellipse
                        cx="142"
                        cy="352"
                        rx="12"
                        ry="5"
                        transform="rotate(-88 142 352)"
                      />
                    </g>
                    <path d="M244 400h28l-3 -22h-22Z" fill="#B5651D" />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="250"
                        cy="364"
                        rx="12"
                        ry="5"
                        transform="rotate(-50 250 364)"
                      />
                      <ellipse
                        cx="266"
                        cy="362"
                        rx="12"
                        ry="5"
                        transform="rotate(45 266 362)"
                      />
                      <ellipse
                        cx="258"
                        cy="352"
                        rx="12"
                        ry="5"
                        transform="rotate(-88 258 352)"
                      />
                    </g>
                    <path
                      d="M340 422c-2-50 6-90-4-130M338 352c10-14 20-22 24-38"
                      fill="none"
                      stroke="#635C56"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="324"
                        cy="292"
                        rx="12"
                        ry="4.5"
                        transform="rotate(-35 324 292)"
                      />
                      <ellipse
                        cx="344"
                        cy="280"
                        rx="12"
                        ry="4.5"
                        transform="rotate(-75 344 280)"
                      />
                      <ellipse
                        cx="362"
                        cy="296"
                        rx="12"
                        ry="4.5"
                        transform="rotate(30 362 296)"
                      />
                      <ellipse
                        cx="330"
                        cy="314"
                        rx="12"
                        ry="4.5"
                        transform="rotate(15 330 314)"
                      />
                      <ellipse
                        cx="370"
                        cy="318"
                        rx="12"
                        ry="4.5"
                        transform="rotate(-50 370 318)"
                      />
                    </g>
                    <g fill="#8AA06F">
                      <ellipse
                        cx="352"
                        cy="304"
                        rx="11"
                        ry="4.2"
                        transform="rotate(40 352 304)"
                      />
                      <ellipse
                        cx="336"
                        cy="300"
                        rx="11"
                        ry="4.2"
                        transform="rotate(-20 336 300)"
                      />
                    </g>
                    <rect y="422" width="400" height="38" fill="#CF9447" />
                    <path d="M0 422H400" stroke="#FBF9F5" strokeWidth="3" />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Plants in every room</span>
                  <span>Natural light</span>
                  <span>Bamboo bedding</span>
                </figcaption>
              </figure>
              <div className="litany">
                <span>Soursop and jasmine green tea.</span>
                <span>Mineral-rich sea salt.</span>
                <span>Fermented foods and probiotics.</span>
                <span>Olive oil from ancient groves.</span>
                <span>Organic vitamins.</span>
              </div>
              <div className="litany">
                <span>Yes to plants in every room.</span>
                <span>
                  Yes to natural light and circadian lighting at night.
                </span>
                <span>Yes to bamboo bedding and plastic-free spaces.</span>
                <span>Yes to palo santo resets and binaural beats.</span>
                <span>
                  Yes to breathwork, energy work, and nervous system regulation.
                </span>
              </div>
              <p>
                This isn't aesthetic wellness culture. It's performance
                architecture.
              </p>
              <div className="litany">
                <span>Your liver processes stress.</span>
                <span>Your microbiome shapes your mood.</span>
                <span>Your lighting impacts your sleep.</span>
                <span>Your environment alters your cognition.</span>
              </div>
              <div className="litany">
                <span>We don't separate spiritual from operational.</span>
                <span>We don't separate health from output.</span>
                <span>We don't separate consciousness from code.</span>
              </div>
              <div className="litany">
                <span>Nature meets nurture.</span>
                <span>Relaxed meets disciplined.</span>
                <span>Spiritual meets scalable.</span>
              </div>
              <p>
                If we're going to build artificial intelligence — let's not
                neglect our own.
              </p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-6">
                  {t("Next: Designing for the Biological Founder →")}
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band candle" id="article-6">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">
                  {t("Designing for the Biological Founder")}
                </h2>
                <span className="sub">
                  A New Series on Health, Environment, and Building Without
                  Burning Out
                </span>
              </header>
              <p>
                Silicon Valley knows how to optimize machines. We optimize
                inference speed. We optimize model performance. We optimize
                capital efficiency.
              </p>
              <p className="single">
                {t("But we rarely optimize the founder.")}
              </p>
              <p>
                We talk about longevity while sleeping five hours. We fund
                health startups while eating processed food at 11 p.m. We build
                artificial intelligence inside bodies that are inflamed,
                overstimulated, and quietly exhausted.
              </p>
              <figure className="bscene t-sage">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b6-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                    <clipPath id="b6-win">
                      <path d="M110 270V170a90 90 0 0 1 180 0V270Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b6-arch)">
                    <rect width="400" height="460" fill="#E1E7D6" />
                    <g clipPath="url(#b6-win)">
                      <rect
                        x="100"
                        y="70"
                        width="200"
                        height="210"
                        fill="#DCE4EB"
                      />
                      <circle cx="242" cy="214" r="30" fill="#E8B53C" />
                      <path
                        d="M110 250c40-16 80-18 120-10s50 6 70 0V280H110Z"
                        fill="#8E9F78"
                      />
                    </g>
                    <path
                      d="M200 78V270M110 200H290"
                      stroke="#FBF9F5"
                      strokeWidth="5"
                    />
                    <path
                      d="M110 270V170a90 90 0 0 1 180 0V270Z"
                      fill="none"
                      stroke="#FBF9F5"
                      strokeWidth="8"
                    />
                    <rect
                      x="100"
                      y="268"
                      width="200"
                      height="8"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <rect y="330" width="400" height="130" fill="#E8D7BC" />
                    <rect y="326" width="400" height="6" fill="#FBF9F5" />
                    <path
                      d="M140 332h150l50 128H70Z"
                      fill="#F4E3C2"
                      opacity=".85"
                    />
                    <path
                      d="M0 376H400M0 420H400"
                      stroke="#DCC7A6"
                      strokeWidth="1.5"
                    />
                    <path d="M104 392h196l18 36H86Z" fill="#8AA06F" />
                    <path
                      d="M86 428h232"
                      stroke="#4F6B3A"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <ellipse cx="200" cy="396" rx="40" ry="12" fill="#D9973A" />
                    <path
                      d="M276 358c0 8 4 12 2 22h14c-2-10 2-14 2-22Z"
                      fill="#B5651D"
                      stroke="#FBF9F5"
                      strokeWidth="1.4"
                    />
                    <rect
                      x="270"
                      y="379"
                      width="30"
                      height="5"
                      rx="2.5"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M282 352c-2-4 2-6 0-10M290 352c-2-4 2-6 0-10"
                      fill="none"
                      stroke="#635C56"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      opacity=".5"
                    />
                    <path d="M96 370h48a24 14 0 0 1-48 0Z" fill="#2E4A68" />
                    <path
                      d="M120 368c-6-8-6-18 0-26 6 8 6 18 0 26zM120 368c-10-2-16-10-16-20 8 4 14 10 16 20zM120 368c10-2 16-10 16-20-8 4-14 10-16 20z"
                      fill="#F2C98A"
                    />
                    <path
                      d="M340 330c0-40 4-80-4-114"
                      fill="none"
                      stroke="#4F6B3A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="326"
                        cy="230"
                        rx="16"
                        ry="8"
                        transform="rotate(-30 326 230)"
                      />
                      <ellipse
                        cx="352"
                        cy="248"
                        rx="16"
                        ry="8"
                        transform="rotate(25 352 248)"
                      />
                      <ellipse
                        cx="324"
                        cy="272"
                        rx="16"
                        ry="8"
                        transform="rotate(-20 324 272)"
                      />
                      <ellipse
                        cx="356"
                        cy="290"
                        rx="16"
                        ry="8"
                        transform="rotate(30 356 290)"
                      />
                    </g>
                    <path d="M322 300h36l-4 30h-28Z" fill="#7E5414" />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Sunlight in the morning</span>
                  <span>Herbal teas</span>
                  <span>Ritual resets</span>
                </figcaption>
              </figure>
              <p className="single">
                That contradiction has been sitting with me for years.
              </p>
              <p>
                {t(
                  "So this winter, we tried something different. We designed a founder house in San Francisco — not around aesthetics, not around status, not around trend — but around biology."
                )}
              </p>
              <div className="litany">
                <span>Light that protects circadian rhythm.</span>
                <span>Plants in every room to calm the nervous system.</span>
                <span>No synthetic fragrance.</span>
                <span>No toxic cleaning products.</span>
                <span>No processed sugar.</span>
                <span>Mineral-rich salt.</span>
                <span>Herbal teas instead of energy drinks.</span>
                <span>Warm lighting at night.</span>
                <span>Sunlight in the morning.</span>
                <span>Ritual resets.</span>
                <span>Spiritual curiosity without dogma.</span>
              </div>
              <p>
                It was one of the most joyful design projects I've ever worked
                on.
              </p>
              <p>
                Because for once, the question wasn't: "What looks good?" It
                was: "What supports the human organism?"
              </p>
              <p>
                {t(
                  "This series explores what happens when you treat the founder's nervous system as infrastructure. When you see the kitchen as medicine. The lighting as hormonal regulation. The plants as stress reduction. The environment as performance architecture."
                )}
              </p>
              <p>
                If we're going to build intelligent systems for the future — we
                might want to start by stabilizing the humans building them.
              </p>
              <p>
                Over the next three essays, I'll share how we designed this
                space, what we learned, and why I believe biological coherence
                may be the next competitive advantage.
              </p>
              <p>
                {t(
                  "Because in the end, the company doesn't run on code. It runs on the founder's nervous system."
                )}
              </p>
              <p className="single">Let's start there.</p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-7">
                  Next: The House as a Nervous System →
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band linen" id="article-7">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">The House as a Nervous System</h2>
                <span className="sub">
                  {t("Designing for the Biological Founder — Part I")}
                </span>
              </header>
              <p>
                {t(
                  "When we decided to create a founder house in San Francisco for AI builders, I didn't think about aesthetics first."
                )}
              </p>
              <p className="single">I thought about cortisol.</p>
              <p>
                If you're building artificial intelligence, you are operating at
                high cognitive load almost constantly. Your brain is running
                inference loops all day. Your stress hormones are quietly
                elevated. Your sleep is fragile. Your immune system is taxed.
              </p>
              <figure className="bscene t-fog">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b7-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b7-arch)">
                    <rect width="400" height="460" fill="#DCE4EB" />
                    <path d="M62 196L200 104l138 92Z" fill="#2E4A68" />
                    <rect
                      x="72"
                      y="194"
                      width="256"
                      height="226"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M200 194v226M72 306h256"
                      stroke="#ECE6DC"
                      strokeWidth="4"
                    />
                    <rect
                      x="82"
                      y="204"
                      width="108"
                      height="92"
                      fill="#EFE4D3"
                    />
                    <path
                      d="M96 286v-30a10 10 0 0 1 10-10h30v40Z"
                      fill="#E1E7D6"
                    />
                    <rect
                      x="96"
                      y="268"
                      width="84"
                      height="18"
                      rx="5"
                      fill="#8AA06F"
                    />
                    <rect
                      x="102"
                      y="258"
                      width="28"
                      height="12"
                      rx="5"
                      fill="#FBF9F5"
                    />
                    <path d="M160 222v-1" stroke="#2E4A68" />
                    <circle cx="168" cy="228" r="9" fill="#F2C98A" />
                    <circle cx="172" cy="225" r="8" fill="#EFE4D3" />
                    <rect
                      x="210"
                      y="204"
                      width="108"
                      height="92"
                      fill="#E1E7D6"
                    />
                    <path
                      d="M226 224V214a12 12 0 0 1 24 0v10Z"
                      fill="#DCE4EB"
                    />
                    <path d="M276 286h26l-3-20h-20Z" fill="#7E5414" />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="282"
                        cy="250"
                        rx="12"
                        ry="5"
                        transform="rotate(-50 282 250)"
                      />
                      <ellipse
                        cx="298"
                        cy="248"
                        rx="12"
                        ry="5"
                        transform="rotate(45 298 248)"
                      />
                      <ellipse
                        cx="290"
                        cy="238"
                        rx="12"
                        ry="5"
                        transform="rotate(-88 290 238)"
                      />
                    </g>
                    <path d="M222 286h26l-3-16h-20Z" fill="#B5651D" />
                    <g fill="#8AA06F">
                      <ellipse
                        cx="230"
                        cy="262"
                        rx="10"
                        ry="4"
                        transform="rotate(-50 230 262)"
                      />
                      <ellipse
                        cx="242"
                        cy="260"
                        rx="10"
                        ry="4"
                        transform="rotate(45 242 260)"
                      />
                    </g>
                    <rect
                      x="82"
                      y="316"
                      width="108"
                      height="94"
                      fill="#EFE4D3"
                    />
                    <rect
                      x="92"
                      y="330"
                      width="88"
                      height="5"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <rect
                      x="98"
                      y="318"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#D9973A"
                    />
                    <rect
                      x="116"
                      y="320"
                      width="12"
                      height="10"
                      rx="2"
                      fill="#4F6B3A"
                    />
                    <rect
                      x="134"
                      y="316"
                      width="12"
                      height="14"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <rect
                      x="86"
                      y="376"
                      width="100"
                      height="34"
                      fill="#7E5414"
                    />
                    <rect
                      x="86"
                      y="370"
                      width="100"
                      height="7"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M112 370c0-12 6-18 14-18s14 6 14 18Z"
                      fill="#B5651D"
                    />
                    <rect
                      x="210"
                      y="316"
                      width="108"
                      height="94"
                      fill="#F4ECDF"
                    />
                    <path
                      d="M222 400v-26a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8v26Z"
                      fill="#FBF9F5"
                      stroke="#ECE6DC"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="228"
                      y="374"
                      width="20"
                      height="14"
                      rx="5"
                      fill="#D9973A"
                    />
                    <path
                      d="M306 400v-56c0-10-6-16-16-16"
                      fill="none"
                      stroke="#161515"
                      strokeWidth="2"
                    />
                    <path d="M282 328h16l3 9h-22Z" fill="#E5A957" />
                    <path
                      d="M136 240C136 300 262 260 262 240M262 240C262 300 300 330 262 360M262 360C200 400 160 330 136 350M136 350C110 330 120 280 136 240"
                      fill="none"
                      stroke="#D9973A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="1 7"
                    />
                    <g fill="#D9973A">
                      <circle cx="136" cy="240" r="6" />
                      <circle cx="262" cy="240" r="6" />
                      <circle cx="262" cy="360" r="6" />
                      <circle cx="136" cy="350" r="6" />
                    </g>
                    <rect y="420" width="400" height="40" fill="#C9D4DF" />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Light as medicine</span>
                  <span>Plants in every room</span>
                  <span>No cutting corners</span>
                </figcaption>
              </figure>
              <p>
                {t(
                  'And yet most "founder houses" are designed like frat houses with better WiFi.'
                )}
              </p>
              <p>
                We wanted something different. Not biohacking theater. Not
                performative wellness. But biological coherence.
              </p>
              <p className="single">
                So we designed the house as if it were a nervous system.
              </p>
              <h3>Light as medicine</h3>
              <p>
                First: light. Natural light everywhere. Big windows. Air moving
                through the house.
              </p>
              <p>
                Sunlight regulates circadian rhythm, which regulates melatonin,
                which regulates sleep, which regulates emotional stability,
                immune resilience, and cognitive clarity.
              </p>
              <p>
                At night, no harsh white LEDs. Only warm yellow lighting. Cool
                blue light suppresses melatonin and disrupts sleep cycles. If
                you're building companies long-term, sleep is not optional
                infrastructure.
              </p>
              <h3>Plants in every room</h3>
              <p>
                Every room has living plants. Large and small. Plants can reduce
                volatile organic compounds indoors and measurably reduce stress
                markers. Even viewing greenery lowers cortisol and increases
                creative output.
              </p>
              <p className="single">
                The house feels softer because it is alive.
              </p>
              <p>
                Nature paintings and florals fill the walls too. Studies show
                that even images of nature calm the nervous system.
              </p>
              <p className="single">
                You cannot innovate in a chronic fight-or-flight state.
              </p>
              <h3>No cutting corners</h3>
              <p className="single">This was the most fun part.</p>
              <div className="litany">
                <span>No cheap plastics.</span>
                <span>No synthetic fragrances.</span>
                <span>No toxic cleaning sprays.</span>
                <span>Plastic-free where possible.</span>
                <span>Non-toxic cleaning supplies only.</span>
                <span>Olive oil and goat milk soaps.</span>
                <span>Perfume-free everything.</span>
                <span>Bamboo bedding.</span>
                <span>Organic essential oil diffusers.</span>
              </div>
              <p>
                Once you start reading labels, you realize most modern interiors
                are petrochemical showrooms.
              </p>
              <p>
                Designing without compromise felt radical and joyful. It felt
                like designing a body, not a room.
              </p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-8">
                  {t("Next: The Founder Kitchen: Food as Infrastructure →")}
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band candle" id="article-8">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">
                  {t("The Founder Kitchen: Food as Infrastructure")}
                </h2>
                <span className="sub">
                  {t("Designing for the Biological Founder — Part II")}
                </span>
              </header>
              <p>
                If the nervous system is the operating system, the gut is the
                motherboard.
              </p>
              <p>
                Most startup kitchens are stocked with energy drinks, protein
                bars, and processed snacks wrapped in plastic.
              </p>
              <p className="single">We stocked herbs.</p>
              <figure className="bscene t-oat">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b8-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                    <clipPath id="b8-win">
                      <path d="M220 240V162a60 60 0 0 1 120 0V240Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b8-arch)">
                    <rect width="400" height="460" fill="#EFE4D3" />
                    <g clipPath="url(#b8-win)">
                      <rect
                        x="210"
                        y="90"
                        width="140"
                        height="160"
                        fill="#DCE4EB"
                      />
                      <path
                        d="M220 210c30-10 60-12 120 0V250H220Z"
                        fill="#8E9F78"
                      />
                    </g>
                    <path d="M280 102V240" stroke="#FBF9F5" strokeWidth="4" />
                    <path
                      d="M220 240V162a60 60 0 0 1 120 0V240Z"
                      fill="none"
                      stroke="#FBF9F5"
                      strokeWidth="7"
                    />
                    <rect
                      x="210"
                      y="238"
                      width="140"
                      height="8"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <path d="M226 238h22l-2-16h-18Z" fill="#B5651D" />
                    <path
                      d="M237 222c-1-10-6-14-11-15 1 7 5 12 11 15zM237 222c1-11 6-15 12-16-1 8-6 13-12 16z"
                      fill="#4F6B3A"
                    />
                    <path d="M268 238h22l-2-16h-18Z" fill="#B5651D" />
                    <path
                      d="M279 222v-16M279 214l-6-6M279 210l6-6"
                      stroke="#4F6B3A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path d="M310 238h22l-2-16h-18Z" fill="#B5651D" />
                    <g fill="#8AA06F">
                      <circle cx="314" cy="214" r="5" />
                      <circle cx="322" cy="208" r="5" />
                      <circle cx="328" cy="216" r="5" />
                    </g>
                    <rect
                      x="44"
                      y="168"
                      width="140"
                      height="7"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <rect
                      x="44"
                      y="240"
                      width="140"
                      height="7"
                      rx="2"
                      fill="#FBF9F5"
                    />
                    <g>
                      <path
                        d="M54 168v-34a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v34Z"
                        fill="#FBF9F5"
                        opacity=".9"
                      />
                      <rect
                        x="56"
                        y="144"
                        width="28"
                        height="24"
                        fill="#B5651D"
                      />
                      <path
                        d="M96 168v-30a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v30Z"
                        fill="#FBF9F5"
                        opacity=".9"
                      />
                      <rect
                        x="98"
                        y="148"
                        width="28"
                        height="20"
                        fill="#8AA06F"
                      />
                      <path
                        d="M138 168v-36a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v36Z"
                        fill="#FBF9F5"
                        opacity=".9"
                      />
                      <rect
                        x="140"
                        y="140"
                        width="28"
                        height="28"
                        fill="#E8B53C"
                      />
                      <path
                        d="M58 240v-28a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v28Z"
                        fill="#FBF9F5"
                        opacity=".9"
                      />
                      <rect
                        x="60"
                        y="218"
                        width="32"
                        height="22"
                        fill="#4F6B3A"
                      />
                      <path
                        d="M106 240v-34a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v34Z"
                        fill="#FBF9F5"
                        opacity=".9"
                      />
                      <rect
                        x="108"
                        y="212"
                        width="32"
                        height="28"
                        fill="#D9973A"
                      />
                      <rect
                        x="152"
                        y="210"
                        width="22"
                        height="30"
                        rx="4"
                        fill="#2E4A68"
                      />
                    </g>
                    <rect y="300" width="400" height="14" fill="#FBF9F5" />
                    <rect y="314" width="400" height="146" fill="#7E5414" />
                    <path
                      d="M133 314v146M266 314v146"
                      stroke="#6A460F"
                      strokeWidth="2"
                    />
                    <rect
                      x="70"
                      y="290"
                      width="140"
                      height="10"
                      rx="5"
                      fill="#D6B98A"
                    />
                    <path d="M90 290l40-8 4 4-40 6Z" fill="#D9973A" />
                    <path
                      d="M130 282l10-6M131 284l12-2"
                      stroke="#4F6B3A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <g fill="#4F6B3A">
                      <circle cx="160" cy="282" r="8" />
                      <circle cx="172" cy="284" r="7" />
                      <circle cx="184" cy="282" r="8" />
                    </g>
                    <path
                      d="M232 300v-40c0-6 4-10 6-14v-12h8v12c2 4 6 8 6 14v40Z"
                      fill="#8E9F78"
                    />
                    <rect
                      x="238"
                      y="226"
                      width="8"
                      height="8"
                      rx="1.5"
                      fill="#7E5414"
                    />
                    <path d="M276 300v-28h76v28Z" fill="#2E4A68" />
                    <rect
                      x="270"
                      y="266"
                      width="88"
                      height="8"
                      rx="4"
                      fill="#2E4A68"
                    />
                    <path
                      d="M300 258c-3-4 3-7 0-12M314 258c-3-4 3-7 0-12M328 258c-3-4 3-7 0-12"
                      fill="none"
                      stroke="#635C56"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity=".5"
                    />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Herbs on the counter</span>
                  <span>Fermented foods</span>
                  <span>Olive oil from Turkey</span>
                </figcaption>
              </figure>
              <div className="litany">
                <span>Soursop leaf tea.</span>
                <span>Butterfly pea flower tea.</span>
                <span>Dandelion root for liver support.</span>
                <span>Clove and anise.</span>
                <span>Jasmine green tea.</span>
                <span>Cinnamon.</span>
              </div>
              <p>
                No — these are not miracle cures. But antioxidants matter. Liver
                support matters. Anti-inflammatory compounds matter. L-theanine
                from green tea supports calm alertness instead of jittery
                adrenaline.
              </p>
              <p>
                We use mineral-rich sea salt — not heavily refined table salt
                stripped of trace elements.
              </p>
              <div className="litany">
                <span>No processed foods.</span>
                <span>No refined sugars.</span>
                <span>Plenty of probiotics.</span>
                <span>Fermented vegetables.</span>
                <span>
                  Olive oil from Turkey — where olive oil is closer to medicine
                  than condiment.
                </span>
              </div>
              <p>
                The liver processes stress hormones. The microbiome influences
                mood. Blood sugar stability influences decision-making.
              </p>
              <p>
                There is no neutral food. It either supports clarity — or erodes
                it.
              </p>
              <h3>Gentle supports</h3>
              <p>
                In drawers you'll find: arnica, oscillococcinum, homeopathics,
                organic vitamins. Occasionally colloidal silver (used sparingly
                and responsibly).
              </p>
              <p>
                We are not anti-medicine. We are pro-support. Functional health
                isn't fringe — it's preventative.
              </p>
              <p>
                {t(
                  "If founders are infrastructure, their immune systems are assets. Protect them."
                )}
              </p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-9">
                  Next: Spiritual Infrastructure for Builders →
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band linen" id="article-9">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">Spiritual Infrastructure for Builders</h2>
                <span className="sub">
                  {t("Designing for the Biological Founder — Part III")}
                </span>
              </header>
              <p className="single">Here's where it gets interesting.</p>
              <p>
                Every few days, we walk through the house with palo santo or
                sage. You can call it spiritual. You can call it ritual. You can
                call it antimicrobial smoke (which historically it was used
                for).
              </p>
              <p>
                But what it really does is signal reset. Ritual regulates the
                nervous system. In high-performance environments, reset cycles
                matter.
              </p>
              <figure className="bscene t-sage">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b9-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b9-arch)">
                    <rect width="400" height="460" fill="#DCE4EB" />
                    <path
                      d="M300 96l6 5 6-5M326 82l5 4 5-4"
                      fill="none"
                      stroke="#635C56"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0 270c40-20 80-24 120-14s80 10 120-4 100-12 160 6V300H0Z"
                      fill="#8E9F78"
                    />
                    <rect y="296" width="400" height="164" fill="#C9D3BD" />
                    <path d="M168 300h64l70 160H98Z" fill="#E8D7BC" />
                    <g fill="#FBF9F5" opacity=".75">
                      <ellipse cx="200" cy="320" rx="22" ry="7" />
                      <ellipse cx="196" cy="350" rx="28" ry="9" />
                      <ellipse cx="204" cy="386" rx="34" ry="11" />
                      <ellipse cx="198" cy="428" rx="40" ry="13" />
                    </g>
                    <path
                      d="M92 380c-2-60 8-110-6-160M90 300c16-18 30-30 36-54M88 260c-14-14-24-30-26-48"
                      fill="none"
                      stroke="#635C56"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="60"
                        cy="210"
                        rx="14"
                        ry="5"
                        transform="rotate(-35 60 210)"
                      />
                      <ellipse
                        cx="84"
                        cy="196"
                        rx="14"
                        ry="5"
                        transform="rotate(-75 84 196)"
                      />
                      <ellipse
                        cx="106"
                        cy="214"
                        rx="14"
                        ry="5"
                        transform="rotate(30 106 214)"
                      />
                      <ellipse
                        cx="70"
                        cy="236"
                        rx="14"
                        ry="5"
                        transform="rotate(15 70 236)"
                      />
                      <ellipse
                        cx="124"
                        cy="240"
                        rx="14"
                        ry="5"
                        transform="rotate(-50 124 240)"
                      />
                      <ellipse
                        cx="48"
                        cy="232"
                        rx="14"
                        ry="5"
                        transform="rotate(60 48 232)"
                      />
                      <ellipse
                        cx="116"
                        cy="196"
                        rx="14"
                        ry="5"
                        transform="rotate(10 116 196)"
                      />
                    </g>
                    <g fill="#8AA06F">
                      <ellipse
                        cx="96"
                        cy="226"
                        rx="13"
                        ry="4.5"
                        transform="rotate(40 96 226)"
                      />
                      <ellipse
                        cx="74"
                        cy="216"
                        rx="13"
                        ry="4.5"
                        transform="rotate(-20 74 216)"
                      />
                      <ellipse
                        cx="134"
                        cy="226"
                        rx="13"
                        ry="4.5"
                        transform="rotate(70 134 226)"
                      />
                    </g>
                    <rect
                      x="266"
                      y="330"
                      width="96"
                      height="10"
                      rx="3"
                      fill="#7E5414"
                    />
                    <rect
                      x="270"
                      y="312"
                      width="88"
                      height="8"
                      rx="3"
                      fill="#7E5414"
                    />
                    <rect
                      x="274"
                      y="340"
                      width="7"
                      height="26"
                      fill="#6A460F"
                    />
                    <rect
                      x="348"
                      y="340"
                      width="7"
                      height="26"
                      fill="#6A460F"
                    />
                    <path d="M260 396h60a30 16 0 0 1-60 0Z" fill="#FBF9F5" />
                    <ellipse cx="290" cy="396" rx="30" ry="6" fill="#2E4A68" />
                    <rect
                      x="282"
                      y="408"
                      width="16"
                      height="16"
                      fill="#ECE6DC"
                    />
                    <g stroke="#4F6B3A" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M140 420v-30M148 420v-36M156 420v-28M132 420v-24" />
                    </g>
                    <g fill="#9C8BB8">
                      <circle cx="148" cy="382" r="4" />
                      <circle cx="140" cy="388" r="3.5" />
                      <circle cx="156" cy="390" r="3.5" />
                      <circle cx="132" cy="394" r="3" />
                    </g>
                    <g stroke="#4F6B3A" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M352 430v-26M360 430v-32M368 430v-24" />
                    </g>
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Ritual and reset</span>
                  <span>Breathwork</span>
                  <span>The garden</span>
                </figcaption>
              </figure>
              <h3>Sound, energy, and flow</h3>
              <p>
                In the evenings, binaural beats play softly — frequencies shown
                to influence brainwave states. Lavender diffuses for calm.
                Rosemary for clarity. Citrus for uplift.
              </p>
              <p>
                We encourage floor sitting. It improves mobility, posture, and
                longevity markers. The ability to move from floor to standing
                correlates with long-term health outcomes.
              </p>
              <p>
                There's breathwork. A little Mantak Chia energy circulation
                philosophy. Occasional reiki sessions. Astrology conversations
                over tea.
              </p>
              <p>
                You don't have to believe in everything. But you cannot deny
                that humans are more than cognitive processors.
              </p>
              <p className="single">Spiritual and operational can coexist.</p>
              <h3>The garden</h3>
              <p className="single">
                Outside: olive trees, rosemary, a lemon tree.
              </p>
              <p>
                Tending something living while building artificial intelligence
                keeps perspective. Technology moves fast. Nature moves wisely.
              </p>
              <h3>The thesis</h3>
              <div className="litany">
                <span>Comfortable yet mindful.</span>
                <span>Relaxing yet productive.</span>
                <span>Nature meets nurture.</span>
              </div>
              <p>
                If we are serious about advancing humanity with AI, we should
                build environments that support human biology first.
              </p>
              <p>
                {t(
                  "The founder nervous system is not separate from the company. It is the company."
                )}
              </p>
              <p>
                Designing this way wasn't just strategic. It was joyful. No
                corners cut. No cheap shortcuts. No synthetic compromises. Just
                coherence.
              </p>
              <p>
                And honestly? It might be the most powerful productivity hack
                we've ever built.
              </p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <a className="textlink" href="#article-10">
                  {t(
                    "Next: Designing a Founder House for Health, Not Just Aesthetics →"
                  )}
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="band candle" id="article-10">
          <article className="container">
            <div className="article">
              <header className="ahead">
                <h2 className="d2">
                  {t(
                    "Designing a Founder House for Health, Not Just Aesthetics"
                  )}
                </h2>
              </header>
              <p>
                {t(
                  "When most people design a house in San Francisco for AI founders, they think about WiFi speed, standing desks, espresso machines, and maybe a cold plunge if they're feeling ambitious."
                )}
              </p>
              <div className="litany">
                <span>We thought about the liver.</span>
                <span>We thought about circadian rhythm.</span>
                <span>We thought about nervous systems.</span>
                <span>We thought about inflammation.</span>
              </div>
              <p>
                We thought about what it actually means to build intelligence —
                human and artificial — in the same space.
              </p>
              <figure className="bscene t-fog">
                <svg
                  className="b-illu"
                  viewBox="0 0 400 460"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <clipPath id="b10-arch">
                      <path d="M0 460V200A200 200 0 0 1 400 200V460Z" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b10-arch)">
                    <rect width="400" height="460" fill="#DCE4EB" />
                    <rect
                      x="62"
                      y="150"
                      width="34"
                      height="46"
                      rx="3"
                      fill="#E1E7D6"
                    />
                    <rect
                      x="102"
                      y="150"
                      width="34"
                      height="46"
                      rx="3"
                      fill="#EFE4D3"
                    />
                    <rect
                      x="142"
                      y="150"
                      width="34"
                      height="46"
                      rx="3"
                      fill="#D9973A"
                    />
                    <rect
                      x="182"
                      y="150"
                      width="34"
                      height="46"
                      rx="3"
                      fill="#4F6B3A"
                    />
                    <rect
                      x="62"
                      y="186"
                      width="154"
                      height="10"
                      fill="#FBF9F5"
                      opacity=".7"
                    />
                    <rect
                      x="248"
                      y="120"
                      width="96"
                      height="120"
                      rx="3"
                      fill="#FBF9F5"
                    />
                    <path
                      d="M264 220v-48a32 32 0 0 1 64 0v48ZM264 220h64"
                      fill="none"
                      stroke="#2E4A68"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M286 220v-26a10 10 0 0 1 20 0v26"
                      fill="none"
                      stroke="#2E4A68"
                      strokeWidth="2"
                    />
                    <rect
                      x="28"
                      y="300"
                      width="344"
                      height="12"
                      rx="4"
                      fill="#7E5414"
                    />
                    <rect
                      x="44"
                      y="312"
                      width="9"
                      height="148"
                      fill="#282526"
                    />
                    <rect
                      x="348"
                      y="312"
                      width="9"
                      height="148"
                      fill="#282526"
                    />
                    <path d="M86 300l18-40h176l18 40Z" fill="#2E4A68" />
                    <g
                      fill="none"
                      stroke="#DCE4EB"
                      strokeWidth="1.8"
                      opacity=".9"
                    >
                      <path d="M118 292l8-24h60l-6 24Z" />
                      <path d="M196 292l6-24h56l10 24Z" />
                      <path d="M156 292v-8a10 10 0 0 1 20 0v8" />
                      <path d="M232 268v24" />
                    </g>
                    <path
                      d="M300 300c6-4 14-4 20 0"
                      fill="none"
                      stroke="#DCE4EB"
                      strokeWidth="2"
                    />
                    <rect
                      x="300"
                      y="286"
                      width="56"
                      height="14"
                      rx="7"
                      fill="#FBF9F5"
                    />
                    <circle cx="350" cy="293" r="5" fill="#ECE6DC" />
                    <path
                      d="M60 296l60-10"
                      stroke="#D9973A"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M118 286l6-1"
                      stroke="#161515"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M318 248h22l-3 38h-16Z"
                      fill="#FBF9F5"
                      opacity=".75"
                    />
                    <path d="M320 262h18l-2 24h-14Z" fill="#B8CCDC" />
                    <path d="M40 300h30l-3-22h-24Z" fill="#B5651D" />
                    <g fill="#4F6B3A">
                      <ellipse
                        cx="46"
                        cy="262"
                        rx="12"
                        ry="5"
                        transform="rotate(-50 46 262)"
                      />
                      <ellipse
                        cx="64"
                        cy="260"
                        rx="12"
                        ry="5"
                        transform="rotate(45 64 260)"
                      />
                      <ellipse
                        cx="55"
                        cy="248"
                        rx="12"
                        ry="5"
                        transform="rotate(-88 55 248)"
                      />
                    </g>
                    <rect y="420" width="400" height="40" fill="#C9D4DF" />
                  </g>
                  <path
                    d="M4 460V200A196 196 0 0 1 396 200V460"
                    fill="none"
                    stroke="#FBF9F5"
                    strokeWidth="8"
                  />
                </svg>
                <figcaption>
                  <span>Designed for biology</span>
                  <span>Light is medicine</span>
                  <span>The kitchen as apothecary</span>
                </figcaption>
              </figure>
              <p>
                And honestly? It was one of the most fun interior design
                projects I've ever done. Because this time, we weren't just
                designing for "vibes." We were designing for biology.
              </p>
              <h3>The rule: no cutting corners</h3>
              <p>
                {t(
                  "I didn't want cheap plastics. I didn't want synthetic fragrance. I didn't want toxic cleaning sprays quietly floating in the air while founders discussed the future of civilization."
                )}
              </p>
              <p>
                If we're building AI companies, we can at least remove endocrine
                disruptors from the bathroom.
              </p>
              <div className="litany">
                <span>Plastic-free wherever possible.</span>
                <span>Non-toxic cleaning supplies only.</span>
                <span>Olive oil and goat milk soaps (perfume-free).</span>
                <span>Organic essential oils instead of synthetic scent.</span>
                <span>Bamboo bedding instead of petroleum-based fibers.</span>
                <span>Warm yellow lighting at night to protect melatonin.</span>
              </div>
              <p>
                It's wild how much of modern "interior design" is just
                petrochemicals made pretty. When you start reading labels, you
                realize the average home is off-gassing more than a small
                laboratory.
              </p>
              <h3>Plants everywhere</h3>
              <p>
                Every single room has real plants. Large ones. Small ones.
                Trailing ones. There's something magical about walking into a
                space that feels alive. Beyond beauty, plants can reduce
                volatile organic compounds in indoor air and measurably lower
                stress markers. Even looking at greenery lowers cortisol.
              </p>
              <p>
                But the effect is deeper than research studies. The space feels
                calmer. Softer. More breathable.
              </p>
              <p>
                Nature paintings and florals fill the walls too — because even
                imagery of nature has been shown to reduce stress and improve
                focus. The brain responds to these cues of safety.
              </p>
              <p>
                When you're building ambitious technology, your nervous system
                needs counterbalance.
              </p>
              <h3>Light is medicine</h3>
              <p>
                We prioritized natural light first. The house has large windows,
                and we keep them open whenever possible. Sunlight regulates
                circadian rhythm, improves mood, supports vitamin D production,
                and literally anchors your hormonal cycles.
              </p>
              <p>
                At night, we switch to warm yellow lighting. No harsh overhead
                blues. No sterile office glow.
              </p>
              <p>
                Light affects melatonin. Melatonin affects sleep. Sleep affects
                immune function, emotional regulation, cognition, and
                resilience. This isn't aesthetic preference. It's biology.
              </p>
              <h3>The kitchen as apothecary</h3>
              <p className="single">
                Instead of stocking energy drinks, we stocked teas:
              </p>
              <div className="grid g2">
                <div className="tea">
                  <b>Soursop Leaf</b>
                  <i>
                    Immune system, cellular antioxidant defense, digestive tract
                  </i>
                  <span>
                    Contains acetogenins, alkaloids, and antioxidants. Supports
                    immune resilience and reduces oxidative stress.
                  </span>
                </div>
                <div className="tea">
                  <b>Butterfly Pea Flower</b>
                  <i>Brain and nervous system, skin, eyes, circulation</i>
                  <span>
                    Contains anthocyanins. Neuroprotective antioxidant support,
                    cognitive clarity, anti-inflammatory properties.
                  </span>
                </div>
                <div className="tea">
                  <b>Dandelion Root</b>
                  <i>Liver, gallbladder, digestive system</i>
                  <span>
                    Traditionally used as a liver tonic. Supports bile
                    production, kidney function, and helps the liver process
                    toxins.
                  </span>
                </div>
                <div className="tea">
                  <b>Clove</b>
                  <i>Immune system, digestive tract, oral health</i>
                  <span>
                    Contains eugenol. Antimicrobial, anti-inflammatory,
                    traditionally used for gut health.
                  </span>
                </div>
                <div className="tea">
                  <b>Anise</b>
                  <i>Digestive system, respiratory tract</i>
                  <span>
                    Relieves gas and bloating, expectorant properties, mild
                    antimicrobial action.
                  </span>
                </div>
                <div className="tea">
                  <b>Jasmine Green Tea</b>
                  <i>Brain, cardiovascular system, immune system</i>
                  <span>
                    L-theanine promotes calm alertness. Supports cardiovascular
                    health and cellular antioxidant defense.
                  </span>
                </div>
                <div className="tea">
                  <b>Cinnamon</b>
                  <i>Blood sugar regulation, pancreas, cardiovascular system</i>
                  <span>
                    Improves insulin sensitivity, supports stable blood sugar
                    levels. Stable blood sugar equals stable mood and cognitive
                    clarity.
                  </span>
                </div>
              </div>
              <p>
                Are these miracle cures? Of course not. But antioxidants matter.
                Liver support matters. Anti-inflammatory compounds matter.
              </p>
              <p>
                We use mineral-rich sea salt. No processed foods. No refined
                sugars. Lots of probiotics. Fermented vegetables. Olive oil from
                Turkey — where it feels like medicine, not just food.
              </p>
              <p>
                Food is either supporting inflammation or reducing it. There is
                no neutral.
              </p>
              <h3>Ritual, reset, nervous system</h3>
              <p>
                Every few days, we walk through the house with palo santo or
                sage. Call it spiritual. Call it antimicrobial. Call it nervous
                system regulation. Ritual matters.
              </p>
              <p>
                We play binaural beats in the evenings. We diffuse organic
                essential oils — lavender for calm, rosemary for alertness,
                citrus for uplift.
              </p>
              <p>
                Even the quotes on the walls are intentional. Humor lowers
                stress hormones. Positive framing expands cognition.
              </p>
              <p className="single">
                You cannot innovate in a constant stress response.
              </p>
              <h3>Floor sitting, energy, and wholeness</h3>
              <p>
                We encourage floor sitting. It improves hip mobility, posture,
                and longevity markers. It also changes how conversations feel —
                less rigid, more collaborative.
              </p>
              <p>
                There's breathwork. Some Mantak Chia energy circulation
                influence. A bit of astrology for fun. Occasional reiki sessions
                in the home.
              </p>
              <p>
                You don't have to believe in everything. But you do have to
                acknowledge that humans are more than brains attached to
                laptops.
              </p>
              <p>
                Spiritual and operational don't have to be opposites. They can
                be integrated.
              </p>
              <h3>The garden</h3>
              <p>
                Outside we have olive trees, rosemary, a lemon tree. There is
                something grounding about tending living plants while discussing
                artificial intelligence. It reminds you what is ancient. What is
                biological. What is slow and patient.
              </p>
              <p className="single">
                Technology moves fast. Nature moves wisely.
              </p>
              <h3>Designing this way was joyful</h3>
              <p>
                The most surprising part? How fun it was to design without
                compromise.
              </p>
              <p>
                To not ask: "What's cheaper?" "What's easier?" "What's
                standard?"
              </p>
              <p>
                But instead: "What supports the human organism?" "What lowers
                inflammation?" "What increases joy?" "What improves sleep?"
              </p>
              <p className="single">
                It felt like designing a nervous system, not just a house.
              </p>
              <div className="litany">
                <span>Comfortable yet mindful.</span>
                <span>Relaxing yet productive.</span>
                <span>Nature meets nurture.</span>
              </div>
              <p>
                If we're serious about advancing humanity with AI — maybe we
                should start by creating spaces that support human flourishing
                first.
              </p>
              <p className="single">And yes. It looks beautiful.</p>
              <p className="single">But more importantly — it feels alive.</p>
              <div className="backtop">
                <a className="textlink" href="#contents">
                  Table of contents
                </a>
                <A className="textlink" href="/the-founders-pharmacy">
                  {t("Continue to The Founder's Pharmacy →")}
                </A>
              </div>
            </div>
          </article>
        </section>
        <section className="band oat">
          <div className="container">
            <div className="head" style={{ marginBottom: "0" }}>
              <span className="label">Continue reading</span>{" "}
              <h2 className="d2">{t("The Founder's Pharmacy")}</h2>
              <p className="lede">
                Every product in Vibe House was chosen with intention. Explore
                the full catalog of what we stock and why, from essential oils
                to organic sleep textiles.
              </p>{" "}
              <A className="btn ghost" href="/the-founders-pharmacy">
                Explore curated products
              </A>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
