import React, { useEffect, useRef } from 'react';

const Market = () => {
  const tickerRef = useRef(null);
  const screenerRef = useRef(null);

  useEffect(() => {
    const createAndAppendScript = (src, innerHTML, ref, id) => {
      if (ref.current) {
        const existingScript = ref.current.querySelector(`#${id}`);
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.id = id;
          script.innerHTML = innerHTML;
          script.onerror = () => {
            console.error(`Error loading script: ${src}`);
          };
          ref.current.appendChild(script);
        }
      }
    };

    // Ticker Tape widget configuration
    createAndAppendScript(
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
      JSON.stringify({
        "symbols": [
          { "proName": "NSE:NIFTY", "title": "NIFTY" },
          { "proName": "NSE:RELIANCE", "title": "RELIANCE" },
          { "proName": "NSE:TCS", "title": "TCS" },
          { "proName": "NSE:KOTAKBANK", "title": "KOTAKBANK" },
          { "proName": "NSE:BAJFINANCE", "title": "BAJFINANCE" },
          { "proName": "NSE:AXISBANK", "title": "AXISBANK" },
          { "proName": "NSE:ICICIBANK", "title": "ICICIBANK" },
          { "proName": "NSE:HDFCBANK", "title": "HDFCBANK" }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "en"
      }),
      tickerRef,
      'tradingview-ticker'
    );

    // Screener widget configuration
    createAndAppendScript(
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
      JSON.stringify({
        "width": "100%",
        "height": "600",
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "market": "india",
        "showToolbar": true,
        "colorTheme": "light",
        "locale": "en"
      }),
      screenerRef,
      'tradingview-screener'
    );

    // Cleanup function to remove scripts on unmount
    return () => {
      if (tickerRef.current) {
        const tickerScript = tickerRef.current.querySelector('#tradingview-ticker');
        if (tickerScript && tickerScript.parentNode === tickerRef.current) {
          tickerRef.current.removeChild(tickerScript);
        }
      }
      if (screenerRef.current) {
        const screenerScript = screenerRef.current.querySelector('#tradingview-screener');
        if (screenerScript && screenerScript.parentNode === screenerRef.current) {
          screenerRef.current.removeChild(screenerScript);
        }
      }
    };
  }, []);

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
        <div style={textOverlayStyle}>Market Updates</div>
      </div>

      <div ref={tickerRef} style={{ marginTop: '20px' }}>
        {/* TradingView Ticker Tape will be embedded here */}
      </div>

      <div ref={screenerRef} style={{ marginTop: '20px' }}>
        {/* TradingView Widget will be embedded here */}
      </div>
    </>
  );
};

export default Market;
