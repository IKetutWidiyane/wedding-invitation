import { motion } from 'framer-motion';

const GoldButton = ({ children, href, onClick, className = '', variant = 'outline' }) => {
  const baseStyles = 'inline-block px-8 py-3 text-sm uppercase tracking-widest-2 transition-all duration-300 cursor-pointer';
  const variants = {
    outline: 'border border-champagne text-mocha hover:bg-gold hover:text-warm-white hover:border-gold',
    solid: 'bg-gold text-warm-white hover:bg-mocha',
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  );
};

export default GoldButton;