import React from 'react';

export const Courses = () => {
  const imageContainerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    marginBottom: '0px',
  };

  const imageStyle1 = {
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
    display: 'flex',
    alignItems: 'stretch', // Ensure both elements stretch to the same height
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '40px',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'lightgrey',
    marginLeft: '30px',
  };

  const imageStyle = {
    flex: '1 1 40%',
    maxWidth: '40%',
    height: '100%', // Make image take up the full height of the container
    borderRadius: '8px',
    objectFit: 'cover',
  };

  const textContainerStyle = {
    flex: '1 1 60%',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column', // Ensure text inside is aligned properly
    justifyContent: 'center',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#555',
  };

  const ulStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#555',
  };

  const liStyle = {
    marginBottom: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };
  const card={
    backgroundColor:'lightpink',
    marginBottom:'0px',
    marginTop:'0px',
  }

  return (
    <>
      <div style={imageContainerStyle}>
        <img src="/14.jpg" alt="Header" style={imageStyle1} />
        <div style={textOverlayStyle}>Our Services</div>
      </div>
      <div style={card}>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Our Courses</h1>
      <p style={{ textAlign: 'center' }}>We provide free stock market courses. Explore our range of comprehensive stock market courses.</p>
      <div style={containerStyle}>
        <img src="/16.jpg" alt="Technical Analysis" style={imageStyle} />
        <div style={textContainerStyle}>
          <h3 style={headingStyle}>Technical Analysis</h3>
          <p style={paragraphStyle}>
            We will analyze trends and trading volumes and demonstrate how to use various tools to identify bullish and bearish signals in the capital market. We will explore technical analysis tools such as: Line charts, bar charts, candlestick charts, Moving averages. Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities in price trends and patterns seen on charts.
          </p>
          <h4 style={{ headingStyle }}>What You'll Learn:</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>Understanding key technical indicators: moving averages, RSI, MACD, etc.</li>
            <li style={liStyle}>Recognizing chart patterns and their significance in predicting price movements</li>
            <li style={liStyle}>Developing risk management strategies based on technical analysis signals...and much more</li>
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
      <div style={containerStyle}>
        <img src="/17.jpg" alt="Chart Analysis" style={imageStyle} />
        <div style={textContainerStyle}>
          <h3 style={headingStyle}>Chart Analysis</h3>
          <p style={paragraphStyle}>
            Unlock the power of chart analysis and elevate your trading strategies to new heights. In this comprehensive course, you'll delve into the intricacies of interpreting price charts, identifying patterns, and making informed decisions based on historical data. From understanding candlestick patterns to mastering technical indicators, you'll gain the skills needed to navigate the dynamic world of financial markets with confidence.
          </p>
          <h4 style={{ headingStyle }}>What You'll Learn:</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>Understanding different types of charts: line, bar, and candlestick</li>
            <li style={liStyle}>Identifying key chart patterns and their implications</li>
            <li style={liStyle}>Utilizing technical indicators to confirm trading signals...and much more</li>
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
      <div style={containerStyle}>
        <img src="/18.jpg" alt="Indicator Based Trading" style={imageStyle} />
        <div style={textContainerStyle}>
          <h3 style={headingStyle}>Indicator Based Trading</h3>
          <p style={paragraphStyle}>
            Unlock the power of technical indicators and revolutionize your trading strategies with our Indicator Based Trading course. In this comprehensive program, you'll learn how to harness the predictive power of various indicators to make informed trading decisions.
          </p>
          <h4 style={{ headingStyle }}>What You'll Learn:</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>Understanding different types of indicators: trend-following, momentum, volatility, and volume</li>
            <li style={liStyle}>Developing indicator-based trading strategies for various market conditions</li>
            <li style={liStyle}>Implementing risk management techniques to optimize trading outcomes...and much more</li>
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
      <div style={containerStyle}>
        <img src="/19.jpg" alt="Price Action" style={imageStyle} />
        <div style={textContainerStyle}>
          <h3 style={headingStyle}>Price Action</h3>
          <p style={paragraphStyle}>
            Embark on a journey to master the art of Price Action Trading and unleash your potential in the financial markets. Our comprehensive course is designed to equip you with the essential skills and techniques needed to interpret market dynamics, identify high-probability trading setups, and execute trades with precision.
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Identifying key candlestick patterns and their implications for price movement.</li>
            <li style={liStyle}>Analyzing market structure and identifying support and resistance levels.</li>
            <li style={liStyle}>Utilizing price action signals to time market entries and exits...and much more.</li>
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
    </>
  );
};
