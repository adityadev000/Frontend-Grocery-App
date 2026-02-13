import { create } from "zustand";

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  detail: string;
}

interface FavoriteState {
  favorites: FavoriteItem[];

  toggleFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>(
  (set, get) => ({
    favorites: [],

    toggleFavorite: (item) => {
      const exists = get().favorites.find(
        (p) => p.id === item.id
      );

      if (exists) {
        set({
          favorites: get().favorites.filter(
            (p) => p.id !== item.id
          ),
        });
      } else {
        set({
          favorites: [...get().favorites, item],
        });
      }
    },

    removeFavorite: (id) =>
      set({
        favorites: get().favorites.filter(
          (p) => p.id !== id
        ),
      }),

    isFavorite: (id) =>
      get().favorites.some((p) => p.id === id),

    clearFavorites: () => set({ favorites: [] }),
  })
);
