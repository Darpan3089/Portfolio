"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function SectionIndicator() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 items-center"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Jump to ${label} section`}
            title={label}
            className="group flex items-center gap-2"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? "20px" : "6px",
                height: "2px",
                backgroundColor: isActive
                  ? "var(--accent)"
                  : "var(--border)",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
