import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    let ease = 0.08;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateScroll = () => {
      targetScroll = window.pageYOffset;
      currentScroll = lerp(currentScroll, targetScroll, ease);
      
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.transform = `translateY(${-currentScroll}px)`;
      }

      requestAnimationFrame(updateScroll);
    };

    // Start only on desktop for better performance
    if (window.innerWidth > 768) {
      document.body.style.height = scrollContainerRef.current?.scrollHeight + 'px';
      updateScroll();
    }

    return () => {
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="fixed top-0 left-0 w-full will-change-transform"
    >
      {children}
    </div>
  );
};

export default SmoothScroll;