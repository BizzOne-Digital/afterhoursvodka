"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const selector =
      ".reveal:not(.in-view), .reveal-scale:not(.in-view), .reveal-left:not(.in-view), .reveal-right:not(.in-view)";

    let observer: IntersectionObserver | null = null;

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
    }

    const observe = () => {
      const targets = document.querySelectorAll(selector);
      targets.forEach((el) => observer?.observe(el));
    };

    observe();
    const timer = setTimeout(observe, 300);

    // Safety net: some mobile/in-app browsers can fail to fire IntersectionObserver
    // callbacks reliably (or it's unsupported). Force-reveal anything still hidden
    // after a short delay so content never gets stuck invisible.
    const fallback = setTimeout(() => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("in-view");
        observer?.unobserve(el);
      });
    }, 2500);

    return () => {
      observer?.disconnect();
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
