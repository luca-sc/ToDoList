import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialHours: number;
  isFrozen: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialHours,
  isFrozen,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialHours * 3600);

  useEffect(() => {
    if (timeLeft <= 0 || isFrozen) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isFrozen]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return <span>{formatTime(timeLeft)}</span>;
};

export default CountdownTimer;
