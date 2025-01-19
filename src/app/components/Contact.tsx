"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl mx-auto p-6 sm:p-8 my-10"
    >
      <div className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg border border-cyan-100 dark:border-cyan-900/50 overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-center mb-8">
            Let&apos;s Get in Touch
          </h1>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 
                         border border-gray-200 dark:border-gray-600
                         focus:border-cyan-500 dark:focus:border-cyan-400 
                         focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-800
                         text-gray-900 dark:text-gray-100
                         transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 
                         border border-gray-200 dark:border-gray-600
                         focus:border-cyan-500 dark:focus:border-cyan-400 
                         focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-800
                         text-gray-900 dark:text-gray-100
                         transition-colors duration-200 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg
                       bg-gradient-to-r from-cyan-500 to-blue-600 
                       hover:from-cyan-600 hover:to-blue-700
                       dark:from-cyan-600 dark:to-blue-700
                       dark:hover:from-cyan-500 dark:hover:to-blue-600
                       text-white font-medium
                       transform transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:focus:ring-cyan-800
                       shadow-md hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
