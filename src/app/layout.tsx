"use client";
import "./globals.css";
import Navbar from "@/component/common/navbar";
import Footer from "@/component/common/footer";
import Provider from "@/app/Provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <Navbar/>
        {children}
        <Footer/>
        </Provider>
        </body>
    </html>
  );
}
