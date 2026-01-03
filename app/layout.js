import "../styles/globals.css";

export const metadata = {
  title: "WebhookGate — Exactly-once webhook side effects",
  description: "Drop-in SDK that guarantees exactly-once webhook side effects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
