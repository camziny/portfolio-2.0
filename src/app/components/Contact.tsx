"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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
          if (form.current) form.current.reset();
        })
        .catch((error) => {
          toast.error("Failed to send the message, please try again.");
          console.error("Failed to send email:", error);
        });
    } else {
      toast.error("Internal error. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          Have a project in mind? Let&apos;s talk.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-gray-800 
                     border border-gray-200 dark:border-gray-700
                     focus:border-cyan-500 dark:focus:border-cyan-400 
                     focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400
                     text-gray-900 dark:text-gray-100 text-sm
                     transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-gray-800 
                     border border-gray-200 dark:border-gray-700
                     focus:border-cyan-500 dark:focus:border-cyan-400 
                     focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400
                     text-gray-900 dark:text-gray-100 text-sm
                     transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-2.5 px-4 rounded-lg
                   bg-gray-900 dark:bg-white
                   hover:bg-gray-800 dark:hover:bg-gray-100
                   text-white dark:text-gray-900 
                   text-sm font-medium
                   transition-colors"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
