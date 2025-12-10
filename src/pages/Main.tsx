import React from "react";
import { FooterBar } from "../components/FooterBar";
import { GallerySection } from "../components/GallerySection";
import { Hero } from "../components/Hero";
import { MapBlock } from "../components/MapBlock";
import Registration from "../components/Registration";
import { Timeline } from "../components/Timeline";
import { Venue } from "../components/Venue";

export default function Main() {
  return (
    <>
      <Hero />
      <main>
        <Venue />
        <Timeline />
        {/* <GallerySection /> */}
        <MapBlock />
        <Registration />
      </main>
      <FooterBar />
    </>
  );
}
