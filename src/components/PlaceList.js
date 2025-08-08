import React from 'react';

function PlaceList({ places, onPlaceClick, onToggleVisited }) {
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

  const handleCheckClick = (e, placeId) => {
    e.stopPropagation();
    onToggleVisited(placeId);
  };

  return (
    <div>
      {places.map(place => (
        <div
          key={place.id}
          className={`place-card ${place.visited ? 'visited' : ''}`}
          onClick={() => onPlaceClick(place)}
        >
          <div className="card-header">
            <div className="category">
              {getCategoryIcon(place.category)} {place.category}
            </div>
            <button
              className={`check-button ${place.visited ? 'checked' : ''}`}
              onClick={(e) => handleCheckClick(e, place.id)}
              title={place.visited ? 'Mark as not visited' : 'Mark as visited'}
            >
              {place.visited ? '✓' : '○'}
            </button>
          </div>
          <h3>{place.name}</h3>
          <p className="description">{place.description}</p>
          <p className="location">📍 {place.location}</p>
          <p className="distance">
            📏 {place.distance} km from center • ⏱️ {place.estimatedTime}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PlaceList; 