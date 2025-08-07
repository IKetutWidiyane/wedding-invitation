import React, { useState } from 'react';
import Hero from './components/Hero';
import Quote from './components/Quote';
import CoupleProfile from './components/CoupleProfile';
import EventDetail from './components/EventDetail';
import Countdown from './components/Countdown';
import LoveStory from './components/LoveStory';
import RSVP from './components/RSVP';
import Gift from './components/Gift';
import Footer from './components/Footer';
import Route from './components/Route';

function App() {
  const [showRoute, setShowRoute] = useState(false);

  // Efek untuk menampilkan navigasi saat scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowRoute(true);
      } else {
        setShowRoute(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigasi */}
      {showRoute && <Route />}

      {/* Konten Utama */}
     <div className="overflow-hidden">
  <div id="Hero"><Hero /></div>
  <div id="Couple"><CoupleProfile /></div>
  <div id="Events"><EventDetail /></div>
  <div id="Story"><LoveStory /></div>
  <div id="RSVP"><RSVP /></div>
  <div id="Gift"><Gift /></div>
  <Footer />
</div>


      {/* Musik Latar (hidden audio element) */}
      <audio id="bgMusic" loop>
        <source src="/music/background.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;