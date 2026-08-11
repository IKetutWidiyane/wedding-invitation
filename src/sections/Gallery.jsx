import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';

const Gallery = () => {
  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Wedding photo 1', className: 'md:col-span-2 md:row-span-2' },
    { src: '/images/gallery-2.jpg', alt: 'Wedding photo 2', className: '' },
    { src: '/images/gallery-3.jpg', alt: 'Wedding photo 3', className: '' },
    { src: '/images/gallery-4.jpg', alt: 'Wedding photo 4', className: '' },
    { src: '/images/gallery-5.jpg', alt: 'Wedding photo 5', className: 'md:col-span-2' },
  ];

  return (
    <section id="Gallery" className="py-24 px-4 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Our Moments"
          title="Gallery"
          subtitle="Captured moments of our journey together"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Reveal key={index} delay={index * 0.1} className={image.className}>
              <div className="group relative overflow-hidden border border-champagne">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;