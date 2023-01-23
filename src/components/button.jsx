import React, { useState } from 'react';
import './style.css';

function AnimatedHoverButton() {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <button 
      className={`but ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Book a demo
    </button>
    </>
    
  );
}

export default AnimatedHoverButton;

