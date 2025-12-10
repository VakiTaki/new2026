import React from "react";
import { Countdown } from "./Countdown";
import { scrollToId } from "../utils";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__content">
        <span className="eyebrow">Новогодний корпоратив 2026</span>
        <h1>Главное событие года — тёплый вечер в кругу команды</h1>
        <p className="lead">
          25 декабря 2025 года в 17:00 встречаемся, чтобы подвести итоги,
          порадоваться победам и красиво войти в новый год.
        </p>
        <div className="pill">
          <span className="dot" aria-hidden="true" />
          <span>Дресс-код:casual</span>
        </div>
        <Countdown />
        <div className="cta-row">
          <a
            className="btn primary"
            href="#map"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("map");
            }}
          >
            Как добраться
          </a>
          <a
            className="btn ghost"
            href="#venue"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("venue");
            }}
          >
            О ресторане
          </a>
          <a
            className="btn primary"
            href="#registration"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("registration");
            }}
          >
            Регистрация
          </a>
        </div>
      </div>
    </header>
  );
}
