"use client";
import "./globals.scss";
import Navbar from "@/component/common/navbar";
import Footer from "@/component/common/footer";
import Provider from "@/app/Provider";
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
        <script src="https://kit.fontawesome.com/be9855a3b3.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
