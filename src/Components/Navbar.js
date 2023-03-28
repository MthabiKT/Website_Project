import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      {/* <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} /> */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
