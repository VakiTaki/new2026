import React, { useEffect, useState } from "react";
import { EVENT_TIMESTAMP } from "../data/content";

type TimeLeft = {
  done: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function useCountdown(target: number): TimeLeft {
  const calc = () => {
    const now = Date.now();
    const diff = Math.max(target - now, 0);
    const totalSeconds = Math.floor(diff / 1000);
    return {
      done: diff === 0,
      days: Math.floor(totalSeconds / (3600 * 24)),
      hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  };

  const [time, setTime] = useState<TimeLeft>(calc);

  useEffect(() => {
    const id = window.setInterval(() => setTime(calc()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function Countdown() {
  const time = useCountdown(EVENT_TIMESTAMP);

  if (time.done) {
    return (
      <div className="card">
        <h3>Вечер начинается прямо сейчас</h3>
        <p style={{ margin: 0, color: "#fdf7ec" }}>
          Отсчёт завершён — встречаемся в Lambic Collection!
        </p>
      </div>
    );
  }

  return (
    <div className="countdown" aria-label="Обратный отсчёт до события">
      {[
        { label: "Дней", value: time.days },
        { label: "Часов", value: time.hours },
        { label: "Минут", value: time.minutes },
        { label: "Секунд", value: time.seconds },
      ].map((item) => (
        <div key={item.label} className="countdown-tile">
          <strong>{String(item.value).padStart(2, "0")}</strong>
          <span className="countdown-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
