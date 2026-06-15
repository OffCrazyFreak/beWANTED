"use client";

import { useState, useEffect, useRef, RefObject } from "react";

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
): { ref: RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
