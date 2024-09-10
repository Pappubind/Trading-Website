import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: 'black',
    color: 'white',
    height: '80px',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navStyle = {
    display: 'flex',
    gap: '15px',
    padding: '30px',
    height: '2rem',
  };

  const buttonStyle = {
    background: 'transparent',
    border: 'none', // Adjusted to 'none' for no border
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '10px',
    outline: 'none',
    textDecoration: 'none', // Ensure no text decoration
  };

  const activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: 'white', // Underline color
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src="/logo.png" style={logoStyle} alt="Logo" />
        <h2 style={titleStyle}>Sensible Trading</h2>
      </div>

      <nav style={navStyle}>
        <NavLink to="/home" style={({ isActive }) => isActive ? { ...buttonStyle, ...activeStyle } : buttonStyle}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? { ...buttonStyle, ...activeStyle } : buttonStyle}>About Us</NavLink>
        <NavLink to="/services" style={({ isActive }) => isActive ? { ...buttonStyle, ...activeStyle } : buttonStyle}>Our Services</NavLink>
        <NavLink to="/courses" style={({ isActive }) => isActive ? { ...buttonStyle, ...activeStyle } : buttonStyle}>Our Courses</NavLink>
        <NavLink to="/market" style={({ isActive }) => isActive ? { ...buttonStyle, ...activeStyle } : buttonStyle}>Market Updates</NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? { ...buttonStyle, ...activeStyle } : buttonStyle}>Contact Us</NavLink>
      </nav>
    </header>
  );
};

export default Header;
