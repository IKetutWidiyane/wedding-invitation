import Reveal from '../components/animation/Reveal';

const Closing = () => {
  return (
    <section className="py-32 px-4 bg-warm-white">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-gold uppercase tracking-widest-3 text-sm mb-8">
            Thank You
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-2xl md:text-3xl text-mocha leading-relaxed mb-12">
            For being part of
            <br />
            our special day.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-taupe uppercase tracking-widest-2 text-sm mb-12">
            With Love,
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <h2 className="font-script text-5xl md:text-6xl text-gold mb-8">
            Made & Putu
          </h2>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-taupe tracking-widest-2 mb-12">
            30 . 08 . 2025
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="text-gold text-3xl">❦</div>
        </Reveal>
      </div>
    </section>
  );
};

export default Closing;