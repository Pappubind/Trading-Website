import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';



const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = [
        { image: '/trading1.jpg', text: (<><h2>Global Trade Tensions Ease, Boosting Investor Confidence.</h2><p style={{ fontSize: '24px', color: 'black' }}>Investor confidence is on the rise as global trade tensions ease, signaling a more stable environment for financial markets.</p></>) },
        { image: '/trading2.jpg', text: (<><h2>Before Giving up on Trading, let's try once more.</h2><p style={{ fontSize: '24px', color: 'black' }}>Before quitting trading, let's give it one more try. With a fresh perspective and determination, there might still be untapped opportunities waiting.</p></>) }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [content.length]);

    const container = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
        borderRadius: '8px',

    };

    const imageStyle = {
        width: '1920px',
        height: '800px',
        objectFit: 'cover',
    };

    const textStyle = {
        position: 'absolute',
        color: 'blue',
        fontSize: '48px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'left',
        width: '90%',
    };

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: ' 2% 48% 40% 10%',
        gap: '20px',
        padding: '20px',
        marginTop: '20px',
        flexDirection: 'row', // Arrange items in a row
        justifyContent: 'space-between', // Optional: adjust spacing between items
        backgroundColor: '#f6e1d3',
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
        justifyContent: 'space-between', // Ensures logos are evenly spaced
        width: '100%',
    };
    const gridContainerStyle = {
        display: 'grid',
        gap: '20px',
        backgroundImage: 'url(/4.jpg)', // Corrected typo here
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the background image
        textAlign: 'right'
    };


    const itemStyle = {
        textAlign: 'right',
        marginRight: '10px',
    }
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
    };

    const buttonHoverStyle = {
        backgroundColor: '#333333', 
    };
    const flexContainerStyle={
        display: 'grid',
        gridTemplateColumns: ' 2% 48% 40% 10%',
        gap: '20px',
        padding: '20px',
        marginTop: '20px',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: 'lightblue',

    }
    const flexStyle={
        display: 'grid',
        gridTemplateColumns: ' 5% 30% 30% 30% 5%',
        gap: '20px',
        padding: '20px',
        marginTop: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        backgroundColor: 'orange',

    }

    return (
        <div>
            <div style={container}>
                <img src={content[currentIndex].image} alt="Trading Scene" style={imageStyle} />
                <div style={textStyle}>{content[currentIndex].text}</div>
            </div>

            <div style={gridContainer}>
                <div style={gridItem}></div>
                <div style={{ gridItem }}>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>Navigate the Markets with Confidence: Let Us Help You Safeguard Your Investments</h1>
                    <p style={{ fontSize: '18px', textAlign: 'left', color: 'blueviolet' }}>
                        Chart your path to financial success with peace of mind. Our dedicated support team is here to safeguard your investments, guiding you through the markets with confidence.
                    </p>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/1.png" text="Flexible Investment Plans" />
                        <LogoWithText logoSrc="/2.png" text="Secure Trading Environment" />
                    </div>
                    <p style={{ fontSize: '16px', color: 'GrayText' }}>Cruise through market volatility with assurance. Our expert team is dedicated to protecting your investments, ensuring your journey is smooth and secure.</p>
                    <p><h3 style={{ display: 'inline' }}>Contact Us:</h3>+91 9975166900</p>
                </div>
                <div style={gridItem}>
                    <img src="/trading3.jpg" alt="Financial Analysis" style={gridImageStyle} />
                </div>
            </div>
            <div style={cardStyle}>
                <div>
                    <h1>Discover the numbers behind our success.</h1>
                    <p>
                        With a growing tally of satisfied clients, successful projects, and prestigious awards,
                        our track record speaks volumes. Join our community of investors who trust us to deliver
                        exceptional results, backed by a proven history of excellence and recognition in the
                        financial industry.
                    </p>
                    <br />
                    <button
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Read More
                    </button>
                </div>
            </div>
          
            <div style={flexContainerStyle}>
                <div style={gridItem}></div>
                <div style={gridItem}>
                    <img src="/feature.jpg" alt="Financial Analysis" style={gridImageStyle} />
                </div>
                <div style={{ gridItem }}>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>Explore why traders around the globe choose us !</h1>
                    <p style={{ fontSize: '18px', textAlign: 'left' }}>
                    From our cutting-edge technology to our unparalleled customer service, we offer a range of reasons to make us your preferred trading platform. With a focus on reliability, innovation, and user satisfaction, we strive to exceed expectations and empower our clients to achieve their financial goals with confidence.
                    </p>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/8.png" text="Dedicated Support" />
                        </div>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/7.png" text="Seamless User Experience" />
                    </div>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/6.png" text="Cost-Efficient Solutions" />
                    </div>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/5.png" text="Easy Process" />
                    </div>
                </div>
               
            </div>

            <h1 style={{textAlign:'center', backgroundImage:'url(/3.jpeg)', color:'white', marginBottom:'0px'}}>We Provide professional Trading Services</h1>

            <div style={flexStyle}>
                <div style={gridItem}></div>
                <div style={{ gridItem }}>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/10.png" text="Demat Account" />
                    </div>
                    <p style={{fontSize:'18px'}}>A Demat account is an electronic account used to hold and trade securities in electronic form. It serves as a repository for stocks, bonds, mutual funds, and other financial instruments, eliminating the need for physical share certificates.</p>
                    <button
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Read More
                    </button>
                </div>
                <div style={{ gridItem }}>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/11.png" text="Mutual Funds" />
                    </div>
                    <p>Invest in a diversified portfolio of stocks, bonds, and other securities with mutual funds. Managed by experienced professionals, mutual funds offer investors access to a range of investment opportunities, providing diversification, professional management, and convenience in a single investment vehicle.</p>
                    <button
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Read More
                    </button>
                </div>
                <div style={{ gridItem }}>
                    <div style={logosContainerStyle}>
                        <LogoWithText logoSrc="/9.png" text="Loans & Insurance" />
                    </div>
                    <p>Discover personalized loan options and comprehensive insurance coverage to safeguard your future. From mortgages to protection against life's uncertainties, we offer tailored solutions for your peace of mind.</p>
                    <button
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Read More
                    </button>
                </div>
                <div style={gridItem}></div>
               
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
        </div >

    );
};

export default Home;