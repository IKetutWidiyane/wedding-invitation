import { motion } from 'framer-motion';

const FloralDecoration = ({ position = 'top-left', className = '' }) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`absolute pointer-events-none select-none ${positions[position]} ${className}`}
      aria-hidden="true"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold opacity-40"
      >
        <path
          d="M60 10C60 10 30 30 20 60C10 90 30 110 60 110C90 110 110 90 100 60C90 30 60 10 60 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M60 30C60 30 40 45 35 60C30 75 40 90 60 90C80 90 90 75 85 60C80 45 60 30 60 30Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="60" cy="60" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
        <path
          d="M60 10C60 10 70 20 75 35"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M60 110C60 110 50 100 45 85"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </motion.div>
  );
};

export default FloralDecoration;