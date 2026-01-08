import Link from "next/link";

export const metadata = {
  title: "What a Real Guarantee Requires — WebhookGate",
  description:
    "A real guarantee must survive retries, concurrency, crashes, restarts, and partial failures. Here are the minimum requirements to prevent duplicate webhook side effects.",
};

export default function Page() {
  return (
    <main className="page">
      <p className="p muted">
        <Link className="inlineLink" href="/docs">
          ← Docs
        </Link>
      </p>

      <h1 className="h1">What a Real Guarantee Requires</h1>

      <h2 className="h2">What “safe” actually means</h2>
      <p className="p">A real guarantee must survive:</p>
      <ul className="list">
        <li>retries</li>
        <li>concurrency</li>
        <li>crashes</li>
        <li>restarts</li>
        <li>partial failures</li>
      </ul>

      <p className="p">
        Anything less is not a guarantee — it’s optimism.
      </p>

      <div className="section">
        <h2 className="h2">The minimum requirements</h2>
        <p className="p">To prevent duplicate side effects, a system must:</p>

        <h3 className="h3">1. Establish durable state before executing effects</h3>
        <ul className="list">
          <li>The system must remember what it has seen</li>
          <li>Memory is not enough</li>
          <li>Logs are not enough</li>
        </ul>

        <h3 className="h3">2. Bind execution to that state atomically</h3>
        <ul className="list">
          <li>Either the effect happens and state updates</li>
          <li>Or neither happens</li>
          <li>No in-between</li>
        </ul>

        <h3 className="h3">3. Reject or short-circuit replays deterministically</h3>
        <ul className="list">
          <li>Every retry must hit the same decision point</li>
          <li>No timing-based logic</li>
          <li>No best-effort checks</li>
        </ul>

        <h3 className="h3">4. Operate outside application process memory</h3>
        <ul className="list">
          <li>Processes crash</li>
          <li>Containers restart</li>
          <li>Horizontal scaling is normal</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="h2">Why middleware alone fails</h2>
        <p className="p">Most webhook handlers run:</p>
        <ul className="list">
          <li>inside web servers</li>
          <li>behind frameworks</li>
          <li>with business logic interleaved</li>
        </ul>

        <p className="p">This makes it extremely hard to:</p>
        <ul className="list">
          <li>reason about atomicity</li>
          <li>guarantee ordering</li>
          <li>control execution boundaries</li>
        </ul>

        <p className="p">
          Idempotency bolted onto handlers is fragile by default.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">Where a gateway fits</h2>
        <p className="p">A gateway sits before application logic and:</p>
        <ul className="list">
          <li>absorbs retries</li>
          <li>deduplicates events</li>
          <li>establishes durable intake state</li>
          <li>controls execution flow</li>
        </ul>

        <p className="p">
          This is not an implementation detail. <br />
          It is a <strong>boundary decision</strong>.
        </p>

        <p className="p">
          Once retries pass into business logic, safety is already compromised.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">What WebhookGate guarantees</h2>
        <p className="p">WebhookGate guarantees:</p>
        <ul className="list">
          <li>no duplicate side effects for the same webhook event</li>
          <li>regardless of retries, concurrency, or crashes</li>
        </ul>

        <p className="p">WebhookGate does not:</p>
        <ul className="list">
          <li>promise exactly-once delivery</li>
          <li>fix unsafe downstream code</li>
          <li>run business logic for you</li>
        </ul>

        <p className="p">
          It enforces the boundary that makes safety possible.
        </p>
      </div>

      <div className="section">
        <h2 className="h2">What to do next</h2>
        <p className="p">If webhook failures matter in production:</p>
        <ul className="list">
          <li>read how teams integrate WebhookGate</li>
          <li>evaluate it in a pilot</li>
          <li>test it against real failure modes</li>
        </ul>

        <p className="p">
          Understanding the problem is step one. <br />
          Eliminating it requires a system designed for reality.
        </p>
      </div>
    </main>
  );
}
