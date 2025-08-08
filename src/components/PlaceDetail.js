import React from 'react';

function PlaceDetail({ place, onClose }) {
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
          <div className="category" style={{
            display: 'inline-block',
            background: '#3498db',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '16px',
            fontSize: '0.9rem',
            marginBottom: '12px'
          }}>
            {getCategoryIcon(place.category)} {place.category}
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