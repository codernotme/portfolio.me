'use client';
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent("New message from contact form");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    return `mailto:codernotme@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <form className="flex flex-col contact-form">
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="Name"
        placeholder="Enter your name"
        variant="bordered"
        className="max-w-md"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
        placeholder="Enter your email"
        variant="bordered"
        className="max-w-md"
        isRequired={true}
      />
      <Input
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        label="Message"
        placeholder="Enter your message"
        variant="bordered"
        className="max-w-md"
      />
      <Button
        as="a"
        href={generateMailtoLink()}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        className="max-w-md"
      >
        Submit
      </Button>
    </form>
    </main>
  );
}
