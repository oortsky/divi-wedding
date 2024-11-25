"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SplashScreen({ onComplete }) {
  const splashRef = useRef(null);

  useEffect(() => {
    const animation = gsap.timeline({
      defaults: { duration: 1, ease: "power3.inOut" },
      onComplete: onComplete
    });

    animation.fromTo(
      splashRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -50, delay: 1.5 }
    );

    return () => {
      animation.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 flex items-center justify-center bg-primary-blue text-white"
    ></div>
  );
}
