// app/layout.js
import "../styles/globals.css";

export const metadata = {
  title: "WebhookGate — Exactly-once webhook side effects",
  description:
    "WebhookGate guarantees your webhook handlers execute once — and only once. No duplicate charges. No double emails. No fragile idempotency logic.",
  metadataBase: new URL("https://webhookgate.com"),
  openGraph: {
    title: "WebhookGate — Exactly-once webhook side effects",
    description:
      "WebhookGate guarantees your webhook handlers execute once — and only once.",
    url: "https://webhookgate.com",
    siteName: "WebhookGate",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
