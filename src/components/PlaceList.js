import React from 'react';

function PlaceList({ places, onPlaceClick }) {
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
    <div>
      {places.map(place => (
        <div
          key={place.id}
          className="place-card"
          onClick={() => onPlaceClick(place)}
        >
          <div className="category">
            {getCategoryIcon(place.category)} {place.category}
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