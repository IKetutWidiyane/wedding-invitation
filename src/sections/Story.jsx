import { motion } from 'framer-motion';
import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';

const Story = () => {
  const milestones = [
    {
      year: "2018",
      title: "Pertemuan Pertama",
      description: "Bertemu di kampus Universitas Lampung"
    },
    {
      year: "2020",
      title: "Mulai Hubungan",
      description: "Resmi berpacaran setelah lulus kuliah"
    },
    {
      year: "2023",
      title: "Tunangan",
      description: "Melangsungkan acara tunangan di Bali"
    },
    {
      year: "2025",
      title: "Pernikahan",
      description: "Menikah di Ubud, Bali"
    }
  ];

  return (
    <section id="Story" className="py-24 px-4 bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Our Journey"
          title="Our Story"
          subtitle="Every love story is beautiful, but ours is my favorite"
        />

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-champagne origin-top"
          />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Year Badge */}
                <div className={`w-24 flex-shrink-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:px-4`}>
                  <Reveal delay={0.1}>
                    <span className="font-display text-2xl text-gold">
                      {milestone.year}
                    </span>
                  </Reveal>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 w-3 h-3 rounded-full bg-gold transform -translate-x-1/2 mt-2"></div>

                {/* Content */}
                <Reveal delay={0.2} className={`flex-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="border-l border-champagne pl-6">
                    <h3 className="font-display text-sub-heading text-dark-brown mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-taupe leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;