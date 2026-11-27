"use client";

import { useEffect } from "react";

/** Subtle, staggered scroll-reveal for editorial text in the Langway case. */
export default function LangwayTextMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".langway-page");
    if (!root || !("IntersectionObserver" in window)) return;

    root.classList.add("langway-text-motion-ready");
    const selector = [
      ".langway-intro-copy h1",
      ".langway-intro-copy p",
      ".langway-facts > div",
      ".langway-section-label",
      ".langway-section-content h2",
      ".langway-section-content h3",
      ".langway-section-content > p",
      ".langway-flow-heading p",
      ".langway-problem-grid article",
      ".langway-solution-grid article",
      ".langway-screen-caption",
      ".langway-phone-caption",
      ".langway-mobile-note",
      ".langway-result-stats > div",
    ].join(",");

    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
    const siblingCounters = new Map<Element, number>();
    elements.forEach((element) => {
      if (element.closest(".langway-cover, .langway-phone-frame")) return;
      const parent = element.parentElement;
      const index = parent ? siblingCounters.get(parent) ?? 0 : 0;
      if (parent) siblingCounters.set(parent, index + 1);
      element.style.setProperty("--text-reveal-delay", `${Math.min(index * 75, 300)}ms`);
      element.classList.add("langway-text-reveal");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    elements.forEach((element) => {
      if (element.classList.contains("langway-text-reveal")) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
