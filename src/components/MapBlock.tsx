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
          {/* <div className="pill" style={{ marginTop: "12px" }}>
            <span className="dot" aria-hidden="true" />
            <span>Сохраните точку заранее в навигаторе</span>
          </div> */}
        </div>
        <div
          className="map__frame has-map"
          aria-label="Статичное изображение карты"
        ></div>
      </div>
    </section>
  );
}
