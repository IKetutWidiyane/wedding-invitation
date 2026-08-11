import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';

const Wishes = () => {
  const wishes = [
    {
      name: "Keluarga Besar",
      message: "May your love grow stronger with every passing year."
    },
    {
      name: "Sahabat",
      message: "Selamat menempuh hidup baru, semoga selalu bahagia."
    },
    {
      name: "Teman Kerja",
      message: "Wishing you a lifetime of love and happiness together."
    }
  ];

  return (
    <section id="Wishes" className="py-24 px-4 bg-ivory">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="Guestbook"
          title="Wishes"
          subtitle="Your warm wishes mean the world to us"
        />

        <div className="space-y-8">
          {wishes.map((wish, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="text-center border-b border-champagne pb-8">
                <p className="font-display text-lg md:text-xl text-mocha italic mb-4">
                  "{wish.message}"
                </p>
                <p className="text-gold uppercase tracking-widest-2 text-sm">
                  — {wish.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishes;