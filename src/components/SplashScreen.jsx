// components/SplashScreen.js
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SplashScreen({ onComplete }) {
  const splashRef = useRef(null);
  const textRef = useRef(null); // Refs untuk elemen teks

  useEffect(() => {
    // Timeline untuk animasi utama splash screen
    const animation = gsap.timeline({
      defaults: { duration: 1, ease: "power3.inOut" },
      onComplete: onComplete // Memanggil fungsi onComplete setelah animasi selesai
    });

    // Animasi masuk dan keluar untuk splash screen
    animation.fromTo(
      splashRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -50, delay: 1.5 }
    );

    // Membuat timeline untuk mengubah teks
    const blurbs = ["Selamat", "Datang", "Di", "Pernikahan", "Kami"];
    const tl = gsap.timeline();
    const delay = 0.25;

    // Mengganti teks di dalam elemen
    blurbs.forEach((blurb, i) => {
      tl.add(() => {
        if (textRef.current) {
          textRef.current.innerText = blurb;
        }
      }, i * delay);
    });

    // Cleanup ketika komponen di-unmount
    return () => {
      animation.kill();
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 flex items-center justify-center bg-primary-blue text-white"
    >
      <div ref={textRef} className="text text-5xl text-center font-bold">Selamat</div>
    </div>
  );
}
