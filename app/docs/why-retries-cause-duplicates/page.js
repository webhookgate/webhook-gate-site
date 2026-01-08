import Link from "next/link";

export const metadata = {
  title: "Why Webhook Retries Cause Duplicate Side Effects — WebhookGate",
  description:
    "Webhook providers retry deliveries. Retries reveal unsafe handlers and cause duplicate side effects unless execution is coupled to durable state.",
};

export default function Page() {
  return (
    <main className="page">
      <p className="p muted">
        <Link className="inlineLink" href="/docs">
          ← Docs
        </Link>
      </p>

      <h1 className="h1">Why Webhook Retries Cause Duplicate Side Effects</h1>

      <h2 className="h2">The uncomfortable truth</h2>
      <p className="p">
        Webhook providers <strong>will</strong> retry deliveries. <br />
        Not sometimes. Not optionally. <strong>Always.</strong>
      </p>

      <p className="p">Retries happen because:</p>
      <ul className="list">
        <li>networks fail</li>
        <li>servers crash mid-request</li>
        <li>timeouts are indistinguishable from success</li>
        <li>providers must assume the worst</li>
      </ul>

      <p className="p">
        From the provider’s perspective, <strong>“no response” means “maybe failed.”</strong>
        <br />
        The only safe move is to retry.
      </p>

      <div className="section">
        <h2 className="h2">What developers expect vs. what actually happens</h2>

        <h3 className="h3">Expectation</h3>
        <p className="p">
          <em>“My webhook handler runs once per event.”</em>
        </p>

        <h3 className="h3">Reality</h3>
        <p className="p">The same event can be delivered:</p>
        <ul className="list">
          <li>multiple times</li>
          <li>concurrently</li>
          <li>out of order</li>
          <li>minutes or hours apart</li>
        </ul>

        <p className="p">
          This is not a bug. <br />
          This is how distributed systems survive.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">Where duplication comes from</h2>
        <p className="p">
          Duplicate side effects happen when <strong>execution is not coupled to state</strong>.
        </p>

        <p className="p">Typical unsafe patterns include:</p>
        <ul className="list">
          <li>charging a customer</li>
          <li>sending an email</li>
          <li>inserting a database row</li>
          <li>triggering a downstream job</li>
        </ul>

        <p className="p">
          If your handler executes those actions <strong>before establishing durable state</strong>,
          every retry is a potential duplicate.
        </p>

        <p className="p">
          Retries don’t cause the bug. <br />
          They <strong>reveal</strong> it.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">Why “just ignore duplicates” doesn’t work</h2>

        <p className="p">Many teams try:</p>
        <ul className="list">
          <li>checking event IDs in memory</li>
          <li>caching processed events</li>
          <li>trusting provider guarantees</li>
        </ul>

        <p className="p">All of these fail under:</p>
        <ul className="list">
          <li>process restarts</li>
          <li>horizontal scaling</li>
          <li>race conditions</li>
          <li>partial failures</li>
        </ul>

        <p className="p">
          If state is not <strong>durable and atomic</strong>, retries win.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">Key takeaway</h2>
        <p className="p">
          Webhook retries are unavoidable. <br />
          Duplicate side effects are optional — but only if handled correctly.
        </p>
        <p className="p muted">
          The rest of the docs explain why common fixes fail, and what actually works.
        </p>
      </div>
    </main>
  );
}
