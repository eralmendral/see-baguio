import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import PlaceList from './components/PlaceList';
import PlaceDetail from './components/PlaceDetail';
import { baguioPlaces, categories } from './data/baguioPlaces';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const filteredPlaces = selectedCategory === 'all' 
    ? baguioPlaces 
    : baguioPlaces.filter(place => place.category === selectedCategory);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedPlace(null);
  };

  return (
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
        />
      </div>
      {showDetail && selectedPlace && (
        <PlaceDetail 
          place={selectedPlace}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}

export default App; 