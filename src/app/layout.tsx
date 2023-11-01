import "@/styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마인드메이트",
  description: "mindmate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
