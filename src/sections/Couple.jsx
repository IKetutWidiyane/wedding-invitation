import { motion } from 'framer-motion';
import madeft from '../assets/images/made.jpg';
import putuft from '../assets/images/putu.jpg';
import SectionTitle from '../components/wedding/SectionTitle';
import ImageReveal from '../components/animation/ImageReveal';
import Reveal from '../components/animation/Reveal';

const Couple = () => {
  return (
    <section id="Couple" className="py-24 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Our Story"
          title="The Couple"
          subtitle="A beautiful story of two people who found each other"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Groom */}
          <div className="text-center w-full max-w-xs">
            <ImageReveal
              src={madeft}
              alt="Made - Mempelai Pria"
              className="w-64 h-64 md:w-72 md:h-72 mx-auto mb-6 border border-champagne p-2"
            />
            <Reveal delay={0.1}>
              <h3 className="font-display text-sub-heading text-dark-brown mb-2">Made</h3>
              <p className="text-taupe mb-1">Putra pertama dari</p>
              <p className="text-taupe mb-4">Bapak Nyoman & Ibu Komang</p>
            </Reveal>
          </div>

          {/* Heart Divider */}
          <Reveal delay={0.2}>
            <div className="font-script text-4xl text-gold hidden md:block">♡</div>
          </Reveal>

          {/* Bride */}
          <div className="text-center w-full max-w-xs">
            <ImageReveal
              src={putuft}
              alt="Putu - Mempelai Wanita"
              className="w-64 h-64 md:w-72 md:h-72 mx-auto mb-6 border border-champagne p-2"
            />
            <Reveal delay={0.1}>
              <h3 className="font-display text-sub-heading text-dark-brown mb-2">Putu</h3>
              <p className="text-taupe mb-1">Putri kedua dari</p>
              <p className="text-taupe mb-4">Bapak Wayan & Ibu Made</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;