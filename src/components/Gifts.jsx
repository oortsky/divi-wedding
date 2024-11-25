import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gifts = () => {
  // Membuat ref untuk elemen-elemen yang akan dianimasikan
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const bankInfoRef = useRef(null);

  useEffect(() => {
    // Animasi masuk untuk seluruh section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // memulai animasi saat 80% dari elemen masuk viewport
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animasi untuk judul
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%", // memulai animasi saat 90% dari elemen masuk viewport
        },
      }
    );

    // Animasi untuk teks deskripsi
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
        },
      }
    );

    // Animasi untuk informasi bank
    gsap.fromTo(
      bankInfoRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bankInfoRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <section id="gifts" className="pb-16 pt-28 p-6 bg-white relative" ref={sectionRef}>
      <img
        src="/images/flowers.png"
        alt="Bunga Atas"
        className="absolute left-0 top-0 w-full h-48 opacity-70"
        style={{
          zIndex: 1,
          transform: "scale(-1)", // flip horizontal
        }}
      />

      <div className="container mx-auto relative" style={{ zIndex: 2 }}>
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <span
              className="uppercase text-gray-500 text-sm tracking-wider block mb-4"
              ref={titleRef}
            >
              ungkapan tanda kasih
            </span>
            <h2
              className="text-primary-blue font-sacramento text-5xl font-bold"
              ref={titleRef}
            >
              Kirim Hadiah
            </h2>
            <p
              className="text-sm font-light text-gray-500 mt-4"
              ref={textRef}
            >
              Kehadiran Anda adalah hadiah terindah bagi kami. Jika ingin
              memberikan hadiah, dapat dikirim ke rekening di bawah. Terima
              kasih!
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-full max-w-md">
            <div
              className="border border-gray-300 rounded-lg p-5 text-center shadow-md"
              ref={bankInfoRef}
            >
              <ul>
                <li className="py-4">
                  <div className="text-gray-500 font-semibold text-base">
                    Permata Bank
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    9927693019 a.n. NASRUDIN
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;