import { FaInstagram, FaMusic, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="py-8 px-4 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-rose-600 hover:text-rose-700 text-xl">
            <FaInstagram />
          </a>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`text-xl ${isPlaying ? 'text-rose-600' : 'text-gray-400'}`}
          >
            <FaMusic />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm">
          Made with <FaHeart className="inline text-rose-500" /> by KetutWeb • © 2025
        </p>
        
        {isPlaying && (
          <audio autoPlay loop className="hidden">
            <source src="/music/background.mp3" type="audio/mpeg" />
          </audio>
        )}
      </div>
    </footer>
  );
};

export default Footer;