import { create } from "zustand";

interface AuthState {
  phone: string;
  isAuthenticated: boolean;
  location: string;

  setPhone: (phone: string) => void;
  verifyOtp: (otp: string) => void;
  setLocation: (location: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  phone: "",
  isAuthenticated: false,
  location: "",

  setPhone: (phone) => set({ phone }),

  verifyOtp: (otp) => {
    if (otp === "1234") {
      set({ isAuthenticated: true });
    }
  },

  setLocation: (location) => set({ location }),

  logout: () =>
    set({
      phone: "",
      isAuthenticated: false,
      location: "",
    }),
}));
