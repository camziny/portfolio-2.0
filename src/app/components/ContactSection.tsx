"use client";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { Separator } from "@/components/ui/separator";

export default function ContactSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <Separator className="mb-16" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </div>
    </section>
  );
}
