import { motion } from 'framer-motion';

const ImageReveal = ({ src, alt, className = '', duration = 1 }) => {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, ease: 'easeOut' }}
      className={`overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

export default ImageReveal;