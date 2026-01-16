import React from 'react';

const Logo = ({ size = 40 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle with gold gradient */}
      <circle cx="20" cy="20" r="18" fill="url(#goldGradient)" stroke="#F4E5B8" strokeWidth="2"/>
      
      {/* Inner navy circle */}
      <circle cx="20" cy="20" r="14" fill="#003057"/>
      
      {/* Letter D in gold */}
      <text 
        x="20" 
        y="27" 
        fontSize="22" 
        fontWeight="700" 
        fill="#D4AF37" 
        textAnchor="middle" 
        fontFamily="Inter, serif"
      >
        D
      </text>
      
      {/* Gold gradient definition */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4E5B8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8952E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;

/* 
  TO REPLACE WITH YOUR OWN LOGO:
  
  1. Save your logo as an image file (PNG, SVG, etc.)
  2. Place it in: frontend/src/assets/logo.png (or .svg)
  3. Replace this component with:
  
  import React from 'react';
  import logoImage from '../assets/logo.png';
  
  const Logo = ({ size = 40 }) => {
    return (
      <img 
        src={logoImage} 
        alt="Denvan Banking Logo" 
        style={{ width: size, height: size }}
      />
    );
  };
  
  export default Logo;
*/
