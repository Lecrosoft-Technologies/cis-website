import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeUp = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".gsap-fade-up");
    gsap.fromTo(els,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return ref;
};

export const useGsapStagger = (selector: string = ".gsap-stagger") => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(selector);
    gsap.fromTo(els,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return ref;
};

export const useGsapHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
        .fromTo(".hero-desc", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
        .fromTo(".hero-buttons", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-image", { x: 80, opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, duration: 1 }, "-=0.6")
        .fromTo(".hero-image-2", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(".hero-float", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 }, "-=0.4");
    }, ref.current);
    return () => ctx.revert();
  }, []);
  return ref;
};

export const useGsapCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const counters = ref.current.querySelectorAll(".counter-num");
    counters.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0");
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target, duration: 2, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => { el.textContent = Math.round(obj.val) + "+"; },
      });
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return ref;
};
