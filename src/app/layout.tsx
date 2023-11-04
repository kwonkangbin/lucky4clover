import "@/styles/global.css";
import { Metadata } from "next";
import RecoilRootProvider from "./recoilRootProvider";
import QueryProvider from "./queryProvider";

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
    <html lang="ko">
      <body className="min-h-screen">
        <RecoilRootProvider>
          <QueryProvider>{children}</QueryProvider>
        </RecoilRootProvider>
        <script
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          async
        />
      </body>
    </html>
  );
}
