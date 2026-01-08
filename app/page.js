// app/page.js

import Link from "next/link";

const PILOT_EMAIL = "pilot@webhookgate.com";

const DOCS = {
  retries: "/docs/why-retries-cause-duplicates",
  exactlyOnce: "/docs/exactly-once-is-a-myth",
  guarantee: "/docs/what-a-real-guarantee-requires",
};

export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <div className="brand">WebhookGate</div>
        <div className="headerLinks">
          <Link className="headerLink" href="/docs">
            Docs
          </Link>
          <a className="headerLink" href={`mailto:${PILOT_EMAIL}`}>
            Contact
          </a>
        </div>
      </header>

      <section className="hero">
        <h1 className="h1">Exactly-once webhook side effects.</h1>
        <p className="subhead">
          No duplicate charges. No double emails. No “we’ll fix it later” logic.
        </p>
        <p className="lead">
          WebhookGate guarantees your webhook handlers execute <strong>once</strong> — and only once.
        </p>

        <p className="p muted">
          <Link className="inlineLink" href="/docs">
            Read the technical explanation
          </Link>
        </p>

        <div className="ctaRow">
          <a className="button" href={`mailto:${PILOT_EMAIL}?subject=WebhookGate%20pilot`}>
            Join the pilot
          </a>
          <div className="ctaHint">
            Email-only support. Fast onboarding. 5–10 teams.
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Webhooks are unreliable by design.</h2>
        <p className="p">
          Stripe, GitHub, Shopify, and others <strong>will</strong> retry events.
        </p>
        <ul className="list">
          <li>customers charged twice</li>
          <li>emails sent twice</li>
          <li>state mutated twice</li>
          <li>emergency hotfixes at 2am</li>
        </ul>
        <p className="p">
          Idempotency sounds simple — until it isn’t.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">WebhookGate enforces exactly-once execution.</h2>
        <p className="p">
          It sits between the webhook sender and your handler and guarantees:
        </p>
        <ul className="list">
          <li>each event is processed once</li>
          <li>retries are safely ignored</li>
          <li>side effects never repeat</li>
        </ul>
        <p className="p muted">
          No race conditions. No fragile ad-hoc guards. No guesswork.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">How it works (high-level)</h2>
        <p className="p">
          WebhookGate provides <strong>durable intake + execution locking</strong>, so your business
          logic never runs twice — even under retries, crashes, or concurrency.
        </p>
        <p className="p muted">
          You keep your existing handlers. WebhookGate handles the hard parts.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Who it’s for</h2>
        <p className="p">WebhookGate is for teams who:</p>
        <ul className="list">
          <li>handle money, emails, or irreversible actions</li>
          <li>rely on third-party webhooks</li>
          <li>are tired of writing bespoke idempotency logic</li>
          <li>want correctness &gt; cleverness</li>
        </ul>
        <p className="p">
          If duplicate side effects would be a <strong>serious incident</strong> for you, this is for you.
        </p>
      </section>

      <section className="section pilot">
        <h2 className="h2">Pilot program</h2>
        <p className="p">
          We’re onboarding <strong>5–10 teams</strong> into a private pilot.
        </p>
        <div className="pillRow">
          <span className="pill">$250 / month</span>
          <span className="pill">Unlimited webhook volume</span>
          <span className="pill">Email-only support</span>
          <span className="pill">Your feedback shapes the product</span>
        </div>
        <p className="p muted">
          This is not a free beta. This is paid, serious infrastructure.
        </p>

        <div className="ctaBox">
          <h3 className="h3">Interested in the pilot?</h3>
          <p className="p">
            Email us with:
          </p>
          <ul className="list">
            <li>what webhooks you run</li>
            <li>what side effects you care about</li>
            <li>your stack (briefly)</li>
          </ul>

          <a className="button" href={`mailto:${PILOT_EMAIL}?subject=WebhookGate%20pilot`}>
            Email {PILOT_EMAIL}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerBrand">WebhookGate</div>
        <div className="footerText">Infrastructure for teams who take correctness seriously.</div>
        <div className="footerLinks">
          <Link className="footerLink" href="/docs">
            Docs
          </Link>
          <a className="footerLink" href={`mailto:${PILOT_EMAIL}`}>
            {PILOT_EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
