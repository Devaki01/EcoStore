import React, { useState } from 'react';
import './Navbar.css';
import profile from '../assets/bussiness-man.png';
import logo from '../assets/eco_logo.png';
import './HomePage.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/"><img src={logo} alt="logo" className="logo" /></a>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? 'line line1 open' : 'line line1'}></div>
        <div className={menuOpen ? 'line line2 open' : 'line line2'}></div>
        <div className={menuOpen ? 'line line3 open' : 'line line3'}></div>
      </div>

      <ul className={menuOpen ? 'nav-links mobile-open' : 'nav-links'}>
        <li><a href="/about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
        <li><a href="/carbono" onClick={() => setMenuOpen(false)}>CARBONO</a></li>
        <li><a href="/shop" onClick={() => setMenuOpen(false)}>SHOP</a></li>
        <li><a href="/values" onClick={() => setMenuOpen(false)}>VALUES</a></li>
        <li><a href="/support" onClick={() => setMenuOpen(false)}>SUPPORT</a></li>
      </ul>

      <div>
        <img src={profile} alt="user" className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
