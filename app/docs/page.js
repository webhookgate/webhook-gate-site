import Link from "next/link";

export const metadata = {
  title: "Docs — WebhookGate",
  description:
    "Problem-first explanation of webhook retries, exactly-once myths, and what a real guarantee requires.",
};

export default function DocsIndex() {
  return (
    <main className="page">
      <h1 className="h1">Docs</h1>

      <p className="p">
        A short, problem-first explanation of why duplicate webhook side effects
        happen, why “exactly-once delivery” is a myth, and what a real guarantee requires.
      </p>

      <div className="section">
        <h2 className="h2">Start here</h2>

        <ol className="list">
          <li>
            <strong>Why Webhook Retries Cause Duplicate Side Effects</strong>
            <br />
            Retries are unavoidable. Duplicates are optional.{" "}
            <Link className="inlineLink" href="/docs/why-retries-cause-duplicates">
              Read
            </Link>
          </li>

          <li style={{ marginTop: 10 }}>
            <strong>Exactly-once Delivery Is a Myth</strong>
            <br />
            The real goal is exactly-once <em>side effects</em>.{" "}
            <Link className="inlineLink" href="/docs/exactly-once-is-a-myth">
              Read
            </Link>
          </li>

          <li style={{ marginTop: 10 }}>
            <strong>What a Real Guarantee Requires</strong>
            <br />
            The boundary decisions and invariants that make safety possible.{" "}
            <Link className="inlineLink" href="/docs/what-a-real-guarantee-requires">
              Read
            </Link>
          </li>
        </ol>
      </div>

      <p className="p muted" style={{ marginTop: 24 }}>
        → <Link className="inlineLink" href="/">Back to WebhookGate</Link>
      </p>
    </main>
  );
}
