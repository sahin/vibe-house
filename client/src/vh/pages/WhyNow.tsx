// Generated from the Claude Design board "Why.dc.html" (Vibe House SF Site).
// Markup mirrors the design 1:1; styling lives in ../vh.css.
import SEO from "@/components/SEO";
import { useCopy } from "../lovieCopy";
import SiteLayout, { A } from "../SiteLayout";
import photoChess from "../assets/photos/chess.jpg";
import photoFridayDemo from "../assets/photos/friday-demo.jpg";
import photoGuestsMeeting from "../assets/photos/guests-meeting.jpg";
import photoLoungeCushions from "../assets/photos/lounge-cushions.jpg";
import photoPhoneTablet from "../assets/photos/phone-tablet.jpg";
import photoSofaLaptops from "../assets/photos/sofa-laptops.jpg";
import photoThursdayConversation from "../assets/photos/thursday-conversation.jpg";
import photoWhiteboard from "../assets/photos/whiteboard.jpg";

export default function WhyNow() {
  const { t, copy } = useCopy();
  return (
    <SiteLayout closingTitle="Come build with us.">
      <SEO
        title="Why Now?"
        description={copy.seoWhyNowDescription}
        path="/why"
        keywords={copy.seoWhyNowKeywords}
        ogType="article"
      />
      <main id="main">
        <section className="phero">
          <div className="container rv">
            <A className="crumb" href="/">
              ← Back to home
            </A>{" "}
            <span className="label">Why now</span>{" "}
            <h1 className="d1" style={{ maxWidth: "11ch" }}>
              Why <span className="hl">now</span>
            </h1>
            <p className="lede">
              The story of why we built Vibe House, and why this moment in time
              is unlike anything we've seen before.
            </p>
          </div>
        </section>
        <section className="band linen">
          <div className="container story">
            <nav className="toc" aria-label="Chapters">
              <a href="#c01">We were builders</a>
              <a href="#c02">Then we stopped</a>
              <a href="#c03">That feeling is back</a>
              <a href="#c04">The builder's fire</a>
              <a href="#c05">The speed of change</a>
              <a href="#c06">The maker renaissance</a>
              <a href="#c07">A new renaissance</a>
              <a href="#c08">Why Vibe House</a>
            </nav>
            <div>
              <article className="chap io" id="c01">
                <h2 className="d3">We were builders</h2>
                <p className="big">
                  {t(
                    "Twenty years ago, we were in our 20s. We'd sit together, founders, engineers, dreamers, pulling long nights, building and building and building. We didn't call it work. We called it Tuesday."
                  )}
                </p>
                <p>
                  {t(
                    "Every startup had that story: the garage, the living room, the whiteboard covered in ideas at 3am. Most companies were born in those long nights. Founders who couldn't stop shipping. Teams that lived and breathed the product. The energy was electric. You could feel it in every line of code."
                  )}
                </p>
                <p>
                  That was the original hacker house. Not a brand. Not a
                  concept. Just people who loved to build, sitting in the same
                  room, making things happen.
                </p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoWhiteboard}
                      alt="Two founders talking through a project in front of the big screen and whiteboard"
                      width="1040"
                      height="585"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
              <article className="chap io" id="c02">
                <h2 className="d3">Then we stopped</h2>
                <p className="big">
                  We grew up. We scaled companies, managed teams, took meetings.
                  The building stopped. The making stopped. We became operators,
                  executives, advisors. We went from writing code to writing
                  memos.
                </p>
                <p>
                  {t(
                    "The garage spirit faded. Building became about fundraising, not making. About decks, not demos. The founders who once couldn't stop shipping found themselves in a world where shipping meant something entirely different."
                  )}
                </p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoLoungeCushions}
                      alt="Founders talking on floor cushions in the lounge on a warm evening"
                      width="1200"
                      height="800"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
              <article className="chap io" id="c03">
                <h2 className="d3">That feeling is back</h2>
                <p className="big">
                  Now something has shifted. AI tools have unlocked that feeling
                  again, the one from our 20s. We're back in builder mode.
                  Building projects. Testing ideas. Shipping things fast. It
                  feels like being in our 20s again.
                </p>
                <p>
                  {t(
                    "Founders in their 30s–50s, people who exited, who managed teams, who stopped building with their hands, are going back to builder mode. With AI agents, they can build again. And they're building things that would have taken entire teams."
                  )}
                </p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoSofaLaptops}
                      alt="Founders working on laptops on the sofas in the Vibe House living room"
                      width="1106"
                      height="634"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
              <article className="chap io" id="c04">
                <h2 className="d3">The builder's fire</h2>
                <p className="big">
                  As entrepreneurs, we have this deep passion for building
                  things. It never went away. It just didn't have an outlet. Now
                  we can build fast again. Really fast. Spin up a product in a
                  weekend. Test ten ideas in a week.
                </p>
                <p>
                  That excitement of watching something come to life, of going
                  from nothing to something in hours, it's back. And it's
                  addictive. The dopamine of shipping is something no board
                  meeting will ever replace.
                </p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoPhoneTablet}
                      alt="Two guests comparing something on a phone and a tablet"
                      width="1280"
                      height="720"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
              <article className="chap io" id="c05">
                <h2 className="d3">The speed of change</h2>
                <p className="big">
                  AI is creating so much code, so much change. Every week
                  there's a new tool, a new workflow, a new way to 10x your
                  productivity. It's impossible to keep up alone.
                </p>
                <p>
                  {t(
                    "That's exactly why founders and builders need to come together: to build together, to share how they're using AI, to learn from each other in real time. The ones who stay connected to the edge will define what comes next."
                  )}
                </p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoThursdayConversation}
                      alt="Three founders deep in conversation at a Thursday evening"
                      width="1200"
                      height="675"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
              <article className="chap io" id="c06">
                <h2 className="d3">The maker renaissance</h2>
                <p className="big">
                  This is the garage era all over again. Like HP in a Palo Alto
                  garage. Like Woz and Jobs. Except now the garage is a laptop
                  and an AI agent. One person can build what used to take a team
                  of ten.
                </p>
                <p>
                  {t(
                    "Founders in their 30s–50s are going back to builder mode, and they're more dangerous than ever. They have the experience, the taste, the network. Now they have the tools too."
                  )}
                </p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoChess}
                      alt="Guests of all ages playing chess around the living-room sofa"
                      width="1200"
                      height="800"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
              <article className="chap io" id="c07">
                <h2 className="d3">A new renaissance</h2>
                <p className="big">
                  The tools are democratized. The builders are back. And they
                  want to build together again, the way it used to be.
                </p>
                <p>
                  We're living through a creative renaissance. The barrier
                  between idea and product has never been thinner. What took
                  months now takes days. What took teams now takes one person
                  with the right prompts.
                </p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoGuestsMeeting}
                      alt="Guests meeting each other on the living-room sofas"
                      width="1040"
                      height="585"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
              <article className="chap io" id="c08">
                <h2 className="d3">Why Vibe House</h2>
                <p className="big">
                  So we built a house. Not for pitching. Not for networking. For
                  building. For that feeling.
                </p>
                <p>
                  {t(
                    "A place where technical founders come together, multiple times a week, to vibe code. You work on your own project. You share your prompts, your workflows, your breakthroughs. And there's an ongoing group project that everyone prompts together."
                  )}
                </p>
                <p>Come build with us.</p>
                <figure className="ph">
                  <div className="photo">
                    <img
                      src={photoFridayDemo}
                      alt="A founder demoing live to the room at a Friday vibe night"
                      width="1200"
                      height="900"
                      style={{ objectPosition: "50% 50%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              </article>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
