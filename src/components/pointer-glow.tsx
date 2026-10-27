"use client";

import { useEffect } from "react";

// Feeds the pointer position into any `.glow-card` under the cursor so its
// CSS radial glow can follow the mouse. One listener for the whole page.
export function PointerGlow() {
  useEffect(() => {
    let frame = 0;

    const handleMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const card =
          e.target instanceof Element
            ? e.target.closest<HTMLElement>(".glow-card")
            : null;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
