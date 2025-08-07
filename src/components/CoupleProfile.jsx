import { FaInstagram } from 'react-icons/fa';

import madeft from '../assets/images/made.png';
import demaft from '../assets/images/dema.png';
const CoupleProfile = () => {
  // Replace with actual Instagram URLs or remove if not needed
  const groomInstagram = "https://instagram.com/made";
  const brideInstagram = "https://instagram.com/dema";

  return (
    <section className="py-16 px-4 bg-white" id="couple">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-rose-600 mb-12">Mempelai</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Groom */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden border-4 border-rose-400 w-48 h-48 mx-auto mb-6 shadow-lg">
              <img 
                src={madeft} 
                alt="Made  - Mempelai Pria" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Made</h3>
            <p className="text-gray-600 mb-1">Putra pertama dari</p>
            <p className="text-gray-600 mb-4">Bapak Nyoman & Ibu Komang</p>
            
            {groomInstagram ? (
              <a 
                href={groomInstagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 flex items-center justify-center gap-2"
                aria-label="Instagram Mempelai Pria"
              >
                <FaInstagram /> @made
              </a>
            ) : (
              <div className="text-rose-600 flex items-center justify-center gap-2">
                <FaInstagram /> @made
              </div>
            )}
          </div>
          
          <div className="font-great-vibes text-4xl text-rose-600 hidden md:block">&</div>
          
          {/* Bride */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden border-4 border-rose-400 w-48 h-48 mx-auto mb-6 shadow-lg">
              <img 
                src={demaft}
                alt="Demaria - Mempelai Wanita" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Demaria</h3>
            <p className="text-gray-600 mb-1">Putri kedua dari</p>
            <p className="text-gray-600 mb-4">Bapak Wayan & Ibu Made</p>
            
            {brideInstagram ? (
              <a 
                href={brideInstagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 flex items-center justify-center gap-2"
                aria-label="Instagram Mempelai Wanita"
              >
                <FaInstagram /> @demaria
              </a>
            ) : (
              <div className="text-rose-600 flex items-center justify-center gap-2">
                <FaInstagram /> @demaria
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleProfile;