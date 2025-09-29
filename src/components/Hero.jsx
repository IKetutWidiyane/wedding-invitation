import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg'; // Import gambar dari src

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
    >
      {/* Gambar Background */}
      <img
        src={heroBg}
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Konten Tengah */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-great-vibes text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
            Made & Putu
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6 tracking-widest uppercase drop-shadow-md">
            30 Agustus 2025
          </p>
        </motion.div>

        <motion.a
          href="#Couple"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all shadow-xl font-semibold"
        >
          Buka Undangan
        </motion.a>
      </div>

      {/* Panah ke Bawah */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-3xl drop-shadow"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
