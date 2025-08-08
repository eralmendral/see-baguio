import React, { useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // For now, just toggle the state
    // In a full implementation, this would update CSS variables or context
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'rgba(255,255,255,0.2)',
        border: 'none',
        borderRadius: '8px',
        padding: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        color: 'white',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(255,255,255,0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(255,255,255,0.2)';
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle; 