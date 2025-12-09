import React from "react";
import { Gallery } from "./Gallery";

export function GallerySection() {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Галерея настроения</h2>
        {/* <span className="badge">Используйте переданные изображения</span> */}
      </div>
      <Gallery />
    </section>
  );
}
