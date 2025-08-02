// src/components/FavouritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavouritesList = () => {
  const favourites = useRecipeStore((state) => state.favourites);
  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {favourites.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;
