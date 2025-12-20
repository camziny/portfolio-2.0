"use client";
import { motion } from "framer-motion";
import Contact from "./Contact";

export default function ContactSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </section>
  );
}

