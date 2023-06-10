import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  


    const handleNavLinkClick = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const targetPosition = section.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 200; // Duration of the scroll animation in milliseconds
        let startTimestamp = null;
    
        const scrollStep = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const scrollProgress = Math.min(elapsed / duration, 1);
          const scrollDistance = distance * scrollProgress;
          const scrollPosition = startPosition + scrollDistance;
          window.scrollTo(0, scrollPosition);
          if (scrollProgress < 1) {
            window.requestAnimationFrame(scrollStep);
          }
        };
    
        window.requestAnimationFrame(scrollStep);
      }
    
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
