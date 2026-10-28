
"use client";

import { useEffect, useState } from "react";

export default function CaseStudy() {
  const slides = [
    "/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/ghar-01.png",
    "/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/ghar-02.png",
    "/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/ghar-03.png",
    "/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/ghar-04.png",
    "/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/ghar-05.png",
    "/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/ghar-06.png",
    "/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/ghar-07.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  function changeSlide(direction: number) {
    setSlideDirection(direction);

    setCurrentSlide((current) => {
      return (current + direction + slides.length) % slides.length;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="case-study">
      <div className="case-study-content">

        {/* HEADER */}

        <header className="case-study-header">
          <p className="case-study-label">
            GHAR JO HUM PICHE CHOD AAYE
          </p>

          <p className="case-study-meta">
            Concept &amp; Interaction Designer · Researcher · Experience Designer
            <br />
            3 weeks · Unity, VR, Arduino, Sensors, Projection Mapping,
            Physical Computing
            <br />
            Collaborator: Nikhil Shah
          </p>
        </header>

        {/* INTRODUCTION */}

        <section className="case-study-section opening">
          <p>
            A story about leaving home without knowing you're leaving it.
            Partition is often remembered through borders, trains, violence
            and migration. But when I started thinking about my family's
            history, I kept coming back to something much smaller. What did a
            child see? Maybe not borders or politics. Maybe a kitchen. A warm
            chulha. The smell of spices. A favourite toy. The corners of a
            house they knew by heart.
          </p>

          <p>
            That became the starting point for Ghar Jo Hum Piche Chod Aaye — a
            multi sensory VR experience that lets you enter 1947 Karachi
            through the eyes of a 12-year-old child named Mohan.
          </p>
        </section>

        {/* YOUTUBE VIDEO */}

        <div className="case-study-video">
          <iframe
            src="https://www.youtube.com/embed/zJUPFUX5htk"
            title="Ghar Jo Hum Piche Chod Aaye"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* MAKING PARTITION SMALLER */}

        <section className="case-study-section">
          <h2>Making Partition smaller</h2>

          <p>
            We couldn't tell the story of millions of people. So we made it
            smaller. One child. One house. One not ordinary day. Mohan enters
            the house simply looking for his lattu. He isn't trying to make
            sense of things around him. He's just a curious child exploring
            the places he was usually not allowed to enter. And that's what
            makes the experience personal. Because sometimes, the things we
            remember most aren't the big moments. They're the small things we
            thought we'd come back to.
          </p>
        </section>

        {/* PHOTO SLIDESHOW */}

        <div className="ghar-slideshow">
          <div className="slideshow-image-wrapper">
            <img
              key={currentSlide}
              className={`slideshow-image ${
                slideDirection === 1 ? "slide-right" : "slide-left"
              }`}
              src={slides[currentSlide]}
              alt={`Ghar Jo Hum Piche Chod Aaye — image ${currentSlide + 1}`}
            />
          </div>

          <div className="ghar-slideshow-controls">
            <div className="ghar-slideshow-counter">
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </div>

            <div className="ghar-slideshow-arrows">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* EXPERIMENTATIONS */}

        <section className="case-study-section">
          <h2>Experimentations</h2>

          <p>
            Before making the house itself, we had to figure out how we were
            going to build it.
          </p>
        </section>

        {/* BUILDING A HOME */}

        <section className="case-study-section">
          <h2>Building a home from memories</h2>

          <p>
            The house began with conversations with my aai and grew through
            photographs, archival material, architectural references and oral
            histories. We weren't just trying to recreate a historically
            accurate house. We were trying to recreate the feeling of being
            home. The kitchen became the heart of the experience. You could
            smell the spices. Touch objects. Hear utensils. Feel the warmth of
            the chulha. VR gave us the world. The physical installation gave
            it a pulse.
          </p>
        </section>

        {/* CHULHA */}

        <section className="case-study-section">
          <h2>When your breath becomes fire.</h2>

          <p>
            One of the most important interactions was the chulha. The
            participant blows into a real blowpipe. A sensor reads their
            breath, and the fire inside VR grows stronger. At the same time,
            the physical chulha provides warmth and smell. For a moment, the
            boundary between the real and virtual world disappears. You aren't
            just looking at the fire. You're breathing life into it.
          </p>
        </section>

        
        {/* PHOTO + GIF CONTAINER */}
        <div className="ghar-process-container">
          <div className="ghar-process-photo">
            <img
              src="/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/chula.png"
              alt="A moment from the physical installation"
            />
          </div>

          <div className="ghar-process-gif">
            <img
              src="/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/Chulha_split.gif"
              alt="The interaction in motion"
            />
          </div>
        </div>


       

        {/* THE LATTU */}

        <section className="case-study-section">
          <h2>And then, the lattu</h2>

          <p>
            Eventually, Mohan finds what he came looking for. His lattu. The
            natural thing would be to let the participant continue exploring.
            Instead, the experience ends. Suddenly. No warning. No chance to go
            back. Because that is what we wanted the ending to feel like. You
            leave the lattu behind, thinking you'll come back tomorrow.
          </p>

          
          {/* PHOTO + GIF — AFTER THERE IS NO TOMORROW */}
          <div className="ghar-process-container">
            <div className="ghar-process-photo">
              <img
                src="/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/lattu.png"
                alt="The physical chulha installation"
              />
            </div>

            <div className="ghar-process-gif">
              <img
                src="/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/lattu_split.gif"
                alt="The chulha interaction in VR"
              />
            </div>
          </div>


          <p>But there is no tomorrow.</p>

          <div className="case-study-quote">
            <p>
              “उन्हें बोला हम कल लट्टू लेने कल वापस आ जायेंगे।”
            </p>

            <p>
              They said, we'll come back tomorrow to get the lattu.
            </p>
          </div>

          <p>
            That small sentence carries the entire weight of the experience.
          </p>
        </section>

         {/* ONE HOUSE, TWO WORLDS */}

        <section className="case-study-section">
          <h2>One house, two worlds</h2>

          <p>
            We wanted the physical installation and VR world to feel like the
            same house, not two separate experiences. So we mapped the physical
            space to the exact dimensions of the VR environment. If Mohan
            walked towards the kitchen in the real world, he would reach the
            same kitchen inside VR. Physical objects were placed where their
            virtual versions appeared, so the participant could reach, touch
            and interact with things naturally.
          </p>

          <p>
            The interactions worked the same way. You blow into the real
            chulha, and a sensor detects the breath and makes the virtual fire
            grow. At the same time, the physical chulha gives you warmth and
            the smell of the fire.
          </p>

          <p>
            So the participant isn't just seeing Mohan's home. Their hands
            touch it. Their breath changes it. Their body feels it. And
            because everything is built from a child's height and perspective,
            the world feels slightly different too: the floor is closer,
            objects feel larger, and the house feels bigger than it would to
            an adult.
          </p>

          <p>
            For a few minutes, you don't feel like you're visiting a
            historical house. You feel like you're a child inside one.
          </p>
        </section>

        
        {/* INSTALLATION TIMELAPSE GIF */}
        <div className="case-study-video-local">
          <img
            src="/portfolio/projects/ghar-jo-hum-piche-chod-aaye/images/installation-timelapse.gif"
            alt="Timelapse of building the physical installation"
            loading="lazy"
          />
        </div>


        {/* WHAT I TOOK AWAY */}

        <section className="case-study-section final-section">
          <h2>What I took away</h2>

          <p>
            This project changed how I think about representing history. I
            learned that you don't always need to show the tragedy to make
            someone feel the loss. Sometimes, a lattu is enough. A masala
            dabba can remind you of routine. A warm chulha can remind you of
            family. A house can feel like home in just a few small details.
            And sometimes, losing home isn't about watching it disappear.
          </p>

          <p>
            It's simply believing you'll be back tomorrow — and finding out
            you never were. Home isn't just a place. It's a collection of
            little things we never thought we'd have to say goodbye to.
          </p>
        </section>

        {/* FOOTER */}

        <footer className="case-study-footer">
         <a href="/portfolio/">← Back to Projects</a>
        </footer>

      </div>
    </main>
  );
}
