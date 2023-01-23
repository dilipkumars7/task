/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Butt from './button';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };


  return (
    <>
      <nav className={`navbar ${stickyClass}`}>
        <img src="./img/log.png" className='logo'/>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links1"} onClick={() => setMobile(false)}>
        <Link to='#'>
            <li>Product</li>
          </Link>
          <Link to='#'>
            <li>OurStory</li>
          </Link>
          <Link to='#'>
            <li>Resource</li>
          </Link>
          </ul>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='#'>
            <Butt />
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
}

export default Navbar;