import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Referensi untuk elemen-elemen yang akan dianimasikan
  const homeH2Ref = useRef(null);
  const homeH3Ref = useRef(null);
  const homePRef = useRef(null);
  const profileRef1 = useRef(null);
  const profileRef2 = useRef(null);
  const heartRef = useRef(null);

  useEffect(() => {
    // Animasi untuk judul utama
    gsap.fromTo(
      homeH2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: homeH2Ref.current,
          start: "top 80%", // memulai animasi ketika 80% elemen masuk ke viewport
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animasi untuk sub-judul dan teks
    gsap.fromTo(
      [homeH3Ref.current, homePRef.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // jeda waktu animasi di antara elemen
        ease: "power3.out",
        scrollTrigger: {
          trigger: homeH3Ref.current,
          start: "top 90%",
        },
      }
    );

    // Animasi untuk profil pasangan dan ikon hati
    gsap.fromTo(
      [profileRef1.current, profileRef2.current, heartRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: profileRef1.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="bg-cover bg-center min-h-screen -mt-16 py-20"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="container mx-auto p-6">
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <h2
              ref={homeH2Ref}
              className="text-primary-blue font-sacramento text-5xl font-bold mb-6"
            >
              Acara Pernikahan
            </h2>
            <h3
              ref={homeH3Ref}
              className="text-gray-700 text-sm mb-6"
            >
              Diselenggarakan pada 26 Januari 2025 di Kab. Bekasi, Jawa Barat.
            </h3>
            <p
              ref={homePRef}
              className="text-gray-600 text-sm"
            >
              Oleh karena itu, dengan segala hormat, kami bermaksud untuk
              mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan
              kami.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-20 text-center space-y-8 md:space-y-0 md:space-x-20">
          <div
            ref={profileRef1}
            className="w-full md:w-1/2 text-center profile"
          >
            <h3 className="text-5xl text-indigo-950 font-sacramento font-semibold">
Nasrudin <br /> (Udin/Ndin)
            </h3>
            <p className="text-base text-gray-500 uppercase font-light tracking-wide mt-2">
              Putra ke-2 dari Alm. Bapak Jahadi (Koting) <br /> dan <br /> Ibu
              Paris Susilawati
            </p>
          </div>

          <span
            ref={heartRef}
            className="heart py-8 profile"
          >
            <i className="text-5xl bi bi-heart-fill text-red-500 text-shadow"></i>
          </span>

          <div
            ref={profileRef2}
            className="w-full md:w-1/2 text-center profile"
          >
            <h3 className="text-5xl text-indigo-950 font-sacramento font-semibold">
              Dewi Octaviani <br /> (Vivi)
            </h3>
            <p className="text-base text-gray-500 uppercase font-light tracking-wide mt-2">
              Putri ke-2 dari Bapak Edi Subroto <br /> dan <br /> Ibu Suharsi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;