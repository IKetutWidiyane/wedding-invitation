import { MapPin } from 'lucide-react';
import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';
import GoldButton from '../components/wedding/GoldButton';

const Event = () => {
  const events = [
    {
      title: "Akad Nikah",
      date: "30",
      month: "AGUSTUS",
      year: "2025",
      time: "08:00 - 10:00 WITA",
      location: "Kediaman Mempelai Wanita",
      address: "Ubud, Bali"
    },
    {
      title: "Resepsi",
      date: "30",
      month: "AGUSTUS",
      year: "2025",
      time: "11:00 - 15:00 WITA",
      location: "Gedung Serba Guna",
      address: "Ubud, Bali"
    }
  ];

  return (
    <section id="Events" className="py-24 px-4 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Save The Date"
          title="The Wedding"
          subtitle="We invite you to celebrate our special day"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="text-center border border-champagne p-8 md:p-12">
                <p className="text-gold uppercase tracking-widest-2 text-sm mb-6">
                  {event.title}
                </p>

                <div className="font-display text-6xl md:text-7xl text-dark-brown mb-2">
                  {event.date}
                </div>
                <div className="font-display text-2xl text-mocha tracking-widest-2 mb-1">
                  {event.month}
                </div>
                <div className="font-display text-xl text-taupe mb-8">
                  {event.year}
                </div>

                <div className="h-px w-16 bg-champagne mx-auto mb-8"></div>

                <p className="text-mocha mb-2">{event.time}</p>
                <p className="text-dark-brown font-medium mb-1">{event.location}</p>
                <p className="text-taupe mb-8">{event.address}</p>

                <GoldButton href="#" variant="outline" className="text-xs">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    View Map
                  </span>
                </GoldButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;