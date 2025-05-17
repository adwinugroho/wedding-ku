"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-xs uppercase tracking-wider">Days</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs uppercase tracking-wider">Hours</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs uppercase tracking-wider">Minutes</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  );
}
