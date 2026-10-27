
export default function Home() {
  return (
    <main className="portfolio">
      <aside className="sidebar">
        <div className="sidebar-content">
          <p className="name">janvibeherani</p>

          <div className="intro">
            <p>
              Hi there, I am an interaction designer born and raised in
              Jalgaon, Maharashtra currently studying at Anant National
              University.
            </p>

            <p>
              A designer with way too much curiosity for one field currently
              diving deep between Speculative designing, Multi sensory design,
              service design and much more ; basically where curiosity is
              meeting chaos. With a minor in Startup & Entrepreneurship, I'm
              wired to prototype wild ideas that might just work. Over the
              years, I understood that every little thing crossovers
              interaction and every interaction tells a story.
            </p>

            <p>
              When I'm not ironing out the details of my assignments, I'm
              probably out there collecting stories, attending events, and
              finding inspiration in unexpected places because sometimes, the
              best user research happens when you just explore.
            </p>
          </div>

          <nav className="links">
            <a href="#">Email</a>
            <a href="#">CV</a>
            <a href="#">Instagram ↗</a>
          </nav>

          <div className="work">
            <p>Work</p>

            <ol>
              <li>Ghar Jo Piche Chod Aaye</li>
              <li>Auction of Tongues</li>
              <li>Zupto</li>
              <li>Letters I Never Sent</li>
              <li>Ahmedabad BRTS</li>
              <li>IRA</li>
            </ol>
          </div>
        </div>

        <p className="copyright">©2026</p>
      </aside>

      <section className="projects">
        <header className="topbar">
          <span>Projects</span>
          <span>22:05</span>
        </header>

        <div className="project-list">

          {/* PROJECT 01 */}
          <article className="project">
            <p className="project-number">01</p>

            <img
              className="project-image project-01-image"
              src="/projects/ghar-jo-hum-piche-chod-aaye/cover.png"
              alt="Ghar Jo Hum Piche Chod Aaye"
            />

            <div className="project-info">
              <div>
                <h1>Ghar Jo Hum Piche Chod Aaye</h1>
                <p>Duration : 3 weeks</p>
                <p>
                  Role : Concept & Interaction Designer, Researcher &
                  Experience Designer
                </p>
              </div>

              <div className="project-description">
                <p>
                  Partition is usually remembered through stories of
                  migration, violence, loss, and separation. But when I
                  started thinking about my own family's Partition history, I
                  found myself wondering about something much smaller.
                </p>

                <p>
                  What did a child see? A child wouldn't necessarily
                  understand borders, politics, migration, or the scale of
                  what was happening. They would remember a house. A kitchen.
                  A favourite toy. The smell of food. The warmth of a chulha.
                </p>
              </div>

              <a
                className="view-project"
                href="/ghar-jo-hum-piche-chod-aaye"
              >
                [View]
              </a>
            </div>
          </article>


          {/* PROJECT 02 */}
          <article className="project">
            <p className="project-number">02</p>

            <img
              className="project-image project-02-image"
              src="/projects/auction-of-tongues/cover.jpeg"
              alt="Auction of Tongues"
            />

            <div className="project-info">
              <div>
                <h1>Auction of Tongues</h1>
                <p>Duration : 1 week</p>
                <p>Role : Concept Designer, Researcher &
                  Experience Designer</p>
              </div>

              <div className="project-description">
                <p>
                  A speculation. A world where flavours get extinct due to
                  progression, but there were flavours in the past.
                </p>

                <p>
                  To experience that, tongues of the dead who have tasted
                  these flavours in their lives have been restored and a
                  museum is made to experience these flavours.
                </p>
              </div>

              <a
                className="view-project"
                href="/auction-of-tongues"
              >
                [View]
              </a>
            </div>
          </article>


          {/* PROJECT 03 */}
          <article className="project">
            <p className="project-number">03</p>

            <img
              className="project-image project-03-image"
              src="/projects/zupto/cover.png"
              alt="Zupto"
            />

            <div className="project-info">
              <div>
                <h1>Zupto</h1>
                <p>Duration : 2 weeks</p>
                <p>Role : Concept & Interaction Designer, Researcher &
                  Experience Designer</p>
              </div>

              <div className="project-description">
                <p>What if your 10-minute delivery had a hidden cost? 
                  Zupto is a data-visualisation and interaction project exploring the 
                  invisible health cost of quick-commerce delivery workers exposed to Delhi’s polluted air.
                  It started with a simple question: while we enjoy the convenience, 
                  who is paying the hidden price for it?
                  
                </p>
                <p>Rather than telling people what to think, Zupto unfolds as a subtle provocation. 
                  It looks like a familiar quick-commerce app, but small interventions gradually change 
                  the meaning of the experience from AQI and pollution to the worker’s exposure and 
                  finally a “Health Tax.” The goal isn't to give an answer, but to leave you with a question:
                  what does our convenience really cost?
                </p>
              </div>

              <a
                className="view-project"
                href="/zupto"
              >
                [View]
              </a>
            </div>
          </article>


         
          {/* PROJECT 05 */}
          <article className="project">
            <p className="project-number">05</p>

            <img
              className="project-image project-05-image"
              src="/projects/ahmedabad-brts/cover.jpg"
              alt="Ahmedabad BRTS"
            />

            <div className="project-info">
              <div>
                <h1>Ahmedabad BRTS</h1>
                <p>Duration : 1 week</p>
                <p>Role : Concept & Interaction Designer, Researcher &
                  Experience Designer</p>
              </div>

              <div className="project-description">
                <p>
                  It all started with a research question:
                  “How easy and accessible is the BRTS system to navigate for
                  a first-time user?”
                </p>

                <p>
                  What if using public transport didn't come with a learning curve? 
                  Ahmedabad BRTS is designed to move thousands of people every day,
                  but for a first-time passenger, the journey can feel like a puzzle
                  figuring out where to go, which bus to take, how to pay, and when to get off.
                  This project explores the BRTS experience from that first-time perspective,
                  looking beyond the bus itself to redesign the small moments that make public 
                  transport feel confusing.

                </p>
              </div>

              <a
                className="view-project"
                href="/ahmedabad-brts"
              >
                [View]
              </a>
            </div>
          </article>


          {/* PROJECT 06 */}
          <article className="project">
            <p className="project-number">06</p>

            <img
              className="project-image project-06-image"
              src="/projects/ira/cover.png"
              alt="IRA"
            />

            <div className="project-info">
              <div>
                <h1>IRA</h1>
                <p>Startup & Entrepreneurship (Minor)</p>
                <p>Team : Janvi Beherani, Pranjal Raotole</p>
                 <p>Role : Founder, Technical Lead</p>
              </div>

              <div className="project-description">
                <p>IRAxyxyx</p>
              </div>

              <a
                className="view-project"
                href="/ira"
              >
                [View]
              </a>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}