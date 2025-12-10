import { scrollToId } from "../utils";
import React from "react";

export function FooterBar() {
  return (
    <footer>
      <div className="section-header" style={{ marginBottom: 0 }}>
        <p
          style={{
            margin: 0,
            color: "#f7fbff",
            fontSize: "30px",
            fontWeight: "bolder",
            fontFamily: "var(--font-serif)",
          }}
        >
          Готовы к встрече 25 декабря? Увидимся в Lambic Collection!
        </p>
        <a
          className="btn ghost"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("top");
          }}
        >
          Наверх
        </a>
      </div>
    </footer>
  );
}
