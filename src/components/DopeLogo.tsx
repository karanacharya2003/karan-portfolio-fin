import React from 'react';
import { motion } from 'framer-motion';

interface DopeLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const DopeLogo: React.FC<DopeLogoProps> = ({ 
  size = 'medium', 
  
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

 

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center space-x-3 ${className}`}
    >
      {/* Simple Terminal Icon */}
      <div className={`${sizeClasses[size]} bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden`}>
        {/* Terminal window header */}
        <div className="absolute top-1 left-1 flex space-x-1">
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* Animated cursor */}
        <motion.div
          className="w-px h-4 bg-green-400"
          animate={{
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Code brackets */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-400 font-mono text-xs">
            {'{ }'}
          </span>
        </div>
      </div>

    </motion.div>
  );
};

export default DopeLogo;