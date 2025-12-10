import React from "react";
import { schedule } from "../data/content";

export function Timeline() {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Как пройдёт вечер</h2>
        {/* <span className="badge">Традиции команды</span> */}
      </div>
      <div className="timeline">
        {schedule.map((item) => (
          <div key={item.time} className="card timeline-item">
            <h2 style={{ textAlign: "center" }}>{item.time}</h2>
            <h2>{item.header}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
