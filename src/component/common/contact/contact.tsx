'use client';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css"; // Import CSS for additional styles

const ContactForm = () => {
  const handleSubmit = (values: { name: any; email: any; message: any; }, { setSubmitting, resetForm }: any) => {
    setTimeout(() => {
      // Simulate form submission
      const { name, email, message } = values;
      const subject = encodeURIComponent("New message from contact form");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      window.open(`mailto:codernotme@gmail.com?subject=${subject}&body=${body}`);
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <ToastContainer />
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          message: Yup.string().required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col contact-form">
          <div className="mb-4 input-container">
            <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
            <Field type="text" name="name" id="name" className="input-field" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="mb-4 input-container">
            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
            <Field type="email" name="email" id="email" className="input-field" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="mb-4 input-container">
            <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
            <Field as="textarea" name="message" id="message" className="input-field message-field" />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>
          <Button type="submit" color="primary" className="w-full submit-button">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
