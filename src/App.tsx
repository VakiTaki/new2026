import React from 'react';
import { FooterBar } from './components/FooterBar';
import { GallerySection } from './components/GallerySection';
import { Hero } from './components/Hero';
import { MapBlock } from './components/MapBlock';
import { Timeline } from './components/Timeline';
import { Venue } from './components/Venue';

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Venue />
        <Timeline />
        <GallerySection />
        <MapBlock />
      </main>
      <FooterBar />
    </>
  );
}
