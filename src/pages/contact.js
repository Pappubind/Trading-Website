import React from 'react';

const Contact = () => {
  const containerStyle = {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: 'lightblue',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    marginBottom: '20px',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '15px',
    flex: '1',
    marginRight: '10px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '150px',
    resize: 'none',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'block',
    margin: '0 auto', // Center the button
  };

  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gap: '20px',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: 'blue',
  };

  const gridItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  };

  const gridImageStyle = {
    width: '100%',
    height: '820px',
    objectFit: 'cover',
  };

  const socialIconsStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };

  const socialIconStyle = {
    marginRight: '15px',
    color: '#333',
    fontSize: '24px',
  };

  const formRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  };

  const imageContainerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  return (
    <>
      <div style={imageContainerStyle}>
        <img src="/14.jpg" alt="Header" style={imageStyle} />
        <div style={textOverlayStyle}>contact Us</div>
      </div>
      <div style={gridContainer}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <h2 style={headerStyle}>If You Have Any Query, Please Contact Us</h2>
            <form>
              <div style={formRowStyle}>
                <div style={formGroupStyle}>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input type="text" id="name" name="name" style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input type="email" id="email" name="email" style={inputStyle} />
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={formGroupStyle}>
                  <label htmlFor="number" style={labelStyle}>Mobile No.</label>
                  <input type="text" id="number" name="number" style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                  <label htmlFor="service" style={labelStyle}>Select Services</label>
                  <select id="service" name="service" style={inputStyle}>
                    <option value="">Select a Service</option>
                    <option value="service1">Demant Account</option>
                    <option value="service2">Mutual Funds</option>
                    <option value="service3">Loan & Insurance</option>
                  </select>
                </div>
              </div>
              <div style={formGroupStyle}>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea id="message" name="message" style={textareaStyle}></textarea>
              </div>
              <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
            <div style={socialIconsStyle}>
              <h3>Connect with Us</h3>
              <a href="#" style={socialIconStyle}><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-youtube"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div style={gridItem}>
          <img src="/contactus.jpg" alt="Contact Us" style={gridImageStyle} />
        </div>
      </div>
    </>
  );
}

export default Contact;
