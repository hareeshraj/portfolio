import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const FlipImage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message after a short delay
    const timer = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    if (showMessage) setShowMessage(false);
  };

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto" style={{ perspective: '1000px' }}>
      {/* Neon Sliding Message */}
      <AnimatePresence>
        {showMessage && !isFlipped && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="relative px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg whitespace-nowrap">
              <p className="text-white font-semibold text-sm md:text-base">
                Click me for a surprise! ✨
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-purple-500"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Flip Container */}
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={handleClick}
      >
        {/* Front Side - Photo */}
        <div
          className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img
            src={portfolioData.personal.photo}
            alt={portfolioData.personal.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300';
            }}
          />
        </div>

        {/* Back Side - Doodle */}
        <div
          className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-white dark:bg-gray-900"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={portfolioData.personal.doodle}
            alt="Doodle"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?fit=crop&w=300&h=300';
            }}
          />
        </div>
      </div>

      {/* Pulsing Glow Effect */}
      {!isFlipped && (
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.3)',
              '0 0 40px rgba(59, 130, 246, 0.6)',
              '0 0 20px rgba(59, 130, 246, 0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full pointer-events-none"
        />
      )}
    </div>
  );
};

export default FlipImage;

