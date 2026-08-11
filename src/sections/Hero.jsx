import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg';
import FloralDecoration from '../components/wedding/FloralDecoration';
import GoldButton from '../components/wedding/GoldButton';

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Wedding Background"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-dark-brown/40"></div>

      {/* Floral Decorations */}
      <FloralDecoration position="top-left" className="hidden md:block" />
      <FloralDecoration position="top-right" className="hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-champagne uppercase tracking-widest-3 text-sm md:text-base mb-6"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="font-display text-hero-name text-warm-white mb-6 leading-tight"
        >
          Made & Putu
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-champagne"></div>
          <p className="text-warm-white tracking-widest-2 text-sm md:text-base">
            30 AGUSTUS 2025
          </p>
          <div className="h-px w-12 bg-champagne"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        >
          <GoldButton href="#Couple">
            Open Invitation
          </GoldButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-champagne text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;