// src/components/FadeInOnScroll.tsx
"use client"; // This directive is important for client-side components in Next.js 13+

import React, { useRef, useEffect, useState } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string; // Optional for adding extra styling to the wrapper div
  threshold?: number; // How much of the element needs to be visible to trigger (0 to 1)
  delay?: string; // Tailwind delay class, e.g., 'delay-100', 'delay-300'
  duration?: string; // Tailwind duration class, e.g., 'duration-500', 'duration-1000'
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Optional slide direction
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  className,
  threshold = 0.2, // Default: 20% of the element must be visible
  delay = 'delay-0',
  duration = 'duration-1000', // Default: 1 second animation
  direction = 'none',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to true if it's intersecting
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        // If you want it to re-animate every time it scrolls into view, remove the disconnect below
        // For a one-time animation, it's better to disconnect
        if (entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      {
        root: null, // viewport as the root
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]); // Re-run effect if threshold changes

  const getTranslateClass = () => {
    switch (direction) {
      case 'up': return isVisible ? 'translate-y-0' : 'translate-y-16';
      case 'down': return isVisible ? 'translate-y-0' : '-translate-y-16';
      case 'left': return isVisible ? 'translate-x-0' : '-translate-x-16';
      case 'right': return isVisible ? 'translate-x-0' : 'translate-x-16';
      default: return ''; // No translation
    }
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-in-out
        ${duration}
        ${delay}
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${getTranslateClass()}
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;