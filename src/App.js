import React from 'react';
import SmoothScroll from './components/smooth/SmoothScroll';
import MusicPlayer from './components/wedding/MusicPlayer';
import Hero from './sections/Hero';
import Couple from './sections/Couple';
import Story from './sections/Story';
import Event from './sections/Event';
import Countdown from './sections/Countdown';
import Gallery from './sections/Gallery';
import Location from './sections/Location';
import RSVP from './sections/RSVP';
import Wishes from './sections/Wishes';
import Closing from './sections/Closing';

function App() {
  return (
    <SmoothScroll>
      <div className="relative">
        <main>
          <Hero />
          <Couple />
          <Story />
          <Event />
          <Countdown />
          <Gallery />
          <Location />
          <RSVP />
          <Wishes />
          <Closing />
        </main>

        <footer className="py-12 px-4 bg-ivory text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-display text-2xl text-dark-brown mb-4">
              Made & Putu
            </p>
            <p className="text-taupe text-sm mb-2">
              Made with love
            </p>
            <p className="text-taupe text-xs">
              © 2025
            </p>
          </div>
        </footer>

        <MusicPlayer />
      </div>
    </SmoothScroll>
  );
}

export default App;