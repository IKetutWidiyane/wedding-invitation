import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-great-vibes text-6xl md:text-8xl text-white mb-2">
            Ketut & Ayu
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            30 Agustus 2025
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all shadow-lg"
        >
          Buka Undangan
        </motion.button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;