// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updated.id ? updated : r)),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  addRecommendation: (recipe) =>
    set((state) => ({
      recommendations: [...state.recommendations, recipe],
    })),
}));
