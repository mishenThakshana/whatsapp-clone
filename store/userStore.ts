import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./mmkv";

export interface UserStore {
  isSignedIn: boolean;
  setIsSignedIn: (status: boolean) => void;
}

const userStore = create<UserStore>()(
  persist(
    (set, get) => ({
      isSignedIn: false,
      setIsSignedIn: (status: boolean) => {
        set({ isSignedIn: status });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default userStore;
