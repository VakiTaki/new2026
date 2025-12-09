import React from "react";
import { EVENT_DATE_TEXT, venueBullets } from "../data/content";

export function Venue() {
  return (
    <section id="venue">
      <div className="section-header">
        <h2 className="section-title">Место встречи — Lambic Collection</h2>
        {/* <span className="badge">
          {EVENT_DATE_TEXT} · 2-я Звенигородская, 12, стр. 1
        </span> */}
      </div>
      <div className="cards">
        <div className="card">
          <h3>Ресторан Lambic Collection у метро «Улица 1905 года» в Москве</h3>
          <p>
            Новый флагман — Lambic Collection в историческом пространстве
            премиального квартала Lucky. Элегантный интерьер с бордовыми
            акцентами, натуральным деревом и открытой кухней создаёт атмосферу
            уюта и приватности — идеальную для деловых встреч и отдыха. Гордость
            Lambic Collection — масштабная карта из 100+ сортов бельгийского
            пива, от классики до редких этикеток. В меню — бельгийские
            специалитеты: мидии, картофельные вафли, фламандская говядина, а
            также эксклюзивные блюда от шефа Ивана Негутарова, переосмысляющие
            традиционные вкусы в современном стиле. Lambic Collection — место,
            где коллекционируют вкусы.
          </p>
          {/* <ul className="list">
            {venueBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul> */}
        </div>

        <div
          className="card image-card"
          style={{
            background:
              "url('/assets/vhod.webp') center/cover no-repeat, var(--card)",
          }}
        >
          {/* <div
            style={{
              backdropFilter: "blur(8px)",
              background:
                "linear-gradient(145deg, rgba(12,24,37,0.72), rgba(82,8,18,0.7))",
              borderRadius: "16px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.12)",
              minHeight: "100%",
            }}
          >
            <h3>Организационные детали</h3>
            <ul className="list">
              <li>Время встречи: 25 декабря 2025, 17:00.</li>
              <li>
                Адрес: Lambic Collection, 2-я Звенигородская ул., 12, стр. 1,
                Москва.
              </li>
              <li>
                Дресс-код: Опрятный casual — комфортно, но аккуратно для фото.
              </li>
            </ul>
            <a
              className="btn ghost"
              href="#map"
              style={{ marginTop: "10px", display: "inline-flex" }}
            >
              Открыть блок проезда
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
