import Link from "next/link";
import React from "react";

export default function App() {
  return (
    <main className="flex z-10 flex-col items-center justify-between" style={{backgroundColor: "transparent",position: "absolute", top: "0", left: "0", right: "0", bottom: "0"}}>
      <nav className="nav">
        <Link href="/" className="sitename"><i className="fa-solid fa-house"></i></Link>
        <Link href="/about" className="menu">About</Link>
        <Link href="/work" className="menu">Work</Link>
        <Link href="/social" className="menu">Social</Link>
        <Link href="/contact" className="menu">Contact</Link>
      </nav></main>
  );
}
