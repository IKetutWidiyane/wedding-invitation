import { MapPin } from 'lucide-react';
import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';
import GoldButton from '../components/wedding/GoldButton';

const Location = () => {
  return (
    <section id="Location" className="py-24 px-4 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Where We Celebrate"
          title="Location"
          subtitle="We would be honored to have you join us"
        />

        <Reveal>
          <div className="border border-champagne p-2 mb-8">
            <div className="h-80 w-full bg-champagne/20 overflow-hidden">
              <iframe
                title="Lokasi Pernikahan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.028920711012!2d115.25972231533865!3d-8.733752393758266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc8b3b08a5%3A0x4c1e3b0d5b9d5b1f!2sUbud%2C%20Gianyar%2C%20Bali!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center">
            <h3 className="font-display text-sub-heading text-dark-brown mb-2">
              Gedung Serba Guna
            </h3>
            <p className="text-taupe mb-8">
              Ubud, Gianyar, Bali
            </p>
            <GoldButton href="https://maps.google.com" target="_blank" variant="outline">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Open Google Maps
              </span>
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Location;