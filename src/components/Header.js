import React from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
      color: 'white',
      padding: '20px 16px',
      position: 'relative',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
          }}>
            🔍
          </div>
          <h1 style={{
            margin: 0,
            fontSize: '1.6rem',
            fontWeight: '500',
            letterSpacing: '0.02em',
            fontFamily: "'Poppins', sans-serif"
          }}>
            See Baguio
          </h1>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          opacity: 0.9,
          fontFamily: "'Inter', sans-serif",
          fontWeight: '300',
          letterSpacing: '0.01em'
        }}>
          <span>🏔️</span>
          <span>City of Pines</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header; 