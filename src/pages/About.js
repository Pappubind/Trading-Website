import React from 'react';
import CountUp from 'react-countup';

const About = () => {
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

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: '2% 48% 40% 10%',
        gap: '20px',
        padding: '20px',
        marginTop: '20px',
        backgroundColor: 'lightyellow',
    };

    const gridItem = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const gridImageStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
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

    const LogoWithText = ({ logoSrc, text }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoSrc} style={logoStyle} alt="Logo" />
            <h2 style={titleStyle}>{text}</h2>
        </div>
    );

    const logosContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    };

    const gridContainerStyle = {
        display: 'grid',
        gap: '20px',
        backgroundImage: 'url(/4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'right',
    };

    const itemStyle = {
        textAlign: 'right',
        marginRight: '10px',
    };

    const cardStyle = {
        backgroundColor: '#0033a0',
        color: '#ffffff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        textAlign: 'center',
    };

    const buttonStyle = {
        backgroundColor: '#000000',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        display: 'block',
        margin: '0 auto', // Center the button horizontally
    };

    const buttonHoverStyle = {
        backgroundColor: '#333333',
    };

    const container = {
        color: 'black',
        marginTop: '0px',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', 
        padding: '20px',
        borderRadius: '8px', 
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
    };

    return (
        <>
            <div style={imageContainerStyle}>
                <img src="/14.jpg" alt="Header" style={imageStyle} />
                <div style={textOverlayStyle}>About Us</div>
            </div>
            <div style={paragraphContainerStyle}>
                <p style={paragraphStyle}>Why Choose Us!</p>
            </div>
            <div style={container}>
                <h1 style={{ textAlign: 'center' }}>Your Comprehensive Financial Solution!</h1>
                <p style={{ textAlign: 'center' }}>
                    Unlock your financial potential with Financial Secure. From demat accounts, mutual funds, loans, and insurance to free stock market learning courses covering technical analysis, chart analysis, indicator-based trading, and price action, we offer all you need for financial success.
                </p>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Explore Now
                </button>
            </div>
            <div style={gridContainer}>
                <div style={gridItem}></div>
                <div style={{ gridItem }}>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>A Journey of Excellence</h1>
                    <p style={{ fontSize: '18px', textAlign: 'left', color: 'blue' }}>
                        Offering demat accounts, mutual funds, loans, and insurance, complemented by free stock market learning courses, including technical analysis and indicator-based trading
                    </p>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/1.png" text="Flexible Loan and Insurance Plans" />
                        <LogoWithText logoSrc="/2.png" text="Money Back Guarantee" />
                    </div>
                    <p style={{ fontSize: '16px', color: 'GrayText' }}>
                        With over a decade of experience in the financial market, I bring comprehensive knowledge of stock market trading, particularly in technical analysis. As an established channel partner associated with Angel One stock broking business since 2017, I am committed to delivering excellence in financial services.
                    </p>
                </div>
                <div style={gridItem}>
                    <img src="/tradingabout.jpg" alt="Financial Analysis" style={gridImageStyle} />
                </div>
            </div>
            <div style={cardStyle}>
                <div>
                    <h1>For Individuals And Organisations</h1>
                    <p>
                        Discover a diverse range of financial products including demat accounts, mutual funds, loans, and insurance, complemented by our detailed stock market learning courses covering technical analysis, chart analysis, and numerical data interpretation.
                    </p>
                    <br />
                    <button
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        More Details
                    </button>
                </div>
            </div>
            <div style={gridContainerStyle}>
                <div style={itemStyle}>
                    <h1>
                        <CountUp end={1000} duration={2.5} />+
                    </h1>
                    <p>Happy Clients</p>
                </div>
                <div style={itemStyle}>
                    <h1>
                        <CountUp end={250} duration={2.5} />+
                    </h1>
                    <p>Companies</p>
                </div>
                <div style={itemStyle}>
                    <h1>
                        <CountUp end={10} duration={2.5} />+
                    </h1>
                    <p>Experience</p>
                </div>
                <div style={itemStyle}>
                    <h1>
                        <CountUp end={20} duration={2.5} />+
                    </h1>
                    <p>Active Courses</p>
                </div>
            </div>
        </>
    );
};

export default About;
