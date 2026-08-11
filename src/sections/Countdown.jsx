import { useState, useEffect } from 'react';
import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2025-08-30T00:00:00');
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4 bg-dark-brown text-warm-white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle
          eyebrow="Counting Down"
          title="Menuju Hari Bahagia"
          className="text-warm-white"
        />

        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit, index) => (
            <Reveal key={unit.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-6xl text-gold mb-2">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-champagne uppercase tracking-widest-2 text-xs md:text-sm">
                  {unit.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;