import Link from "next/link";
import React from "react";

export default function App() {
  return (
    <main className="flex z-10 background-transparent flex-col items-center justify-between" style={{ background: "transparent" }}>
      <nav className="nav">
        <Link href="/" className="sitename">AB</Link>
        <Link href="/about" className="menu">About</Link>
        <Link href="/work" className="menu">Work</Link>
        <Link href="/social" className="menu">Social</Link>
        <Link href="/contact" className="menu">Contact</Link>
      </nav></main>
  );
}
