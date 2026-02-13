import { create } from "zustand";

interface FavoriteState {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],

  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((fav) => fav !== id)
        : [...state.favorites, id],
    })),
}));
