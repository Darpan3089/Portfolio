"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "tech", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export function SectionIndicator() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    let frame = 0;

    // Active = last section whose top has crossed the viewport's middle.
    // Works for sections of any height and in both scroll directions.
    const update = () => {
      frame = 0;
      const line = window.innerHeight / 2;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Bottom of page: the last section may be too short to reach the middle.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
                background: isActive
                  ? "var(--btn-gradient)"
                  : "var(--border)",
                boxShadow: isActive ? "0 0 10px var(--accent)" : "none",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
