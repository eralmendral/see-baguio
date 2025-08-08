import React from 'react';

function PlaceDetail({ place, onClose, onToggleVisited }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Tourist Spot':
        return '🏞️';
      case 'Cafe':
        return '☕';
      case 'Restaurant':
        return '🍽️';
      default:
        return '📍';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div className="category" style={{
              display: 'inline-block',
              background: '#3498db',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '0.9rem'
            }}>
              {getCategoryIcon(place.category)} {place.category}
            </div>
            <button
              className={`check-button ${place.visited ? 'checked' : ''}`}
              onClick={() => onToggleVisited(place.id)}
              title={place.visited ? 'Mark as not visited' : 'Mark as visited'}
              style={{
                background: place.visited ? '#27ae60' : 'white',
                border: '2px solid #e0e0e0',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '18px',
                color: place.visited ? 'white' : '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              {place.visited ? '✓' : '○'}
            </button>
          </div>
          <h2 style={{
            margin: '0 0 8px 0',
            color: '#2c3e50',
            fontSize: '1.5rem'
          }}>
            {place.name}
          </h2>
          <p style={{
            color: '#666',
            lineHeight: '1.5',
            margin: '0 0 16px 0'
          }}>
            {place.description}
          </p>
        </div>

        <div className="modal-body">
          <div className="info-grid">
            <div className="info-item">
              <h4>Location</h4>
              <p>📍 {place.location}</p>
            </div>
            <div className="info-item">
              <h4>Distance</h4>
              <p>📏 {place.distance} km from center</p>
            </div>
            <div className="info-item">
              <h4>Duration</h4>
              <p>⏱️ {place.estimatedTime}</p>
            </div>
            <div className="info-item">
              <h4>Best Time</h4>
              <p>🌅 {place.bestTime}</p>
            </div>
          </div>

          <div className="tips-section">
            <h4>💡 Pro Tips</h4>
            <p>{place.tips}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail; 