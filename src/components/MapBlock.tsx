import { Map } from "lucide-react";
import React from "react";

export function MapBlock() {
  return (
    <section id="map">
      <div className="section-header">
        <h2 className="section-title">Как добраться</h2>
        {/* <span className="badge">Карта будет добавлена позже</span> */}
      </div>
      <div className="map">
        <div className="card">
          <h3>Адрес</h3>
          <p style={{ marginBottom: "10px" }}>
            Lambic Collection, 2-я Звенигородская ул., 12, стр. 1, Москва
          </p>
          <ul className="list">
            <li>Метро: ближайшие станция — Улица 1905 года</li>
            <li>Парковка: ориентируемся на свободные места поблизости</li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <div className="pill-mobile" style={{ marginTop: "12px" }}>
              {/* <span className="dot" aria-hidden="true" /> */}

              <button
                className="btn ghost"
                style={{ width: "100%" }}
                onClick={() => {
                  window.location.href =
                    "yandexmaps://maps.yandex.ru/?pt=37.557816,55.762237&z=17&l=map";
                }}
              >
                <Map />
                Открыть в приложении
              </button>
            </div>
            <div className="pill-desktop" style={{ marginTop: "12px" }}>
              {/* <span className="dot" aria-hidden="true" /> */}

              <a
                className="btn ghost"
                target="_blank"
                href="https://yandex.ru/maps/org/lambic_collection/68448441158/?indoorLevel=1&ll=37.557816%2C55.762237&z=17.65"
              >
                <Map /> Открыть карту
              </a>
            </div>
          </div>
        </div>
        <div
          className="map__frame has-map"
          aria-label="Статичное изображение карты"
        ></div>
      </div>
    </section>
  );
}
