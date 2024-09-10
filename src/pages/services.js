import React from 'react';

export const Services = () => {
  const imageContainerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    marginBottom: '0px',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const containerStyle = {
    margin: '20px auto',
    maxWidth: '800px',
    textAlign: 'center',
    color: 'white',
  };

  const paragraphContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
  };

  const paragraphStyle = {
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '8px',
    padding: '10px',
    maxWidth: '150px',
    color: 'white',
    fontSize:'24px'
  };

  const buttonStyle = {
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '20px auto',
    display: 'block',
  };

  const buttonHoverStyle = {
    backgroundColor: '#333333',
  };

  const container = {
    backgroundColor: 'blue',
    color: 'white',
    marginTop: '0px',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    margin: '20px auto',
    maxWidth: '1200px',
  };

  const cardStyle = {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const content = {
    margin: '100px',
  };

  const content1 = {
    textAlign: 'center',
  };

  const cardContainerStyle1 = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '10px',
    margin: '20px auto',
    maxWidth: '1200px',
    backgroundColor: 'grey',
  };

  const card1 = {
    textAlign: 'center',
  };

  const sideBySideContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '40px',
  };

  const sideBySideImage = {
    flex: '1 1 40%',
    height: 'auto',
    maxWidth: '40%',
    objectFit: 'cover',
  };

  const sideBySideText = {
    flex: '1 1 60%',
    textAlign: 'left',
  };

  const ulStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
  };
  const logosContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Ensures logos are evenly spaced
    width: '100%',
  };

  const LogoWithText = ({ logoSrc, text }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoSrc} style={logoStyle} alt="Logo" />
        <h2 style={titleStyle}>{text}</h2>
    </div>
);
const logoStyle = {
  width: '40px',
  height: '40px',
  marginRight: '10px',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};


  return (
    <>
      <div style={imageContainerStyle}>
        <img src="/14.jpg" alt="Header" style={imageStyle} />
        <div style={textOverlayStyle}>Our Services</div>
      </div>

      <div style={container}>
        <div style={containerStyle}>
          <div style={paragraphContainerStyle}>
            <p style={paragraphStyle}>Trading...</p>
          </div>
          <h1>Strategic asset transactions.!</h1>
          <p>
            Diversify investments with mutual funds; streamline trading and holdings through integrated trading and Demat accounts for a seamless online investment experience.
          </p>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Read More
          </button>
        </div>
      </div>

      <div style={cardContainerStyle}>
        <div style={cardStyle} className="card">
          <h2>Demat account</h2>
          <p>A Demat account is an electronic account that holds securities in a dematerialized form, enabling easy trading and investment in the stock market.</p>
        </div>
        <div style={cardStyle} className="card">
          <h2>Trading Account</h2>
          <p>A trading account enables individuals to buy and sell securities in financial markets, facilitating investment and speculation.</p>
        </div>
        <div style={cardStyle} className="card">
          <h2>Mutual Funds</h2>
          <p>Mutual funds offer a convenient way for investors to pool their money together to invest in a diversified portfolio managed by professional fund managers.</p>
        </div>
      </div>

      <div style={content}>
        <div style={content1}>
          <h1 style={{ border: '1px' }}>Demat account</h1>
          <p>"Open a Demat account online today and start trading hassle-free."</p>
        </div>
        <div style={sideBySideContainer}>
          <img src='/Angel.jpeg' style={sideBySideImage} alt="Demat account" />
          <div style={sideBySideText}>
            <h3>Demat account</h3>
            <p>"Get ₹0 brokerage on equity delivery trades with no hidden charges! Enjoy just ₹20 per order for intraday, F&O, currencies, and commodities. Open your account online now for a lifetime of zero brokerage on delivery trades!"</p>
            <ul style={ulStyle}>
              <li>Zero brokerage on Equity Delivery: Trade equity delivery without any brokerage fees and no hidden charges.</li>
              <li>Low ₹20 Per Order: Intraday, Futures & Options (F&O), currencies, and commodities trading at just ₹20 per order.</li>
              <li>Lifetime Zero Brokerage: Open your account online to enjoy a lifetime of zero brokerage on delivery trades.</li>
            </ul>
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <div style={card1}>
        <h1>We Provide professional<br /> Loan</h1>
        <div style={cardContainerStyle1}>
          <div style={cardStyle} className="card">
          <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/21.png" text="Personal Loan" />
                    </div>
            <p>A personal loan provides individuals with a lump sum of money that is repaid in fixed installments over a specified period, typically without requiring collateral.</p>
          </div>
          <div style={cardStyle} className="card">
          <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/22.png" text="Home Loan" />
                    </div>
            <p>A home loan facilitates the purchase of residential properties by providing borrowers with financing secured against the property being purchased.</p>
          </div>
          <div style={cardStyle} className="card">
          <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/23.png" text="Vehicle Loan" />
                    </div>
            <p>A vehicle loan enables individuals to purchase automobiles by providing financing that is secured against the vehicle being bought.</p>
          </div>
          <div style={cardStyle} className="card">
          <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/24.png" text="Business Loan" />
                    </div>
            <p>A business loan provides financing to entrepreneurs and companies to support their operations, expansions, or other business-related needs.</p>
          </div>
          <div style={cardStyle} className="card">
          <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/25.png" text="Property Loan" />
                    </div>
            <p>A property loan offers financing for the purchase or development of real estate, secured against the property itself.</p>
          </div>
        </div>
      </div>
    </>
  );
};
