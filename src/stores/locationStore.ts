import { create } from "zustand";

interface LocationState {
  zone: string;
  area: string;
  setLocation: (zone: string, area: string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  zone: "Dhaka",
  area: "Banassre",
  setLocation: (zone, area) =>
    set({ zone, area }),
}));
