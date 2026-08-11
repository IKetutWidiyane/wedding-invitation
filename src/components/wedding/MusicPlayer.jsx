import { useState, useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/music/background.mp3');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-champagne bg-warm-white/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-warm-white transition-all duration-300 shadow-sm"
      aria-label={isPlaying ? 'Matikan musik' : 'Putar musik'}
    >
      {isPlaying ? (
        <Music2 className="w-5 h-5 animate-spin-slow" />
      ) : (
        <Music className="w-5 h-5" />
      )}
    </button>
  );
};

export default MusicPlayer;