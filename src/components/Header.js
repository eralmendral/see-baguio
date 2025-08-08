import React from 'react';

function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #228b22 0%, #32cd32 100%)',
      color: 'white',
      padding: '24px 16px',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(34, 139, 34, 0.3)',
      borderBottom: '3px solid #1b5e20'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '2rem',
        fontWeight: '700',
        letterSpacing: '0.5px',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        🏔️ Baguio Itinerary
      </h1>
      <p style={{
        margin: '10px 0 0 0',
        fontSize: '1.1rem',
        opacity: 0.95,
        fontWeight: '400',
        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}>
        Plan your perfect trip to the City of Pines
      </p>
    </header>
  );
}

export default Header; 