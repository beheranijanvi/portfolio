
export default function IRACaseStudy() {
  return (
    <main className="case-study">
      <div className="case-study-content">

        {/* Header */}
        <header className="case-study-header">
          <p className="case-study-label">
            Startup &amp; Entrepreneurship
          </p>

          <h1>IRA</h1>

          <p>A wearable safety pendant</p>
        </header>

        {/* Problem */}
        <section className="case-study-section opening">
          <h2>Problem</h2>

          <p>
            Most personal safety devices depend on a direct connection to a
            phone, cellular network, or emergency contact. But what happens
            when that connection fails? There's also a gap between needing
            help and being noticed. People nearby might be in a position to
            help but have no way of knowing that someone is in danger.
          </p>

          <p>
            We wanted to rethink safety as something that doesn't depend on
            a single device or connection.
          </p>
        </section>

        {/* Research */}
        <section className="case-study-section">
          <h2>Research</h2>

          <p>
            We explored existing personal safety products, their alert
            mechanisms, and the technologies they use to communicate.
          </p>

          <p>
            <strong>
              Our focus was on understanding how different connectivity
              systems work, particularly Bluetooth, GSM, and mesh networks.
            </strong>
          </p>

          <p>
            While conventional Bluetooth connects devices over a relatively
            short range, mesh networking introduced a more interesting
            possibility: devices could communicate with one another and
            relay messages further.
          </p>

          <p>
            This became the starting point for IRA's core technology.
          </p>
        </section>

        {/* Discovery */}
        <section className="case-study-section">
          <h2>Discovery</h2>

          <p>
            <strong>
              What if one device could help another device reach further?
              This is where BLE mesh became central to our concept.
            </strong>
          </p>

          <p>
            Unlike a conventional point-to-point connection, BLE mesh
            allows compatible devices to relay messages through other
            devices in the network. An alert doesn't necessarily have to
            reach its destination directly; it can travel through multiple
            nearby nodes.
          </p>

          <p>
            This changed our approach to safety. Instead of designing a
            pendant that simply sends an SOS to one phone, we began
            exploring a connected network of wearables that could help
            carry an alert forward.
          </p>

          <p>
            The pendant was no longer just a panic button. It could become
            part of a larger safety network.
          </p>
        </section>

        {/* Solution */}
        <section className="case-study-section">
          <h2>Solution</h2>

          <p>
            IRA is a wearable safety pendant built around a{" "}
            <strong>BLE mesh communication</strong> system.
          </p>

          <p>Here's how the concept works:</p>

          <ol>
            <li>
              <strong>Trigger:</strong> The wearer presses the physical SOS
              button.
            </li>

            <li>
              <strong>Relay:</strong> The pendant sends an emergency
              message to nearby compatible devices in the mesh network.
            </li>

            <li>
              <strong>Forward:</strong> These devices can relay the message
              to other nodes, extending its reach.
            </li>

            <li>
              <strong>Alert:</strong> The emergency signal can reach a
              connected receiving device or designated response point.
            </li>
          </ol>

          <p>
            Each device becomes a potential link in the chain. The more
            connected nodes available, the more paths an alert may have to
            travel.
          </p>

          <p>
            This is what makes IRA different: safety isn't limited to the
            wearer's individual device; it can draw on the network around
            them.
          </p>
        </section>

        {/* Prototype */}
        <section className="case-study-section final-section">
          <h2>Prototype</h2>

          <p>
            We began testing the physical interaction using an Arduino,
            Bluetooth module, tactile button, and vibration motor. The
            prototype focused on the basic SOS trigger and feedback
            mechanism, helping us explore how a simple physical action
            could initiate an alert.
          </p>

          <p>
            Alongside this, BLE mesh formed the communication architecture
            we wanted to develop further.
          </p>

          <p>
            <strong>
              The larger idea was simple: one person's call for help
              shouldn't have to travel alone.
            </strong>
          </p>
        </section>

        {/* Footer */}
        <footer className="case-study-footer">
          <a href="/portfolio/">← Back</a>
        </footer>

      </div>
    </main>
  );
}
