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
            <h3>{item.time}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
