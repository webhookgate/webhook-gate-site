import Link from "next/link";

export const metadata = {
  title: "Exactly-once Delivery Is a Myth — WebhookGate",
  description:
    "Exactly-once delivery doesn’t exist in real distributed systems. The real goal is exactly-once side effects via idempotent execution and durable state.",
};

export default function Page() {
  return (
    <main className="page">
      <p className="p muted">
        <Link className="inlineLink" href="/docs">
          ← Docs
        </Link>
      </p>

      <h1 className="h1">Exactly-once Delivery Is a Myth</h1>

      <h2 className="h2">Why the phrase exists</h2>
      <p className="p">
        “Exactly-once delivery” sounds comforting. <br />
        It suggests:
      </p>
      <ul className="list">
        <li>certainty</li>
        <li>correctness</li>
        <li>safety</li>
      </ul>
      <p className="p">Unfortunately, it does not exist in real distributed systems.</p>

      <div className="section">
        <h2 className="h2">The core impossibility</h2>
        <p className="p">To guarantee exactly-once delivery, you would need:</p>
        <ul className="list">
          <li>perfect networks</li>
          <li>no crashes</li>
          <li>no timeouts</li>
          <li>no partitions</li>
          <li>global coordination</li>
        </ul>

        <p className="p">None of those are available.</p>

        <p className="p">
          If a sender cannot distinguish:
          <br />
          <em>“the receiver processed the message”</em>
          <br />
          from
          <br />
          <em>“the receiver processed the message but crashed before responding”</em>
          <br />
          then retries are mandatory.
        </p>

        <p className="p">
          Once retries exist, exactly-once delivery is gone.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">What systems actually guarantee</h2>
        <p className="p">Real systems offer:</p>
        <ul className="list">
          <li>
            <strong>at-least-once delivery</strong> (webhooks, queues)
          </li>
          <li>
            <strong>at-most-once delivery</strong> (best effort, lossy)
          </li>
        </ul>

        <p className="p">
          Anything claiming exactly-once is doing one of two things:
        </p>
        <ul className="list">
          <li>redefining the problem</li>
          <li>hiding the complexity</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="h2">Where confusion creeps in</h2>
        <p className="p">Developers often conflate:</p>
        <ul className="list">
          <li>delivery guarantees</li>
          <li>execution guarantees</li>
          <li>side-effect guarantees</li>
        </ul>

        <p className="p">
          A webhook may be delivered multiple times
          <br />
          and still be handled safely — <strong>but only if side effects are controlled</strong>.
        </p>

        <p className="p">The real goal is not exactly-once delivery.</p>

        <p className="p">
          It is:
          <br />
          <strong>Exactly-once side effects.</strong>
        </p>
      </div>

      <div className="section">
        <h2 className="h2">Why this distinction matters</h2>

        <p className="p">If you chase delivery guarantees:</p>
        <ul className="list">
          <li>you fight the provider</li>
          <li>you lose to retries</li>
          <li>you write fragile code</li>
        </ul>

        <p className="p">If you design for idempotent side effects:</p>
        <ul className="list">
          <li>retries become harmless</li>
          <li>failures become survivable</li>
          <li>correctness becomes provable</li>
        </ul>

        <p className="p">
          This is the only winning strategy.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">Key takeaway</h2>
        <p className="p">
          Exactly-once delivery is impossible. <br />
          Exactly-once side effects are achievable — but require architectural discipline.
        </p>
      </div>
    </main>
  );
}
