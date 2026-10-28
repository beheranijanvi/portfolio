
"use client";

import { useEffect, useRef } from "react";

const healthFactors = [
  ["Fine particulate matter", "0.20"],
  ["Ozone", "0.18"],
  ["Nitrogen dioxide", "0.15"],
  ["Inhalation", "0.14"],
  ["Carbon monoxide intake", "0.12"],
  ["Respiratory illness risk", "0.10"],
  ["Lung function decline", "0.08"],
  ["Cardiovascular stress", "0.07"],
  ["Increased breathing rate", "0.06"],
  ["Long-term health impact", "0.05"],
  ["Dust particle accumulation", "0.04"],
  ["Micro-toxin absorption", "0.04"],
  ["Reduced lung elasticity", "0.03"],
  ["Skin exposure to pollutants", "0.02"],
  ["Slight fatigue onset", "0.02"],
  ["Headache likelihood", "0.02"],
  ["Reduced stamina", "0.01"],
  ["Exposure to vehicle exhaust", "0.01"],
  ["Noise stress interaction", "0.40"],
  ["Urban heat + pollution", "0.35"],
  ["Airway inflammation buildup", "0.30"],
  ["Mucus layer thickening", "0.25"],
  ["Reduced lung efficiency", "0.24"],
  ["Repeated cough trigger", "0.22"],
  ["Allergy sensitivity increase", "0.20"],
  ["Breathlessness onset risk", "0.18"],
  ["Immune response strain", "0.17"],
  ["Minor infection susceptibility", "0.16"],
  ["Lung lining irritation", "0.15"],
  ["Reduced oxygen circulation", "0.14"],
  ["Fatigue accumulation", "0.13"],
  ["Decreased physical endurance", "0.12"],
  ["Increased recovery time", "0.11"],
  ["Repeated irritation cycles", "0.10"],
  ["Chest tightness episodes", "0.09"],
  ["Minor wheezing risk", "0.08"],
  ["Stress + pollution interaction", "0.07"],
  ["Sleep quality reduction", "0.06"],
  ["Headache recurrence", "0.05"],
  ["Long-term sensitivity buildup", "0.80"],
  ["General physical strain", "0.75"],
  ["Follow-up consultation share", "0.70"],
  ["Basic medication cost share", "0.65"],
  ["Inhaler usage fraction", "0.60"],
  ["Antibiotic treatment fraction", "0.55"],
  ["Diagnostic test share", "0.50"],
  ["Chest X-ray fraction", "0.48"],
  ["Blood test allocation", "0.46"],
  ["Spirometry test share", "0.44"],
  ["Pharmacy margin allocation", "0.42"],
  ["Travel to clinic cost", "0.40"],
  ["Waiting time productivity loss", "0.38"],
  ["Repeat prescription cost", "0.36"],
  ["Seasonal illness overlap", "0.34"],
  ["OTC medicine usage", "0.32"],
  ["Mask / protection cost", "0.30"],
  ["Preventive medication share", "0.28"],
  ["Health monitoring cost", "1.20"],
  ["Minor treatment repetition", "1.10"],
  ["Consultation escalation risk", "1.00"],
  ["Emergency visit probability", "0.95"],
  ["Hospital admission probability", "0.90"],
  ["Oxygen support share", "0.85"],
  ["Nebulization treatment", "0.80"],
  ["ICU probability fraction", "0.75"],
  ["Bed charge allocation", "0.70"],
  ["Nursing care cost share", "0.65"],
  ["Injection / IV treatment", "0.60"],
  ["Ambulance transport share", "0.55"],
  ["Emergency diagnostics", "0.50"],
  ["Specialist consultation", "0.48"],
  ["Monitoring equipment usage", "0.46"],
  ["Medicine escalation", "0.44"],
  ["Night-time emergency premium", "0.42"],
  ["Re-admission risk", "0.40"],
  ["Post-discharge medication", "0.38"],
  ["Follow-up hospitalization risk", "0.36"],
  ["Emergency overload factor", "0.30"],
  ["Delay in treatment cost", "0.75"],
  ["Complication probability", "0.70"],
  ["Chronic bronchitis risk", "0.65"],
  ["Asthma development risk", "0.60"],
  ["Lung capacity decline", "0.55"],
  ["Reduced work ability", "0.50"],
  ["Long-term medication need", "0.48"],
  ["Repeated illness cycles", "0.46"],
  ["Reduced lifespan share", "0.44"],
  ["Cardiovascular stress", "0.42"],
  ["Immune system weakening", "0.40"],
  ["Increased vulnerability with age", "0.38"],
  ["Productivity loss over years", "0.36"],
  ["Financial instability risk", "0.34"],
  ["Family dependency burden", "0.32"],
  ["Insurance inaccessibility risk", "0.30"],
  ["Chronic fatigue accumulation", "0.28"],
  ["Reduced quality of life", "0.26"],
  ["Mobility reduction", "0.24"],
  ["Healthcare limitation impact", "0.50"],
  ["Long-term treatment cycles", "0.48"],
  ["Irreversible lung damage", "0.46"],
  ["Public hospital bed share", "0.44"],
  ["Government healthcare spending", "0.42"],
  ["Insurance pool strain", "0.38"],
  ["Urban pollution redistribution", "0.36"],
  ["Worker health normalization", "0.34"],
  ["Informal labor vulnerability", "0.32"],
  ["Out-of-pocket expense burden", "0.30"],
  ["Economic productivity loss", "0.28"],
  ["Family income disruption", "0.26"],
  ["Social inequality amplification", "0.24"],
  ["Healthcare access gap", "0.22"],
  ["Preventive care shortage", "0.20"],
  ["Environmental injustice factor", "0.18"],
  ["Policy enforcement gap", "0.16"],
  ["Urban planning failure cost", "0.14"],
  ["Long-term public health debt", "0.12"],
  ["Invisible labor cost", "0.15"],
  ["System inefficiency", "0.10"],
  ["Chronic disease burden", "0.45"],
  ["Generational health impact", "0.40"],
];


function HealthTaxReceipt() {
  const sectionRef = useRef<HTMLElement>(null);
const paperRef = useRef<HTMLDivElement>(null);
  const paperWindowRef = useRef<HTMLDivElement>(null);

  
useEffect(() => {
  const section = sectionRef.current;
  const paper = paperRef.current;
  const paperWindow = paperWindowRef.current;

  if (!section || !paper || !paperWindow) return;

  let frame = 0;

  const updateProgress = () => {
    cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const viewportHeight = window.innerHeight;
      const paperHeight = paper.scrollHeight;
      const windowHeight = paperWindow.clientHeight;

      // Calculate the distance required to move through the entire receipt.
      const paperTravel = Math.max(0, paperHeight - windowHeight);
      const printDistance = Math.max(paperTravel, viewportHeight);

      // Give the whole receipt enough scroll distance.
      section.style.height = `${viewportHeight + printDistance}px`;

      const rect = section.getBoundingClientRect();
      const travelled = Math.max(0, -rect.top);

      const progress = Math.min(
        1,
        Math.max(0, travelled / printDistance)
      );

      // Move the receipt upward to reveal each part as you scroll.
      const paperShift = -paperTravel * progress;

      section.style.setProperty(
        "--receipt-progress",
        String(progress)
      );

      section.style.setProperty(
        "--receipt-paper-shift",
        `${paperShift}px`
      );

      // Gradually build the loose paper pile beneath the printer.
      section.style.setProperty(
        "--receipt-pile-progress",
        String(progress)
      );

      section.dataset.finished = progress >= 1 ? "true" : "false";
    });
  };

  const resizeObserver = new ResizeObserver(updateProgress);
  resizeObserver.observe(paper);
  resizeObserver.observe(paperWindow);

  updateProgress();

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    window.removeEventListener("scroll", updateProgress);
    window.removeEventListener("resize", updateProgress);
  };
}, []);


  return (
    <section
      ref={sectionRef}
      className="zupto-tax-experience"
      aria-label="Health Tax receipt interaction"
    >
      <div className="zupto-tax-sticky">
        <div className="zupto-printer-scene">
          <div className="zupto-printer">
            <div className="zupto-printer-heading">
              HEALTH TAX
            </div>

            <div className="zupto-printer-controls">
              <span className="zupto-printer-slot" />
              <span className="zupto-printer-light" />
              <span className="zupto-printer-button" />
            </div>
          </div>

          <div 
            ref={paperWindowRef}
          className="zupto-paper-window">
            <div
              ref={paperRef}
              className="zupto-paper"
            >
              <div className="zupto-paper-brand">ZUPTO</div>
              <div className="zupto-paper-subtitle">
                DELIVERY ORDER
              </div>

              <div className="zupto-paper-order">
                <div>
                  <span>Order items</span>
                  <span>₹249.00</span>
                </div>
                <div>
                  <span>Delivery</span>
                  <span>₹00.00</span>
                </div>
                <div>
                  <span>Convenience fee</span>
                  <span>₹00.00</span>
                </div>
              </div>

              <div className="zupto-paper-total">
                <span>Order total</span>
                <span>₹249.00</span>
              </div>

              <div className="zupto-paper-tax">
                <span>HEALTH TAX</span>
                <strong>₹29.00</strong>
              </div>

              <p className="zupto-paper-caption">
                YOUR DELIVERY PARTNER’S
                <br />
                HEALTH CONTRIBUTION
              </p>

              <div className="zupto-paper-factors">
                {healthFactors.map(([name, value], index) => (
                  <div
                    className="zupto-paper-factor"
                    key={`${name}-${index}`}
                  >
                    <span>{name}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div className="zupto-paper-closing">
                <p>Every delivery has a journey.</p>
                <p>Someone has to breathe the air.</p>
                <p className="zupto-paper-thanks">
                  — THANK YOU —
                </p>
              </div>
            </div>
          </div>

          <div
            className="zupto-paper-pile"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}


export default function CaseStudy() {
  return (
    <main className="case-study">
      <div className="case-study-content">
        <header className="case-study-header">
          <p className="case-study-label">ZUPTO</p>
          <h1>What if your 10-minute delivery had a hidden cost?</h1>
          <p className="case-study-meta">
            Concept &amp; Interaction Designer
            <br />
            Data Visualization
            <br />
            Figma, Research, Prototyping, Data Visualization
          </p>
        </header>

        <section className="case-study-section opening">
          <h2> Goal</h2>
          <p>
            The goal was to make air-quality data feel more connected and
            beyond numbers.
          </p>
          <p>
            AQI is often communicated as a number. We know when it rises, the
            air becomes more dangerous, but the number rarely tells us what
            that danger means for the people living and working in it. I
            wanted to explore how data visualization and interaction could
            help people move beyond simply knowing that pollution is bad, and
            begin to understand its consequences for human health and everyday
            life.
          </p>
        </section>

        <section className="case-study-section">
          <h2>Intent</h2>
          <p>
            We see AQI numbers everywhere, especially when the air turns bad.
            But how often do we stop to think about what those numbers
            actually mean for someone&apos;s life?
          </p>
          <p>
            Air-quality data is publicly available, collected through
            monitoring stations and communicated largely through numbers. Yet,
            numbers alone rarely tell us the whole story. Rising PM2.5 levels
            in India are linked to serious health concerns, while black carbon
            produced by the incomplete burning of fossil fuels and biomass
            adds another layer of pollution that isn&apos;t directly reflected
            in AQI.
          </p>
          <p>The intent was clear : <strong>
             To gather public attention to these conditions, and thus pressure
            managers and company owners to take action.
           </strong>
          
           </p>
        </section>

        <section className="case-study-section">
          <h2>The Uncomfortable Question</h2>
          <p>
            We tap a button. We place an order. A few minutes later, someone
            arrives at our door. It&apos;s easy to forget what happens in
            between. In Delhi, delivery workers spend hours riding through
            polluted streets, breathing the same air that threatens their
            health. Their exposure becomes part of the convenience we barely
            think about.
          </p>
          <p>
            This became the question behind Zupto:{" "}
            <strong>
              What if the person delivering your order had to pay a price you
              never see?
            </strong>
          </p>
          <p>
            We wanted to bring two things that rarely meet in our minds into
            the same experience: the ease of ordering online and the human
            cost of delivering it.
          </p>
          
<div className="zupto-mobile-screens">
  <img
    src="/projects/zupto/zupto-mobile-screens.png"
    alt="Four Zupto mobile app screens showing the shopping experience, product page, checkout, and AQI-based delivery map"
  />
</div>

        </section>

        <section className="case-study-section">
          <h2>The Provocation</h2>
          <p>
            We didn&apos;t want to create another infographic telling people
            that air pollution is dangerous. We already know it&apos;s bad.
            The harder question is whether we understand what that means for
            someone else. We turned to a familiar interface: a quick-commerce
            app.
          </p>
          <p>
            Zupto looks and behaves like a regular ordering platform. You
            choose your location, browse products and add things to your cart.
            But gradually, AQI, pollution and the delivery worker&apos;s
            exposure enter the experience. An ordinary transaction begins to
            feel different. Rather than telling people what to think, Zupto
            lets the question unfold while they do something familiar.
          </p>
          

<div className="zupto-figma-prototype">
  <iframe
    title="Zupto mobile prototype"
    src="https://embed.figma.com/proto/IJVSfiYzhzbx8LwwoZPPmm/Zepto-_dummy?node-id=485-37&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=485%3A37&embed-host=share"
    allowFullScreen
  />
</div>


        </section>

        <section className="case-study-section zupto-health-tax-copy">
          <h2>The Health Tax</h2>
          <p>
            At checkout, the user expects a total. Instead, they encounter
            something unexpected: a <strong>₹29 Health Tax.</strong>
          </p>
          <p>
            It represents the hidden health burden behind the convenience of a
            quick delivery. It isn&apos;t a precise medical calculation, nor an
            attempt to put a price on someone&apos;s health. It&apos;s a
            provocation — a way of making an invisible cost harder to ignore.
            We explored factors such as AQI, exposure, delivery distance,
            income and potential health impacts, trying to find a calculation
            that could capture the problem. But a systemic issue like this
            doesn&apos;t fit neatly into one equation.
          </p>

          <HealthTaxReceipt />

          <p>
            We eventually realised that the number wasn&apos;t the whole
            point. The point was to make someone pause before moving on. You
            came to see what your order costs. Now you&apos;re asked to think
            about who else might be paying.
          </p>
        </section>

        <section className="case-study-section">
          <h2>The Map</h2>
          <p>
            The map brings the issue back to the city itself. Air pollution
            isn&apos;t an abstract number floating on a screen. It changes
            from one area to another, shaping the environment people move
            through every day. For a delivery worker, these aren&apos;t just
            places on a map; they&apos;re streets, routes and hours spent
            breathing the air. By connecting location and air-quality data to
            the delivery journey, the map helps ground the provocation in a
            real environment. Every delivery happens somewhere, in air someone
            has to breathe.
          </p>

          <div className="zupto-map-embed" style={{ width: "100%", margin: "2rem 0 2.5rem" }}>
            <iframe
              src="/projects/zupto/delhi-aqi-map.html"
              title="Delhi AQI and dark-store map, 2024"
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
                height: "min(72vh, 680px)",
                minHeight: "520px",
                border: "1px solid #d8d8d8",
                background: "#fff",
              }}
            />
            <p style={{ fontSize: "12px", color: "#777", marginTop: "8px" }}>
              Delhi air-quality intensity and dark-store locations, 2024. Select markers for details.
            </p>
          </div>
          <p>
            The order may take ten minutes to arrive. The person delivering it
            lives with the journey long after the screen says “Delivered.”
          </p>
        </section>

        <section className="case-study-section final-section">
          <h2>What Stayed With Me</h2>
          <p>
            Zupto started as a data-visualisation project, but it made me think
            about the distance between knowing something and feeling its
            significance.
          </p>
          <p>
            A number can tell us the air is unsafe. A map can show us where
            pollution is worse. But neither automatically makes us think about
            its impact on the living.
          </p>
          <p>
            I wanted Zupto to close that distance, even if only for a moment —
            not by blaming the consumer, but by making the system behind their
            convenience visible.
          </p>
          <p>
            Sometimes, the most meaningful way to present data isn&apos;t to
            give people another number. It&apos;s to make them question what
            that number means for someone else.
          </p>
        </section>

        <footer className="case-study-footer">
          <a href="/portfolio/">← Back to Projects</a>
        </footer>
      </div>
    </main>
  );
}
