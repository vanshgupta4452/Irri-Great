import React from 'react';
import './NavBar.css'; // Importing the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={require('../assets/logo.jpg')} alt="Logo" />
      </div>
      <ul className="nav-links">
        
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
