"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
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
        className="btn-primary w-full"
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

const directLinks = [
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
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="gradient-text">together</span>.
            </>
          }
          description={
            <>
              Hiring for a frontend role? I&apos;d love to hear about the team
              and what you&apos;re building. I reply within 24 hours.
            </>
          }
        />

        <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
          <FadeUp delay={0.1}>
            <div className="glass rounded-2xl p-6 md:p-8">
              <ContactForm />
            </div>
          </FadeUp>

          {/* Direct links */}
          <FadeUp delay={0.2}>
            <div className="space-y-3">
              <p
                className="text-xs font-mono uppercase tracking-widest font-semibold mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Or reach me directly
              </p>

              {directLinks.map(({ Icon, label, href, ariaLabel }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto") ? undefined : "noopener noreferrer"
                  }
                  aria-label={ariaLabel}
                  className="glass glow-card flex items-center gap-3 p-4 rounded-2xl"
                >
                  <span className="icon-badge w-9! h-9! rounded-lg! shrink-0" aria-hidden="true">
                    <Icon width={16} height={16} />
                  </span>
                  <span
                    className="text-sm font-medium truncate"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                </Link>
              ))}

              <div
                className="glass rounded-2xl p-5 mt-6"
                style={{
                  borderColor: "var(--accent-ring)",
                  backgroundImage:
                    "linear-gradient(135deg, var(--accent-soft), transparent 70%)",
                }}
              >
                <p
                  className="flex items-center gap-2 text-sm font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span className="pulse-dot" aria-hidden="true" />
                  Open to full-time roles
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Based in Vadodara, India · Replies within 24 hours
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
