import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Jika waktu telah berlalu
        clearInterval(countdownInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <div className="grid grid-flow-col gap-2 text-center auto-cols-max justify-center items-center my-10">
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary-blue rounded-full text-white">
        <span className="countdown text-base">
          <span style={{ "--value": timeLeft.days }}></span>
        </span>
        hari
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary-blue rounded-full text-white">
        <span className="countdown text-base">
          <span style={{ "--value": timeLeft.hours }}></span>
        </span>
        jam
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary-blue rounded-full text-white">
        <span className="countdown text-base">
          <span style={{ "--value": timeLeft.minutes }}></span>
        </span>
        menit
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary-blue rounded-full text-white">
        <span className="countdown text-base">
          <span style={{ "--value": timeLeft.seconds }}></span>
        </span>
        detik
      </div>
    </div>
  );
};

export default Countdown;
