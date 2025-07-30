import { motion } from 'framer-motion';

const Quote = () => {
  return (
    <section className="py-16 px-4 bg-rose-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Kutipan dalam Bahasa Sanskerta */}
          <div className="mb-8">
            <h3 className="font-great-vibes text-3xl md:text-4xl text-rose-600 mb-4">
              "Om Awighnam Astu Namo Siddham"
            </h3>
            <p className="text-gray-600 italic">
              Semoga tidak ada halangan, segala sesuatu semoga berhasil
            </p>
          </div>

          {/* Garis pemisah dekoratif */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-rose-200 w-16"></div>
            <div className="mx-4 text-rose-400">✻</div>
            <div className="h-px bg-rose-200 w-16"></div>
          </div>

          {/* Kutipan dari Al-Qur'an */}
          <div>
            <h3 className="font-great-vibes text-3xl md:text-4xl text-rose-600 mb-4">
              "Dan di antara tanda-tanda kekuasaan-Nya adalah Dia menciptakan untukmu pasangan hidup..."
            </h3>
            <p className="text-gray-600">QS. Ar-Rum: 21</p>
          </div>
        </motion.div>

        {/* Elemen dekoratif */}
        <div className="flex justify-center mt-12 space-x-4">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: item * 0.3
              }}
              className="text-rose-400 text-xl"
            >
              ✽
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quote;