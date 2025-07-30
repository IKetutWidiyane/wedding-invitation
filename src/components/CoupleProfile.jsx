import { FaInstagram } from 'react-icons/fa';

const CoupleProfile = () => {
  // Replace with actual Instagram URLs or remove if not needed
  const groomInstagram = "https://instagram.com/ketutsurya";
  const brideInstagram = "https://instagram.com/ayudewi";

  return (
    <section className="py-16 px-4 bg-white" id="couple">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-rose-600 mb-12">Mempelai</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Groom */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden border-4 border-rose-400 w-48 h-48 mx-auto mb-6 shadow-lg">
              <img 
                src="/images/groom.jpg" 
                alt="I Ketut Surya - Mempelai Pria" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">I Ketut Surya</h3>
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
                <FaInstagram /> @ketutsurya
              </a>
            ) : (
              <div className="text-rose-600 flex items-center justify-center gap-2">
                <FaInstagram /> @ketutsurya
              </div>
            )}
          </div>
          
          <div className="font-great-vibes text-4xl text-rose-600 hidden md:block">&</div>
          
          {/* Bride */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden border-4 border-rose-400 w-48 h-48 mx-auto mb-6 shadow-lg">
              <img 
                src="/images/bride.jpg" 
                alt="Ayu Dewi - Mempelai Wanita" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Ayu Dewi</h3>
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
                <FaInstagram /> @ayudewi
              </a>
            ) : (
              <div className="text-rose-600 flex items-center justify-center gap-2">
                <FaInstagram /> @ayudewi
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleProfile;