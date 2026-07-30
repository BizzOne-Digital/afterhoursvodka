"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const observe = () => {
      const targets = document.querySelectorAll(
        ".reveal:not(.in-view), .reveal-scale:not(.in-view), .reveal-left:not(.in-view), .reveal-right:not(.in-view)"
      );
      targets.forEach((el) => observer.observe(el));
    };

    observe();
    const timer = setTimeout(observe, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
