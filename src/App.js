import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import PlaceList from './components/PlaceList';
import PlaceDetail from './components/PlaceDetail';
import ErrorBoundary from './components/ErrorBoundary';
import { baguioPlaces, categories } from './data/baguioPlaces';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [places, setPlaces] = useState(baguioPlaces);

  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedPlace(null);
  };

  const handleToggleVisited = (placeId) => {
    setPlaces(prevPlaces => 
      prevPlaces.map(place => 
        place.id === placeId 
          ? { ...place, visited: !place.visited }
          : place
      )
    );
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <div className="container">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <PlaceList 
            places={filteredPlaces}
            onPlaceClick={handlePlaceClick}
            onToggleVisited={handleToggleVisited}
          />
        </div>
        {showDetail && selectedPlace && (
          <PlaceDetail 
            place={selectedPlace}
            onClose={handleCloseDetail}
            onToggleVisited={handleToggleVisited}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App; 