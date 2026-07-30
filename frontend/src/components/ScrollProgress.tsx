import { useState } from "react";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => trigger.kill();
  }, []);

  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 z-[60] h-0.5">
      <div
        className="h-full bg-primary origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
