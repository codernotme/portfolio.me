import React from "react";
import ContactForm from "@/component/common/contact/contact";
export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between contact">

      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div style={{zIndex: 999 }}>
      <h1 className="keep">&bull; Contact Form &bull;</h1>
        <ContactForm /></div>
      </div >
    </main>
  );
}