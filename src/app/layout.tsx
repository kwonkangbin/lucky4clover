"use client";

import "@/styles/global.css";
import type { Metadata } from "next";
import RecoilRootProvider from "./recoilRootProvider";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className="min-h-screen">
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
