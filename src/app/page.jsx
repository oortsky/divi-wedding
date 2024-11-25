"use client";

import { useState, useEffect } from "react";

import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Info from "@/components/Info";
import Rsvp from "@/components/Rsvp";
import Gifts from "@/components/Gifts";
import Footer from "@/components/Footer";

export default function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengubah sensitivitas scroll
    const handleWheel = event => {
      // Mengurangi sensitivitas scroll dengan mengalikan dengan nilai tertentu
      event.preventDefault();
      const scrollAmount = event.deltaY * 0.3; // Angka 0.3 untuk memperlambat scroll
      window.scrollBy(0, scrollAmount); // Mengatur scroll sesuai dengan jumlah yang diinginkan
    };

    // Menambahkan event listener untuk scroll
    window.addEventListener("wheel", handleWheel);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      {!isSplashComplete && (
        <SplashScreen onComplete={() => setIsSplashComplete(true)} />
      )}

      <main
        className={`transition-opacity duration-1000 ${
          isSplashComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />
        <Navbar>
          <Home />
          <Info />
          <Rsvp />
          <Gifts />
          <Footer />
        </Navbar>
      </main>
    </>
  );
}
