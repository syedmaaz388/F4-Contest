import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Header</h2>
      </div>
      <div className="buttons">
        <button className="signup-button">Sign Up</button>
        <button className="profile-button">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
