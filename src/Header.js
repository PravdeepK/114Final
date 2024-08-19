import React from 'react';
import './Header.css';
import logo from './img/logo.png'; // Import the logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Musica Logo" className="logo" />
      </div>
      <div className="header-title">
        <h1>Welcome to Musica</h1>
      </div>
    </header>
  );
};

export default Header;
