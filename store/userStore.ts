import { create } from "zustand";

export interface UserStore {
  isSignedIn: boolean;
  setIsSignedIn: (status: boolean) => void;
}

const userStore = create<UserStore>()((set, get) => ({
  isSignedIn: false,
  setIsSignedIn: (status: boolean) => {
    set({ isSignedIn: status });
  },
}));

export default userStore;
