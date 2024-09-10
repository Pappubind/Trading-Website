import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '30px 0',
    textAlign: 'left',
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: 'auto',
  };

  const footerSectionStyle = {
    flex: 1,
    margin: '0 20px',
    color:'white'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const logoStyle = {
    marginRight: '10px',
    width: '40px', // Adjust size as needed
    height: '40px', // Adjust size as needed
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const socialIconsStyle = {
    marginTop: '20px',
    fontSize: '20px',
    border:'1px'
  };

  const socialIconStyle = {
    marginRight: '15px',
    color: '#fff',
  };

  const footerBottomStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #444',
  };

  const linkStyle = {
    color: '#00d4ff',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <div style={logoContainerStyle}>
            <img src="/logo.png" style={logoStyle} />
            <h2 style={titleStyle}>Sensible Trading</h2>
          </div>
          <p>
            Cruise through market volatility with assurance. Our expert team is dedicated
            to protecting your investments, ensuring your journey is smooth and secure.
          </p>
          <div style={socialIconsStyle}>
            <a href="#" style={socialIconStyle}><i className="fab fa-facebook-f"></i></a>
            <a href="#" style={socialIconStyle}><i className="fab fa-youtube"></i></a>
            <a href="#" style={socialIconStyle}><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div style={footerSectionStyle}>
          <h3>Address</h3>
          <p>B2 Sai tower Vasai west thane Maharashtra 401202</p>
          <p>Phone: +91 9975166900</p>
          <p>Email: <a href="mailto:vishwajeets889@gmail.com" style={linkStyle}>vishwajeets889@gmail.com</a></p>
        </div>
        <div style={footerSectionStyle}>
          <h3>Quick Links</h3>
          <ul style={{ listStyleType: '', padding: 0 }}>
            <li><a href="#" style={linkStyle}>About Us</a></li>
            <li><a href="#" style={linkStyle}>Contact Us</a></li>
            <li><a href="#" style={linkStyle}>Our Services</a></li>
            <li><a href="#" style={linkStyle}>Our Courses</a></li>
          </ul>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>2024 &copy; All Rights Reserved | Designed and Developed by <a href="#" style={linkStyle}>Cosmic Solutions</a></p>
      </div>
    </footer>
  );
};

export default Footer;