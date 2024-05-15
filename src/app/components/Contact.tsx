"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    if (form.current && serviceId && templateId && userId) {
      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then((response) => {
          toast.success("Message sent successfully!");
          console.log("Email successfully sent:", response);
        })
        .catch((error) => {
          toast.error("Failed to send the message, please try again.");
          console.error("Failed to send email:", error);
        });
    } else {
      console.error(
        "EmailJS credentials are undefined or form is not available."
      );
      toast.error("Internal error. Please try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 md:p-12 my-10 bg-white bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Contact Me
        </h1>
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="px-4 py-2 border rounded-md text-gray-800 bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:ring-cyan-500 focus:border-cyan-500"
        />
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="px-4 py-2 border rounded-md text-gray-800 bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:ring-cyan-500 focus:border-cyan-500"
        ></textarea>
        <button
          type="submit"
          className="py-2 px-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md shadow"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
