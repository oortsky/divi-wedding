import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Countdown from "@/components/Countdown";

const Hero = () => {
  const [scrollLocked, setScrollLocked] = useState(true);
  const [nama, setNama] = useState("");
  const [pronoun, setPronoun] = useState("Bapak/Ibu/Saudara/i");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const searchParams = useSearchParams();

  const playAudio = async () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.warn("Audio play failed", error);
      }
    }
  };

  useEffect(() => {
    const n = searchParams.get("n");
    const p = searchParams.get("p");

    setNama(n || "");
    setPronoun(p || "Bapak/Ibu/Saudara/i");
  }, [searchParams]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedScrollLocked = localStorage.getItem("scrollLocked");
      setScrollLocked(storedScrollLocked !== "false");
    }
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (scrollLocked) {
      disableScroll(rootElement);
    } else {
      enableScroll(rootElement);
      localStorage.setItem("scrollLocked", "false");
      playAudio();
    }
    return () => enableScroll(rootElement);
  }, [scrollLocked]);

  const disableScroll = element => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
    element.style.scrollBehavior = "auto";
  };

  const enableScroll = element => {
    window.onscroll = null;
    element.style.scrollBehavior = "smooth";
  };

  const toggleAudio = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.warn("Audio play failed", error);
        }
      }
    }
  };

  const handleUnlockScroll = () => {
    setScrollLocked(false);
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    playAudio();
  };

  return (
    <section
      id="hero"
      className="relative w-screen h-screen p-6 mx-auto text-center flex justify-center items-center text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center grayscale -z-10"
        style={{ backgroundImage: `url('/images/bg-prewed.jpg')` }}
      ></div>
      <main>
        <h4 className="text-base font-normal text-shadow mb-4">
          Kepada{" "}
          <span>
            {pronoun} {nama}
          </span>
        </h4>
        <h1 className="text-6xl font-sacramento text-shadow">
          Nasrudin & Dewi Octaviani
        </h1>
        <p className="text-xs text-shadow">
          Akan melangsungkan resepsi pernikahan dalam:
        </p>
        <Countdown targetDate="2025-01-26T09:00:00" />
        <button
          onClick={handleUnlockScroll}
          className="btn btn-sm mt-4 shadow text-primary-blue hover:text-white hover:bg-primary-blue hover:border-primary-blue"
        >
          Lihat Undangan
        </button>
      </main>

      {!scrollLocked && (
        <div
          className="fixed bottom-6 right-6 cursor-pointer flex items-center justify-center z-40 text-gray-700"
          onClick={toggleAudio}
        >
          <i
            className={`text-4xl ${isPlaying ? "bi-pause-circle" : "bi-disc"}`}
          ></i>
        </div>
      )}

      <audio ref={audioRef} id="song" src="/audio/song.mp3" loop />
    </section>
  );
};

export default Hero;
