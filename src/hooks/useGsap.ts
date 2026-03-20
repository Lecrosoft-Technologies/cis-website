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
      tl.fromTo(".hero-badge", { y: 30, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.6 })
        .fromTo(".hero-title-line", { y: 80, opacity: 0, rotateX: 40 }, { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.12 }, "-=0.3")
        .fromTo(".hero-desc", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".hero-buttons", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-image-frame", { scale: 0.7, opacity: 0, rotate: -5 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" }, "-=0.8")
        .fromTo(".hero-image-frame-2", { scale: 0.7, opacity: 0, rotate: 5 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" }, "-=1")
        .fromTo(".hero-float", { y: 30, opacity: 0, scale: 0.5 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(2)" }, "-=0.6");

      // Continuous floating animations
      gsap.to(".hero-image-frame", { y: -12, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hero-image-frame-2", { y: 10, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
      gsap.to(".hero-float-card", { y: -8, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
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

export const useGsapParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".gsap-parallax");
    els.forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset.speed || "0.3");
      gsap.to(el, {
        yPercent: -30 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return ref;
};

export const useGsapTextReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".gsap-text-reveal");
    els.forEach((el) => {
      gsap.fromTo(el,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return ref;
};

export const useGsapScale = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".gsap-scale");
    gsap.fromTo(els,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.8, stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return ref;
};

export const useGsapHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const track = ref.current.querySelector(".hscrll-track") as HTMLElement;
    if (!track) return;
    const totalWidth = track.scrollWidth - ref.current.offsetWidth;
    gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
      },
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
  return ref;
};
