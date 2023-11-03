"use client";

import "@/styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RecoilRootProvider from "./recoilRootProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <title>마인드메이트</title>
      </head>
      <body className="min-h-screen">
        <RecoilRootProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
