"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/motion-wrapper";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
      aria-label="Contact form"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--text-muted)" }}
        >
          Name
        </label>
        <input
          {...register("name")}
          id="contact-name"
          type="text"
          placeholder="Your name"
          className="input-field"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-xs mt-1.5"
            style={{ color: "var(--error)" }}
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--text-muted)" }}
        >
          Email
        </label>
        <input
          {...register("email")}
          id="contact-email"
          type="email"
          placeholder="your@email.com"
          className="input-field"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-xs mt-1.5"
            style={{ color: "var(--error)" }}
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            Message
          </label>
          <span
            className="text-xs font-mono"
            style={{
              color: messageLength > 1800 ? "var(--error)" : "var(--text-muted)",
            }}
          >
            {messageLength}/2000
          </span>
        </div>
        <textarea
          {...register("message")}
          id="contact-message"
          rows={5}
          placeholder="Tell me about your project..."
          className="input-field"
          style={{ minHeight: "120px" }}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-xs mt-1.5"
            style={{ color: "var(--error)" }}
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: "var(--accent)",
          color: "#fff",
        }}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        <FadeUp>
          <p
            className="font-mono text-xs mb-3 flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s build something together.
          </h2>
          <p
            className="text-base mb-12 max-w-md"
            style={{ color: "var(--text-muted)" }}
          >
            Have a project in mind? Book a free consult and let&apos;s see if
            it&apos;s a fit. I reply within 24 hours.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>

          {/* Direct links */}
          <FadeUp delay={0.2}>
            <div className="space-y-4">
              <p
                className="text-xs font-mono uppercase tracking-widest font-semibold mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                Or reach me directly
              </p>

              {[
                {
                  Icon: Mail,
                  label: "darpanpatel30899@gmail.com",
                  href: "mailto:darpanpatel30899@gmail.com",
                  ariaLabel: "Send email to Darpan",
                },
                {
                  Icon: GithubIcon,
                  label: "github.com/Darpan3089",
                  href: "https://github.com/Darpan3089",
                  ariaLabel: "GitHub profile",
                },
                {
                  Icon: LinkedinIcon,
                  label: "linkedin.com/in/darpan-patel",
                  href: "https://www.linkedin.com/in/darpan-patel-367610169/",
                  ariaLabel: "LinkedIn profile",
                },
              ].map(({ Icon, label, href, ariaLabel }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto") ? undefined : "noopener noreferrer"
                  }
                  aria-label={ariaLabel}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background = "var(--surface-elevated)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--surface)";
                  }}
                >
                  <Icon
                    style={{ color: "var(--accent)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-medium truncate"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
