/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import './style.css';

function content() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isHovered, setHovered] = useState(false);

  return (
    <>
      <section className='hero'>
        <div className='container'>
            <h1>Double the hires, half the effort</h1>
            <p>Open conversation and nature relationship at scale and be the first choice when you ideal candidate is ready to explore</p>
            <a href='https://kula.ai' target="_blank">
            <button 
                    className={`but1 ${isHovered ? 'hovered1' : ''}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                    View Kula Outsearch
            </button>
            </a>
        </div>
      </section>
    </>
  );
}

export default content