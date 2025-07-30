import { useState, useEffect } from 'react';

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

  return (
    <section className="py-16 px-4 bg-rose-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-great-vibes text-4xl mb-8">Menuju Hari Bahagia</h2>
        
        <div className="flex justify-center gap-4 md:gap-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white bg-opacity-20 rounded-lg p-4 w-20 md:w-24 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold">{value}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;