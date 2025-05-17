import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "How to route to different pages.",
};

export default function MarketingLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
