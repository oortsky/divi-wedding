import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  // Define refs for elements to animate
  const infoSectionRef = useRef(null);
  const infoTitleRef = useRef(null);
  const infoDescriptionRef = useRef(null);
  const mapRef = useRef(null);
  const cardAkadRef = useRef(null);
  const cardResepsiRef = useRef(null);

  const locationUrl = [
    {
      link: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=R42Q%252BGCR%2BSaung%2Byanta%2BKi%2Babrag%2C%2BJl.%2BKtr.%2BDesa%2BBanjarsari%2C%2BBanjarsari%2C%2BKec.%2BSukatani%2C%2BKabupaten%2BBekasi%2C%2BJawa%2BBarat%2B17630%2F%40-6.1986193%2C107.1385164%2C15z%2Fdata%3D!4m6!3m5!1s0x2e6987007d72800b%3A0x3337417d24748ff0!8m2!3d-6.1986193!4d107.1385164!16s%252Fg%252F11vk5n25p8&zoom=17&maptype=satellite"
    },
    {
      link: "https://maps.app.goo.gl/Jook48PZ6UVAvm3o8"
    }
  ];

  useEffect(() => {
    // Animating the whole section entry using fromTo
    gsap.fromTo(
      infoSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animating title and description with stagger using fromTo
    gsap.fromTo(
      [infoTitleRef.current, infoDescriptionRef.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3, // Adjusted stagger
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoTitleRef.current,
          start: "top 90%"
        }
      }
    );

    // Animating map using fromTo
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2, // Slightly longer duration
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 75%" // Adjusted start position
        }
      }
    );

    // Animating event cards (akad & resepsi) using fromTo
    gsap.fromTo(
      [cardAkadRef.current, cardResepsiRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2, // Increased duration for a smoother effect
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardAkadRef.current,
          start: "top 85%"
        }
      }
    );
  }, []);

  return (
    <section
      id="info"
      className="p-6 bg-white py-20 relative"
      ref={infoSectionRef}
    >
      {/* Decorative images */}
      <img
        src="/images/flowers_three.png"
        alt="Bunga Kiri Bawah"
        className="absolute left-0 bottom-0 w-48 h-48 opacity-80"
        style={{ zIndex: 1 }}
      />
      <img
        src="/images/flowers_three.png"
        alt="Bunga Kanan Atas"
        className="absolute right-0 top-0 w-48 h-48 opacity-80"
        style={{
          zIndex: 1,
          transform: "scale(-1, -1)"
        }}
      />

      <div className="container mx-auto relative" style={{ zIndex: 2 }}>
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <span className="uppercase text-gray-500 text-sm tracking-wider block mb-6">
              seputar info acara
            </span>
            <h2
              ref={infoTitleRef}
              className="text-primary-blue font-sacramento text-5xl font-bold"
            >
              Informasi Acara
            </h2>
            <p
              ref={infoDescriptionRef}
              className="text-sm font-light text-gray-500 mt-6"
            >
              Alamat: Jl. Kantor Desa Banjarsari, Kp. Teriti Buniayu
              RT.002/RW.006, Desa Banjarsari, Kec. Sukatani, Kab. Bekasi
              <br />
              (Rumah Mempelai Pria.)
            </p>

            {/* Map embed */}
            <div
              ref={mapRef}
              className="map w-full h-fit rounded-lg overflow-hidden mt-6 mb-3 shadow-md"
            >
              <iframe
                src={locationUrl[0].link}
                width="100%"
                height="250"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href={locationUrl[1].link}
              target="_blank"
              className="btn w-full max-w-sm shadow-md bg-primary-blue text-white border-primary-blue hover:text-primary-blue hover:bg-white hover:border-white"
            >
              View Maps
            </a>

            <p className="text-sm font-light text-gray-500 mt-6">
              Diharapkan untuk tidak salah alamat dan tanggal. Jika tiba di
              tujuan tanpa tanda pernikahan, mungkin salah jadwal atau lokasi.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-6">
          {/* Akad Nikah Card */}
          <div
            ref={cardAkadRef}
            className="card bg-primary-blue text-white w-full shadow-md mb-5 max-w-md"
          >
            <div className="card-body text-center">
              <h2 className="card-title mx-auto mb-4 uppercase font-semibold">
                Akad Nikah
              </h2>
              <div className="flex justify-center space-x-6">
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-clock text-lg mb-1"></i>
                  <span>09.00 - 10.00</span>
                </div>
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-calendar3 text-lg mb-1"></i>
                  <span>Minggu, 26 Jan 2025</span>
                </div>
              </div>
              <p className="text-xs mt-4">
                Dimohon menjaga kekhidmatan acara akad nikah.
              </p>
            </div>
          </div>

          {/* Resepsi Card */}
          <div
            ref={cardResepsiRef}
            className="card bg-primary-blue text-white w-full shadow-md max-w-md"
          >
            <div className="card-body text-center">
              <h2 className="card-title mx-auto mb-4 uppercase font-semibold">
                Resepsi
              </h2>
              <div className="flex justify-center space-x-6">
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-clock text-lg mb-1"></i>
                  <span>11.00 - selesai</span>
                </div>
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-calendar3 text-lg mb-1"></i>
                  <span>Minggu, 26 Jan 2025</span>
                </div>
              </div>
              <p className="text-xs mt-4">
                Mohon hadir tepat waktu dan menjaga kesopanan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
