import React from 'react';

function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px 16px',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '1.8rem',
        fontWeight: '700',
        letterSpacing: '0.5px'
      }}>
        🏔️ Baguio Itinerary
      </h1>
      <p style={{
        margin: '8px 0 0 0',
        fontSize: '1rem',
        opacity: 0.9,
        fontWeight: '300'
      }}>
        Plan your perfect trip to the City of Pines
      </p>
    </header>
  );
}

export default Header; 