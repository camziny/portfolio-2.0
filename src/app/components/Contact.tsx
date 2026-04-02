"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
        .then(() => {
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
      <div className="mb-6">
        <h2 className="text-lg font-medium text-foreground">
          Get in Touch
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Have a project in mind? Let&apos;s talk.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Your message..."
            className="resize-none"
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
