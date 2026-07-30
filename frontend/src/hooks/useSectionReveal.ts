import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Fades and staggers the direct children of the returned ref in on scroll.
 * No-ops (children stay visible, no inline styles applied) when the user
 * prefers reduced motion.
 */
export function useSectionReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!ref.current) return;
        gsap.from(ref.current.children, {
          opacity: 0,
          y: 24,
          stagger: 0.08,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          },
        });
      });
    },
    { scope: ref }
  );

  return ref;
}
