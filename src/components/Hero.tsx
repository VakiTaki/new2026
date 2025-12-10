import React from "react";
import { Countdown } from "./Countdown";
import { scrollToId } from "../utils";
import { Shirt } from "lucide-react";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__content">
        <span className="eyebrow">Новогодний корпоратив 2026</span>
        <h1>
          Главное событие года - теплый вечер в кругу команды в новом офисе!
        </h1>
        <p className="lead">
          <span
            style={{ fontWeight: "bold", color: "white", fontSize: "20px" }}
          >
            25 декабря 2025 года в 17:00
          </span>{" "}
          встречаемся в новом офисе Лаборатории СОТА в бизнес центре Lucky,
          чтобы подвести итоги, порадоваться победам и провести вечер в душевной
          компании.
          {/* <span
            style={{ fontWeight: "bold", color: "white", fontSize: "20px" }}
          >
            Новый 2026 год.
          </span> */}
        </p>
        <div className="pill_new">
          <Shirt />
          <span>Дресс-код:casual</span>
        </div>
        <Countdown />
        <div className="cta-row">
          <a
            className="btn ghost "
            href="#venue"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("venue");
            }}
          >
            Место встречи
          </a>
          <a
            className="btn ghost"
            href="#map"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("map");
            }}
          >
            Как добраться
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
