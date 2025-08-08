import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
        >
          <span style={{ marginRight: '6px' }}>{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter; 