import React from "react";
import { galleryItems } from "../data/content";

export function Gallery() {
  return (
    <div className="gallery">
      {galleryItems.map((item, i) => (
        <div
          key={i}
          className="gallery-card"
          data-label={item.label}
          style={{ backgroundImage: `url("${item.path}"), ${item.fallback}` }}
          aria-label={item.label}
        />
      ))}
    </div>
  );
}
