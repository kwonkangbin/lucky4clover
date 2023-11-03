import "@/styles/global.css";
import type { Metadata } from "next";
import RecoilRootProvider from "./recoilRootProvider";

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
      <body className="min-h-screen">
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
