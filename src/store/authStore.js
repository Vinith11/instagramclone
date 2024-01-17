import { create } from "zustand";

// a new store with zustand
const useAuthStore = create((set) => ({
  // Initialize the user state with the value from local storage
  user: JSON.parse(localStorage.getItem("user-info")),

  // login action that updates the user state
  login: (user) => set({ user }),

  // logout action that clears the user state
  logout: () => set({ user: null }),

  // setUser action that updates the user state
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
