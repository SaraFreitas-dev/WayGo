import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
    const handleNavLinkClick = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      // Only close the navbar if it is currently open
      if (isNavbarOpen) {
        setIsNavbarOpen(false);
      }
    };
  
    const toggleNavbar = () => {
      const navbarHamburger = document.querySelector('.navbar-hamburger');
      navbarHamburger.classList.toggle('active');
      setIsNavbarOpen(!isNavbarOpen);
    };

  return (
    <nav className={`navbar ${isNavbarOpen ? 'navbar-open' : ''}`}>
      <div className="navbar-hamburger" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item" onClick={() => handleNavLinkClick('main-section')}>
          Home
        </li>
        <li className="navbar-item" onClick={() => handleNavLinkClick('about-us')}>
          About Us
        </li>
        <li className="navbar-item" onClick={() => handleNavLinkClick('services')}>
          Services
        </li>
        <li className="navbar-item" onClick={() => handleNavLinkClick('gallery')}>
          Gallery
        </li>
        <li className="navbar-item" onClick={() => handleNavLinkClick('contact-us')}>
          Contacts
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
