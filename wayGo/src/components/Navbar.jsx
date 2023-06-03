import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
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
        <li className="navbar-item" onClick={() => handleNavLinkClick('reviews')}>
          Reviews
        </li>
        <li className="navbar-item" onClick={() => handleNavLinkClick('contact-us')}>
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
