import Reveal from '../animation/Reveal';

const SectionTitle = ({ eyebrow, title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {eyebrow && (
        <Reveal delay={0}>
          <p className="text-gold uppercase tracking-widest-2 text-sm mb-4">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="font-display text-section-title text-dark-brown mb-4">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="text-taupe max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionTitle;